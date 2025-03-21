# KUBERNETES DEPLOYMENT

This Project Provides a Simple Method to Deploy a Front-End Website as a Container in K8s Environment with Additional Empty MySQL Container

It Includes an Automated Deployment Script That Handles the Entire DevOps Process, From Installing Docker & Kubernetes to Deploying to Kubernetes Environment

### PROJECT STRUCTURE

```bash
XenonStack-Projects                       # Repository Root Directory
|── Projects
    |── Task 2 Kubernetes
        |── Database-Container            # Database Directory
            |── MySQL-Script.sql
        |── Front-End-Container           # Front End Directory
            ...
            |── index.php
            ...
        |── Database-Dockerfile           # Database Dockerfile Configuration
        |── Database-YAML.yaml            # Database YAML Script
        |── Front-End-Dockerfile          # Frontend Dockerfile Configuration
        |── Front-End-YAML.yaml           # Frontend YAML Script
        |── Kubernetes-Deployment.sh      # Automated Deployment Script
        |── README.md
```

---

## GETTING STARTED

**Clone the Repository** <br>
  Clone the Repository to Your Local Machine
  ```bash
  git clone https://github.com/AakashAP/XenonStack-Projects.git
  ```

**Navigate to the Project Folder** <br>
  Navigate to "Task 2 Kubernetes" Directory for this Project.

**Execute the Deployment Script** <br>
  Run the Deployment Script to Set Up the Environment and Deploy the Website
  ```bash
  sudo chmod +x ./Docker-Deployment.sh
  ./Kubernetes-Deployment.sh
  ```
