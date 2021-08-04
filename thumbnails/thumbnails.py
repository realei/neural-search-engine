import sys
import os
from flask import (
    Blueprint, request, current_app, send_file
)

bp = Blueprint('thumbnails', __name__, url_prefix='/medias')

@bp.route('/thumbnails/<filename>', methods=['GET'])
def thumbnails(filename):
    """
    http://stage.neuralsearch.com/thumbnails/1.jpg
    """
    
    # file_type = "jpg"
    # filename = str(image_id) + '.' + file_type

    return send_file(
        os.path.join(
            current_app.config['IMAGES_FOLDER'],
            filename
            ))
