import os

from flask import Flask

from . import image_query

def create_app(test_config=None):
    
    APP_DIR = os.path.dirname(os.path.abspath(__file__))
    print(APP_DIR)

    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'search.sqlite'),
    )

    #app.config['PHOTOS']
    app.config['EMBEDDINGS'] = os.path.join(
        app.instance_path,
        "embeddings.npy"
        )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_apping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    app.register_blueprint(image_query.bp)

    return app 
