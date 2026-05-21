# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

## React app and Azure DevOps pipeline

Added a minimal React app under this folder with the following files:

- File: [package.json](package.json)
- File: [public/index.html](public/index.html)
- File: [src/index.js](src/index.js)
- File: [src/App.js](src/App.js)
- File: [azure-pipelines.yml](azure-pipelines.yml)

Local run:

1. Install dependencies: `npm install`
2. Run locally: `npm start`
3. Build for production: `npm run build` (output goes to `build/`)

Azure DevOps deployment notes:

- The pipeline YAML is in [azure-pipelines.yml](azure-pipelines.yml).
- The pipeline uses the `AzureStaticWebApp@0` task and expects a pipeline variable named `deployment_token` containing the Azure Static Web Apps deployment token (set it as a **secret** in the pipeline variables).
- Install the Azure Static Web Apps extension in your Azure DevOps organization if required.

How to get the deployment token:

1. In the Azure Portal, open your Static Web App resource.
2. Under Settings -> Deployment, copy the deployment token (or create one).
3. In Azure DevOps pipeline settings, add a variable `deployment_token` (mark as secret) with that value.

After that, run the pipeline to build and deploy the React app to your Azure Static Web App.
