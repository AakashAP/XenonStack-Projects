## XENONSTACK DEVOPS PROJECTS

This Repository Conains 4 DevOps Projects, That I have Completed during an Internship at XenonStack Pvt. Ltd.

Each Projects focuses on Different DevOps Techonology :
- **DOCKER**
  This Project Provides a Simple Method to Deploy a Static Website in a Docker Container.

- **KUBERNETES**
  This Project Provides a Simple Method to Deploy a Front-End Website as a Container in K8s Environment with Additional Empty MySQL Container

- **HELM CHART**
  The Project Provides a Simple Method to Deploy a Static Website in a Minikube Environment using Helm Chart.

- **JENKINS**
  This Project uses Jenkins Pipeline to Deploy a Static Website in a Contaienr using Jenkinsfile.

## PROJECT DIRECTORY

```bash
XenonStack-Projects                     # Repository Root Directory
|── Projects
    |── Task 1 Docker
    |   |── Website-Directory           # Website Root Directory
    |       ...
    |       |── index.html
    |       ...
    |   |── Docker-Deployment.sh        # Automated Deployment Script
    |   |── Dockerfile                  # Dockerfile Configuration
    |   |── README.md
    |
    |── Task 2 Kubernetes
    |   |── Database-Container          # Database Directory
    |       |── MySQL-Script.sql
    |   |── Front-End-Container         # Front End Directory
    |       ...
    |       |── index.php
    |       ...
    |   |── Database-Dockerfile         # Database Dockerfile Configuration
    |   |── Database-YAML.yaml          # Database YAML Script
    |   |── Front-End-Dockerfile        # Frontend Dockerfile Configuration
    |   |── Front-End-YAML.yaml         # Frontend YAML Script
    |   |── Kubernetes-Deployment.sh    # Automated Deployment Script
    |   |── README.md
    |
    |── Task 3 Helm Chart
    |   |── Website-Project             # Website Directory
    |       ...
    |       |── index.html
    |       ...
    |   |── Helm-Chart-Deployment.sh    # Automated Deployment Script
    |   |── README.md
    |
    |── Task 4 Jenkins Pipeline
        |── Website-Project             # Website Directory
            ...
            |── index.html
            ...
        |── Dockerfile                  # Dockerfile Configuration
        |── Jenkinsfile                 # Jenkinsfile Configuration
        |── README.md
```