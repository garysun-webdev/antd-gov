You can install the local packages using either `npm`, or `yarn`. After which
you can run the `start` script which will run the `create-react-app` webpack
dev server.

`npm start` or `yarn start`

This App contains a proxy server, which is used to transmit message between IBM Watson service and the client side. The server side has already been deployed in c9.io and relative api route has also cofigured into the client application. You can just install the client and use all the services.

If you'd like to install the server by yourself, you can find the server side code at `/server`. The server side is based on Node.js and you can also install it by `npm install`, while the start command is `node index.js`. However, please remember to change the listen port of the server and the client request route as well.

**Code Style**

* I haven't set up strict linting rules (just the default `create-creat-app` elint)

* The style sheets are all in plain `CSS`, co-located with their respective components

## App Layout

The build system uses the latest
[`create-react-app`](https://github.com/facebookincubator/create-react-app)
setup, with the following mainly libraries:

* [`redux`](https://redux.js.org/)
* [`redux-form`](https://github.com/erikras/redux-form)
* [`ant-design`](https://github.com/ant-design/ant-design) a component based React UI library.
* [`react-router`](https://github.com/ReactTraining/react-router)
* [`echarts`](http://echarts.baidu.com/) a chart library.
* [`redux-thunk`](https://docs.slatejs.org/)

## Features

This App aims to intimate a government website with these features:

* Pages: Home, Contact, FAQ
* WizardForm: Based on redux-form.
* Chatbot: Help user to find information.
* Data Visualisation: Use twitter data to find which city in Australia is best for immigration
