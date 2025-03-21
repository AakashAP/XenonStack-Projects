#!/bin/bash

REPO="https://github.com/AakashAP/XenonStack-Projects.git"
    DIR="XenonStack-Projects/Projects/Task 3 Helm Chart"

IMAGE="website-image"



echo -e "PACKAGE REQUIREMENTS"
echo "---------------------------------------------------"

    if ! docker --version &> /dev/null; then
        echo -e "\nDocker not found...  Installing Docker"
        sudo apt update && sudo apt install -y docker.io
        sudo systemctl enable docker --now
        echo -e "\nDocker Installed"
    else
        echo -e "\nDocker Version :"
        docker --version
    fi


    if ! minikube version &> /dev/null; then
        echo -e "\nKubernetes (Kubectl) not found... Installing Kubernetes +(Kubectl)"
        curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
        sudo install minikube-linux-amd64 /usr/local/bin/minikube
        rm minikube-linux-amd64
        echo -e "\nMinikube Installed"
    else
        echo -e "\nMinikube Version :"
        minikube version
    fi


    if ! kubectl version --client &> /dev/null; then
        echo -e "\nKubectl not found... Installing Kubectl"
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        sudo install kubectl /usr/local/bin/
        rm kubectl
        echo -e "\nKubectl Installed"
    else
        echo -e "\nKubectl Version :"
        kubectl version --client
    fi


    if ! helm version &> /dev/null; then
        echo -e "\nHelm Chart not found... Installing Helm CHart"
        curl -O https://get.helm.sh/helm-v3.16.2-linux-amd64.tar.gz
        tar xvf helm-v3.16.2-linux-amd64.tar.gz
        sudo mv linux-amd64/helm /usr/local/bin
        echo -e "\nHelm Chart Installed"

        rm helm-v3.16.2-linux-amd64.tar.gz
        rm -rf linux-amd64
    else
        echo -e "\nHelm Chart Version"
        helm version
    fi



echo -e "\n\n\nDOCKER CONFIGURATION"
echo "---------------------------------------------------"

    if minikube status | grep -q "host: Running"; then
        echo -e "\nMinikube Already Started"
    else
        sudo usermod -aG docker $USER
        sudo chmod 666 /var/run/docker.sock
        echo -e "\nStarting Minikube....."
        minikube start
    fi


    if minikube image ls | grep -q "$IMAGE"; then
        echo -e "\nRemoving Existing Image....."
        minikube image rm "$IMAGE"
    fi

    echo -e "\nBuilding Front End Image....."
    minikube image build -t "$IMAGE" .



echo -e "\n\n\nDEPLOYMENT"
echo "---------------------------------------------------"

    echo -e "\nInstalling Helm Chart....."
    helm install web-app web-app-chart


    NODE_IP=$(minikube ip)
    PORT=$(kubectl get svc web-app -o jsonpath="{.spec.ports[0].nodePort}")


    echo -e "\nWebsite is deployed at : $NODE_IP:$PORT"
    echo "Opening Webpages....."
    firefox "http://$NODE_IP:$PORT"
