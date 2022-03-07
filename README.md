# Cognitive AI Search Engine

## Preface

During the covid19 pandemic, unfortunately, the tourist industry has suffered greatly. As you know most people including myself have had to work remotely, and like most, I have been uneasy about going traveling or going shopping. So, I started to thinking how AI and Tech could help people to boost the tourist economy during and after the pandemic. One of the scenarios in the tourist industry is that when people shop around, they will start to compare and find the best price vs quality for the products they want. But now with the covid19 virus, it is a little risky to shop around and compare the same products with different offers. The Cognitive AI Search Engine will provide an open-source framework that can enable traditional shops and web services AI Search functionality. For example, when a tourist finds a souvenir and he/she wants to compare it, it isn’t always so simple. Maybe they feel uncomfortable directly asking or (or maybe they cannot speak the local language), with this software they can take pictures with a cellphone, and query the top 10 similar pictures using this Cognitive AI Search Engine.

## What is Cognitive AI Search Engine

Cognitive AI Search Engine aims to help tech companies to empower AI with a cloud-native opensource framework. The Engine mainly helps the company to deal with unstructured data, such as a photo, a piece of audio, text, sensor data, etc/and so on. The Cognitive AI Search Engine can/is able to help users to automate the entire pipeline of Machine Learning training, and Inferencing. The current release is an MVP (Minimum Viable Product) version, which is mainly focused on the inferencing part to show the possibility of this AI solution.
After the first time release, the result shows the MVP version can help users to find “top K”(K=10) similar photos in around 500 milliseconds within/using/from 100K images data sets, and the inference part only needs CPU. The MVP is already delivered as a RESTful API with Flask and implemented with Docker and Kubernetes. It will first normalize the image data, and extract embeddings (dense vectors), and do the clustering in the sphere of embeddings and find its top K neighbors. Everything happens in only milliseconds, normalization, deep learning feature extraction, reliance distance calculation, clustering......

## How to use Local Dev

1. create virtual env
'virtualenv -p python3 venv'

2. activate venv
`source thumbnails-env/bin/activate`

3. deactivate venv
'deactivate'

4. Flask Run

`flask run`   ---- 5000

`flask run -h localhost -p 3000` --- 3000

5. Bring up Celery's worker

`celery -A celery_task_dl.worker worker -l info`

6. Bring up docker redis service

`docker run -d -p 6379:6379 redis`

## Manually POST to url

`import requests`
`files={'files': open(~/test.jpg,'rb')}`
`r=requests.post(url,files=files)`
