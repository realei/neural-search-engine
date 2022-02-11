"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""

from __future__ import absolute_import, unicode_literals
from .celery import app

@app.task
def add(x, y):
    return x + y

@app.task
def mul(x, y):
    return x * y

@app.task
def xsum(numbers):
    return sum(numbers)
