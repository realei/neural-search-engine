"""
This tasks.py now is for exploring the Celery, later we need to
re-define it
"""
#import importlib
#import logging
from celery import Celery 

#from .worker import app

app = Celery('tasks', broker='amqp://guest@localhost//')

@app.task
def add(x, y):
    return x + y
