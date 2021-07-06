import sys
import os
from flask import (
    Blueprint, flash, g, redirect, request, url_for, current_app
)

from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename


bp = Blueprint('thumbnails', __name__, url_prefix='/medias')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/thumbnails', methods=['GET'])
def thumbnails():
    if request.method == 'GET':


    return(f"Top 10 indexes are: {list(topk_indexes[0])}")
