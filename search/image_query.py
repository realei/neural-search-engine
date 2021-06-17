from flask import (
    Blueprint, flash, g, redirect, request, url_for
)

from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename

import numpy as np
from PIL import Image


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

        img = Image.open(file)
        img = np.array(img)

        #img = cv2.imread(file)
        print(f"\n Uploaded file -> img np array after request: {type(img)} \n")
        print(f"\n shape of the image is: {img.shape} \n")

        return(filename)
