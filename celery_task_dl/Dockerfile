FROM realei/neural-search:faiss-base 

WORKDIR /usr/src/ai-search

# create the ai-search user
RUN groupadd -r ai-search && useradd -r -g ai-search ai-search

# create the appropriate directories
# ENV HOME=/home/ai-search
ENV HOME=/home/ai-search/celery_task_dl
RUN mkdir -p $HOME
RUN mkdir $HOME/uploads

# set environment variables:
# Prevents Python from writing pyc files to disc (python3 -B)
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr (python3 -u)
ENV PYTHONUNBUFFERED 1

# install Pillow
RUN apt-get update && apt-get install -y \
        python-dev python-pip python-setuptools \
        libjpeg8-dev zlib1g-dev

# install dependencies                                    
RUN pip install Pillow
COPY ./requirements.txt /usr/src/ai-search/requirements.txt
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh $HOME

# copy project
COPY . $HOME
#COPY ./search $HOME
#COPY ./engine $HOME 


# chown all the files to the ai-search user
RUN chown -R ai-search:ai-search $HOME
                                                          
WORKDIR $HOME

# change the user to ai-search
USER ai-search

# run entrypoint.sh                                       
ENTRYPOINT ["./entrypoint.sh"]
