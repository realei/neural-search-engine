#!/bin/bash

cd ..
celery -A celery_task_faiss.worker worker -l info

exec "$@"
