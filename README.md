# ModusBox Stock Api

## Description
Dockerised Node.js Rest Service based on Express.js. 

The app is responsible for providing up to date stock data retrieved from https://finnhub.io/. 
In the current version of the app the listed functionalities are supported:
* Return quote data for stocks by providing a valid company symbols. (For example AAPL for Apple.)
* Return rough company's revenue estimates per annual or quarter period.

## Requirements
* Node
* Git
* Docker
* Minikube

## Common setup
Clone the repo and install the dependencies.
```
git clone https://gitlab.com/petrov94/modusbox-stock-api.git

cd modusbox-stock-api

touch .env
```
In the created .env put all needed environment variables.
```
PORT=<port the app will be started>
FINHUBTOKEN=<authentication token for finnhub>
ISSUER=<issuer >
SCOPE=<scope used for jwt token validation>
CLIENT_ID=<client_id used for jwt token validation>
``` 

When all configuration is made, need to download all dependencies and start the application.
``` 
npm install -g nodemon
npm install
npm start
```
## Docker installation
For deploying the service on a kubernetes cluster. Can be used the files in k8S folder and Dockerfie
in the main directory.

To create a docker image.
``` 
 docker build . -t modusbox-stock-api:v1 
``` 

To create two pods with the already created image.
``` 
kubectl apply -f k8s/deployment.yaml 
``` 
To create a load balancer from the nod.(Can change to loadbalancer if it is deployed on cloud.)
``` 
kubectl apply -f k8s/service.yaml 
``` 
To make the solution auto scalable based on the CPU and Memory load.
 ``` 
 kubectl apply -f k8s/hpa.yaml 
 ``` 

## API Consumption
In order to consume the app, first need to be retrieved a valid JWT token from the OAuth provider. 
In our case we are using a machine to machine OAuth flow and depend on 
https://www.okta.com/ as an Identity Provider. After retrieving a valid JWT token all further 
requests need to provide that token as a HTTP header.

``` 
 Authorization: Bearer <valid JWT token>
``` 

## The Stock Api expose the following urls.

### Revenue estimates
``` 
<endpoint>/api/stock/revenue-estimate/<company symbol>
``` 

### Quote data
``` 
<endpoint>/api/stock/prices/<company symbol>
``` 