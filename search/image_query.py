import torch
import faiss
import sys
import cv2
from flask import (
    Blueprint, flash, g, redirect, request, url_for, current_app
)

from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename

import numpy as np
from PIL import Image

sys.path.append("..")
from engine.modules import normalize_input, ImageModel, CFG


bp = Blueprint('image_query', __name__, url_prefix='/image')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/query', methods=['GET'])
def query():
    if request.method == 'GET':
        # Check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            #file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            #return redirect(url_for('download_file', name=filename))

        img = Image.open(file)  # PIL by default is RGB
        img = np.array(img)
        #img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        print(f"\n After PIL->np.array shape is: {img.shape} \n")

        img_t = normalize_input(img)
        normd_img = img_t["image"]

        normd_img = normd_img.astype(np.float32)
        normd_img = normd_img.transpose(2,0,1)

        print(f"shape of normd_img: {normd_img.shape}")
        normd_img = np.expand_dims(normd_img, axis=0)
        normd_img = torch.tensor(normd_img).float()

        print(f"\n value of normd_img: {normd_img} \n")
        print(normd_img.shape)

        #normd_img = normd_img.transpose(2,0,1)

        model = ImageModel(model_name=CFG.model_name, pretrained=True)
        model.eval
        model.to(CFG.device)

        # Inference dont need label
        label = torch.tensor(1).int()

        with torch.no_grad():
            feat = model(normd_img, label)
        
        img_embeddings = feat.detach().cpu()

        #tensor --> np
        img_embeddings = img_embeddings.numpy()

        #TBD: to be deleted after indexing endpoint finished
        print(f"\n type of embeddings: {type(img_embeddings)}")
        print(f"\n len of embeddings: {len(img_embeddings[0])} \n")
        print(f"\n value of embeddings: {img_embeddings}\n")
        print(f"\n shape of embeddings: {img_embeddings.shape}\n")

        embeddings = np.load(current_app.config['EMBEDDINGS'])
        _, d = embeddings.shape

        #Build the index
        index = faiss.IndexFlatL2(d)
        index.add(embeddings)

        top_k = 10

        _, topk_indexes = index.search(img_embeddings, top_k)

        print(f"\nTop 10 indexes are: {list(topk_indexes[0])}\n")
        
        return(f"Top 10 indexes are: {list(topk_indexes[0])}")


@bp.route('/index/<int:top_k>', methods=['GET'])
def index(top_k):
    if request.method == 'GET':
        pass
