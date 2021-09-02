FROM python:3.7.6-alpine as builder

WORKDIR /usr/src/ai-search
COPY . /usr/src/ai-search/
# create directory for the ai-search user
RUN mkdir -p /home/

# create the ai-search user
RUN addgroup -S ai-search && adduser -S ai-search -G ai-search

# create the appropriate directories
#ENV HOME=/home/ai-search
ENV HOME=/home/ai-search/web
RUN mkdir $HOME
RUN mkdir $HOME/images

# set environment variables:
# Prevents Python from writing pyc files to disc (python3 -B)
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr (python3 -u)
ENV PYTHONUNBUFFERED 1

# install dependencies                                    
RUN pip3 install --upgrade pip                            
COPY ./requirements.txt /usr/src/ai-search/requirements.txt
RUN pip3 install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh $HOME

# copy project
COPY . $HOME

# chown all the files to the ai-search user
RUN chown -R ai-search:ai-search $HOME

# change the user to ai-search
USER ai-search                    
                                                          
WORKDIR $HOME
# run entrypoint.sh                                       
ENTRYPOINT ["/usr/src/ai-search/entrypoint.sh"]
