# API Gateway proxy integration with Node.js

## Flashcard Web App to Study for AWS Certs!

This project is a resource to help learners understand AWS values, philosophy, resources, and capablities. The web application was built using HTML, CSS, and Javascript and is serviced by AWS resources such as API gateway, AWS Lambda, and DynamoDB.

![Resource Overview](/img/app-resources.jpg)

The Flashcard application accesses the Lambda resource through the HTTP client, which processes events from the API Gateway HTTP API. You can setup your enviornment and access the the public API by setting up the following:

* Clone the project by forking it to your local machine
`git clone https://github.com/j-mensch/aws-flashcard-app`
* Install dependencies by running the following command
`npm install`
* Verify the node modules have installed correctly by checking the **package.json** file
* Create a web server using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) addon in VS Code
* Launch the web application by pressing **F1** and clicking on **Live Server: Open with Live Server**