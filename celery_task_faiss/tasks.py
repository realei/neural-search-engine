"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
from __future__ import absolute_import, unicode_literals
from .worker import app


@app.task
def add(x, y):
    return x + y
