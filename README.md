# Cognitive AI Search Engine

## Preface

During covid19 pandemic, all the tourist industry was almost closed. Any I have to work remotely, and I am afraid to travel and shopping.
I started to thinking how AI and Tech could help people to boost tourist ecomany during and after pandemic. One of the scenarios in tourist is that when people shop around, they will start bargain and find the best shop for the products. But now with the covid19 virus, it is really dangerous to shop around and compare the same products with different offers. Cognitive AI Search Engine will provide an open-source framework that can enable traditional shop and web service with AI Search functionality. For example, when a tourist found a souvenir and he/she wants to compare the price from different shops but afraid to talk(sometimes even can not speak the local language), they can take pictures with a cellphone, and query the top 10 similar pictures at Cognitive AI Search Engine.

## What is Cognitive AI Search Engine

Cognitive AI Search Engine aims to help tech company to empower AI with a cloud-native opensource framework.
The Engine mainly helps the company to deal with unstructured data, such as a photo, a piece of audio, text, sensor data, etc.
The Cognitive AI Search Engine could help users to automate the entire pipeline of Machine Learning training, and Inferencing.
The current release is an MVP(Minimum Viable Product) version, which is mainly focused on the inferencing part to show the possibility of this AI solution.

After first time release, it shows the MVP version could help users to find top K(K=10) similar photos in around 500 milliseconds within 100K images data sets, and the inference part only needs CPU. The MVP is already delivered as a RESTful API with Flask and implemented with Docker and Kubernetes. It will first normalize the image data, and extract embeddings(dense vectors), and do the clustering in the sphere of embeddings and find its top K neighbors. Everything happened only in milliseconds, normalization, deep learning feature extraction, reliance distance calculation, clustering......
