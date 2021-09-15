#!/bin/sh
"""
Bring up flask thumbnail service
"""

flask run -h localhost -p 3000

exec "$@"
