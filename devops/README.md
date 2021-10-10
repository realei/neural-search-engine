# Kubernetes  Deployment 

## About Deployment on Google Cloud Platform's GKE

1. [Creating clusers](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster)

- 1.1 [Creating an Autopilot cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster)

  * Commands will reference project `neural-search-prod` by default
  * Compute Engine commands will use region `europe-west1` by default
  * Compute Engine commands will use zone `europe-west1-d` by default

## Details Steps

1. create a project at your GCP `neural-search-prod`

2. [Creating an Autopilot cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster)]

  * create autopilot cluster:

  `gcloud container clusters create-auto ai-search --region europe-west1 --project=neural-search-prod`

3. [Enabling outbound internet access on private clusters with Cloud NAT](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster#enabling_outbound_internet_access_on_private_clusters_with)

  * Create a Cloud Router:

  `gcloud compute routers create ns-nat-router --network default --region europe-west1 --project=neural-search-prod`

  * Add a configuration to the router:

  `gcloud container clusters get-credentials ai-search --region europe-west1 --project=neural-search-prod`

4. Create Kubernetes Namespace

  `kubectl create namespace neural-search-prod`

  `kubectl get namespace`

5. Create tls key for GKE ingress (https LB)

`openssl genrsa -out ns-ingress-1.key 2048`

`openssl req -new -key ns-ingress-1.key -out ns-ingress-1.csr -subj "/CN=neuralsearch.tech"`

`openssl x509 -req -days 365 -in ns-ingress-1.csr -signkey ns-ingress-1.key -out ns-ingress-1.crt`

`kubectl create secret tls ns-tls-secret-1 --cert ns-ingress-1.crt --key ns-ingress-1.key -n neural-search-prod`

[Google-managed SSL certificates](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)

**Finally update secretName to ingress.yaml**

## Debug on Kubernetes 

* Run `cmd` in pod of kubernetes

`kubectl exec neural-serch-stage-c9889488f-bxqxm -c web -n neural-search-prod -- ls -l instances`

* Copy embedding feature files from local host to pvc assiciate with pod:

`kubectl cp ./embeddings.npy neural-search-prod/neural-serch-stage-c9889488f-bxqxm:/home/ai-search/web/instance/.`

check how it work by:

`kubectl cp --help`

* [Using the Compute Engine persistent disk CSI Driver ](http://cloud.go888ogle.com.fqhub.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver)

`gcloud container clusters update --region=europe-west1 autopilot-cluster-1 --update-addons=GcePersistentDiskCsiDriver=ENABLED`
