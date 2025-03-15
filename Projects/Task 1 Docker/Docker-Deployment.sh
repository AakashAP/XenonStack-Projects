#!/bin/bash

REPO="https://github.com/AakashAP/XenonStack-Projects.git"
    DIR="XenonStack-Projects/Projects/Task 1 Docker"

IMAGE="website-image"
CONTAINER="website-container"



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



echo -e "\n\n\nDOCKER CONFIGURATION"
echo "---------------------------------------------------"

    if sudo docker images -q "$IMAGE" &> /dev/null; then
        echo -e "\nRemoving existing Docker image..."
        sudo docker rmi -f "$IMAGE"
    fi
    
    echo -e "\nBuilding Docker Image....."
    sudo docker build -t $IMAGE .


    if [ "$(sudo docker ps -aq -f name=^${CONTAINER}$)" ]; then
        echo -e "\nRemoving existing container..."
        sudo docker stop "$CONTAINER"
        sudo docker rm "$CONTAINER"
    fi

    echo -e "\nDeploying Docker Container....."
    sudo docker run -d --name $CONTAINER -p 8080:80 $IMAGE


    sleep 10
    
    if ! sudo docker ps | grep -q "$CONTAINER"; then
        echo -e "\nError: Container Failed to Start"
        exit 1
    fi



echo -e "\n\n\nDEPLOYMENT"
echo "---------------------------------------------------"

    echo -e "\nWebsite Deployed at : http://localhost:8080"
    echo "Opening Website....."
    firefox "http://localhost:8080"