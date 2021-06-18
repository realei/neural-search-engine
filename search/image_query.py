import torch
import sys
import cv2
from flask import (
    Blueprint, flash, g, redirect, request, url_for
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
        
        img = img.transpose(2,0,1)

        normd_img = normalize_input(img)
        normd_img = np.expand_dims(normd_img, axis=0)

        model = ImageModel(model_name=CFG.model_name, pretrained=True)
        model.eval
        model.to(CFG.device)

        label = 1 # Inference dont need label
        feat = model(normd_img, label)
        img_embeddings = feat.detach().cpu()

        print(f"\n type of embeddings: {type(img_embeddings)}")
        print(f"\n shape of embeddings: {img_embeddings.size} \n")

        return(filename)
