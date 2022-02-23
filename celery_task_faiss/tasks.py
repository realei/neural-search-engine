"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
from __future__ import absolute_import, unicode_literals
import faiss
import numpy as np

from .worker import app


@app.task
def faissIndexing(vector):
    """
    TBD
    """
    if not vector:
        embedding = np.array(vector)
    else:
        raise ValueError(
            f"ValueError exception thrown, because input feature vecgtor: {vector}"
        )

