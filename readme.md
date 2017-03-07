## Build and Serve a Simple REST Application (Server/Client)

### Specifications

* Create an instance of express and prepare a GET method to retrieve a list of Objects [SERVER]

* Create an instance of express and prepare a GET method to retrieve a specific item of the list of Objects based on its ID [SERVER]

* Create an Angular 2 Application by implementing the Master Detail Pattern displaying the list of Objects (Master) and a specific Object (Detail) [CLIENT]

* Keep your code structured by following the Modules Pattern and by exposing your Components from your Modules [CLIENT]

* Make use of Web Services with HTTP Requests (Promises, Observables) to connect the REST API [CLIENT]

### Build / Run

There are 2 folders in the repository, server and client, so that each side is treated as an individual project.

In order to install the dependencies please run in the terminal

```npm install```

inside both the client and the server folder.

#### Server

To launch the server run in the terminal inside folder server

```node server.js```

Once done, you can make sure the API is working by accessing the url `http://localhost:3050/api` and message `{ hi: 'there' }` should be displayed in the screen.

There's also a test suit in mocha which can be run with

```npm run test```

#### Client

After installing the dependencies the easiest way to run the client is by running in the terminal

```npm run start```

which will use webpack-dev-server to run the application in `htpp://localhost:8080`

Alternatively, to generate a /dist folder run

```npm run build```

then the /dist folder can be copied to any web server and it should work without problems.

### Considerations

There are a few things I'd like to clarify on the test.

Regarding the server, I went for simplicity, so data is hardcoded in data.js and served by Express. I got a very simple testing sample from [jsonplaceholder](https://jsonplaceholder.typicode.com/).

For the client I also tried to focus on the functionality and the requirements.

* No styles (although is ready to use scss).
* One root module (AppModule) and one feature module (TodoDashboardModule).
* One single http service with no cached data.
* Using routing so that the information displayed changes both when clicking on the list and when modifying the url.
* Check invalid urls in the root and display an error message.

The application has been build with webpack, and is ready for builds in deployment and production, and these are my own configuration files, it's not a build copied from anywhere.

I didn´t spend time in styling the app because I'm not a designer and I wanted to move as fast as possible.