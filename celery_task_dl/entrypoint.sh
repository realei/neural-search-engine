#!/bin/bash

cd ..
celery -A celery_task_dl.worker worker -l info

exec "$@"
