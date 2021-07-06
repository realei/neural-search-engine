import sys
import os
from flask import (
    Blueprint, request, current_app, send_file
)

from werkzeug.exceptions import abort

.config['IMAGES_FOLDER']

bp = Blueprint('thumbnails', __name__, url_prefix='/medias')

@bp.route('/thumbnails/<int:image_id>', methods=['GET'])
def thumbnails(image_id):
    """
    http://stage.neuralsearch.com/thumbnails/1
    """
    
    file_type = "jpg"
    filename = str(image_id) + '.' + file_type

    return send_file(
        os.path.join(
            current_app.config['IMAGES_FOLDER'],
            filename
            ))

