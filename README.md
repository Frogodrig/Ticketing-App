# Ticketing-App
A ticket reselling website built using the microservices architecture

## How to run the app

<br/>

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

    // <STRIPE_SECRET_KEY> from stripe.com
    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<STRIPE_SECRET_KEY>

<br/>

    $ cd Ticketing-App

    $ docker login

Need to update my docker image name adityaawasthi/** to yours in scripts from skaffold.yaml and k8s folders.

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                                     READY   STATUS    RESTARTS   AGE
    auth-depl-85f58f6966-x8fjd               1/1     Running   0          44s
    auth-mongo-depl-d65db784-s2d6t           1/1     Running   0          44s
    client-depl-594dc57856-t7xlr             1/1     Running   0          44s
    expiration-depl-5b9c4765fd-22vll         1/1     Running   0          44s
    expiration-redis-depl-67b484c7fc-xfvxt   1/1     Running   0          44s
    nats-depl-5b7d9b67b8-56lb9               1/1     Running   0          44s
    orders-depl-67647d88f4-c29l5             1/1     Running   0          43s
    orders-mongo-depl-79774b8b8-s49v8        1/1     Running   0          43s
    payments-depl-7fc5d9df79-dhl7j           1/1     Running   0          43s
    payments-mongo-depl-69b4c5b9d4-x889f     1/1     Running   0          43s
    tickets-depl-5487f59dcd-bfkct            1/1     Running   0          43s
    tickets-mongo-depl-97cfc7948-4bbqb       1/1     Running   0          43s

<br/>

chrome browser --> https://ticketing.dev/

<br/>

type: **thisisunsafe** in the browser window with security warning.

<br/>
