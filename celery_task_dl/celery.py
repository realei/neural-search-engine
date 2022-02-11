from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

BROKER_URI = os.environ.get('BROKER_URI', 'redis://localhost:6379/0')
BACKEND_URI = os.environ.get('BACKEND_URI', 'redis://localhost:6379/8')

app = Celery(
    'celery_dl_app',
    broker=BROKER_URI,
    backend=BACKEND_URI,
    include=['celery_task_dl.tasks']
)
