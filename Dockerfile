# Use an official Python runtime as a parent image
FROM python:3.8.0-alpine
LABEL maintainer="wanglei.okay@gmail.com"

# set work directory
WORKDIR /usr/src/search/

# Set environment varibles
# Prevents Python from writing pyc files to disc (python3 -B)
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr (python3 -u)
ENV PYTHONUNBUFFERED 1

COPY . /usr/src/search/

RUN pip install --upgrade pip

# Install any needed packages specified in requirements.txt
RUN pip install -r ./requirements.txt

# create the search user
RUN addgroup -S search && adduser -S search -G search
RUN chown -R search:search /usr/src/search/ 
#USER search

# run entrypoint.sh
ENTRYPOINT ["/usr/src/search/entrypoint.sh"]

