# DOCKER STARTER

This Project Provides a Simple Method to Deploy a Static Website in a Docker Container.

It Includes an Automated Deployment Script That Handles the Entire DevOps Process, From Installing Docker to Deploying the Website in a Container.

### PROJECT STRUCTURE

```bash
XenonStack-Projects                     # Repository Root Directory
|── Projects
    |── Task 1 Docker
        |── Website-Directory           # Website Root Directory
            ...
            |── index.html
            ...
        |── Docker-Deployment.sh        # Automated Deployment Script
        |── Dockerfile                  # Dockerfile Configuration
        |── README.md
```

---

## GETTTING STARTED

**Clone the Repository** <br>
  Clone the Repository to Your Local Machine
  ```bash
  git clone https://github.com/AakashAP/XenonStack-Projects.git
  ```

**Configure Your Website** <br>
  Replace the Content of the "Website-Directory" With Your Own Website's Root Directory.

**Execute the Deployment Script** <br>
  Run the Deployment Script to Set Up the Environment and Deploy the Website
  ```bash
  sudo chmod +x ./Docker-Deployment.sh
  ./Docker-Deployment.sh
  ```