FROM python:3.7.6-alpine as builder

WORKDIR /usr/src/thumbnails
COPY . /usr/src/thumbnails/
# create directory for the thumbnails user
RUN mkdir -p /home/

# create the thumbnails user
RUN addgroup -S thumbnails && adduser -S thumbnails -G thumbnails

# create the appropriate directories
#ENV HOME=/home/thumbnails
ENV thumbnails_HOME=/home/thumbnails/web
RUN mkdir $thumbnails_HOME
RUN mkdir $thumbnails_HOME/images

# set environment variables:
# Prevents Python from writing pyc files to disc (python3 -B)
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr (python3 -u)
ENV PYTHONUNBUFFERED 1

# install dependencies                                    
RUN pip3 install --upgrade pip                            
COPY ./requirements.txt /usr/src/thumbnails/requirements.txt
RUN pip3 install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh $thumbnails_HOME

# copy project
COPY . $thumbnails_HOME

# chown all the files to the thumbnails user
RUN chown -R thumbnails:thumbnails $thumbnails_HOME

# change the user to thumbnails
USER thumbnails                    
                                                          
WORKDIR $thumbnails_HOME
# run entrypoint.sh                                       
ENTRYPOINT ["/usr/src/thumbnails/entrypoint.sh"]
