#!/bin/bash

REPO="https://github.com/AakashAP/XenonStack-Projects.git"
    DIR="XenonStack-Projects/Projects/Task 2 Kubernetes"

FRONTEND_IMAGE="front-end-image"
DATABASE_IMAGE="database-image"



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



echo -e "\n\n\nDOCKER CONFIGURATION"
echo "---------------------------------------------------"

    if minikube status | grep -q "Running"; then
        echo -e "\nMinikube Already Started"
    else
        sudo usermod -aG docker $USER
        sudo chmod 666 /var/run/docker.sock
        echo -e "\nStarting Minikube"
        minikube start
    fi


    if minikube image ls | grep -q "$FRONTEND_IMAGE"; then
        echo -e "\nRemoving Existing Frontend Image....."
        minikube image rm "$FRONTEND_IMAGE"
    fi

    echo -e "\nBuilding Front End Image....."
    minikube image build -f "Front-End-Dockerfile" -t "$FRONTEND_IMAGE" .


    if minikube image ls | grep -a "$DATABASE_IMAGE"; then
        echo -e "\nRemoving Existing Database Image....."
        minikube image rm "$DATABASE_IMAGE"
    fi

    echo -e "\nBuilding Database Image....."
    minikube image build -f "Database-Dockerfile" -t "$DATABASE_IMAGE" .



echo -e "\n\n\nDEPLOYMENT"
echo "---------------------------------------------------"

    kubectl apply -f Front-End-YAML.yaml
    echo -e "\n"
    kubectl apply -f Database-YAML.yaml


    NODE_IP=$(minikube ip)
    PORT=$(kubectl get svc frontend-service -o jsonpath="{.spec.ports[0].nodePort}")


    echo -e "\nFront-end Container is Deployed at : $NODE_IP:$PORT"
    echo "Opening Webpages....."
    firefox "http://$NODE_IP:$PORT"
