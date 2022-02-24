from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

BROKER_URI = os.environ.get('BROKER_URI', 'redis://localhost:6379/9')
BACKEND_URI = os.environ.get('BACKEND_URI', 'redis://localhost:6379/9')

app = Celery(
    'celery_faiss_app',
    broker=BROKER_URI,
    backend=BACKEND_URI,
    include=['celery_task_faiss.tasks']
)
