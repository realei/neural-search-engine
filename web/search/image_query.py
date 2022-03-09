import json
import sys
import os
import time
from flask_cors import CORS
from flask import (
    Blueprint, flash, g, redirect, request, url_for, current_app
)

from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename

sys.path.append("..")
from celery_task_faiss.tasks import faissIndexing
from celery_task_dl.tasks import feature_extraction
from celery.result import AsyncResult

bp = Blueprint('image_query', __name__, url_prefix='/image')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

CORS(bp) # enable CORS on the bp blue print

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/query', methods=['POST', 'GET'])
def query():
    if request.method == 'POST' or request.method == 'GET':
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

        print(os.path.join(current_app.config['UPLOAD_FOLDER'], file.filename))
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(current_app.config['UPLOAD_FOLDER'], filename))
            #return redirect(url_for('download_file', name=filename))

        # Call Celery async tasks
        res = feature_extraction.delay(filename)

        cnt = 0
        while True:
            cnt += 1
            status = res.status
            print(status)
            if 'SUCCESS' in status:
                print('Feature Extraction task is done!')
                break
            time.sleep(1)
            if cnt > 10:
                flash('Failed with Feature Extraction task')
                return redirect(request.url)

        feature_vectors = res.get()

        top_k = faissIndexing.delay(feature_vectors)

        cnt = 0
        while True:
            cnt += 1
            status = top_k.status
            print(status)
            if 'SUCCESS' in status:
                print('Faiss Indexing is done!')
                break
            time.sleep(1)
            if cnt > 10:
                flash('Failed with Faiss Indexing task')
                return redirect(request.url)

        result = top_k.get()[0]

        return result

@bp.route('/index/<int:top_k>', methods=['GET'])
def index(top_k):
    if request.method == 'GET':
        pass
