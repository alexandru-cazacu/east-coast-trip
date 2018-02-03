# East Coast Trip

## Table of contents

- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [License](#license)

## Screenshots

![GitHub Logo](/images/screenshot.png)

## Getting Started

This is a school project made by me and other 5 students at IIS Castelli. It was bootstrapped with Create React App.

A list of useful docs:
- [React](https://reactjs.org/docs/hello-world.html);
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy);
- [Create React App](https://github.com/facebookincubator/create-react-app);
- [Axios](https://github.com/axios/axios).

### Prerequisites

You need [`npm`](https://nodejs.org), `Apache` and `MySQL` or something similar of your choice (I'm using Xampp).

### Installing

```
git clone https://github.com/alexandru-cazacu/east-coast-trip.git
cd east-coast-trip
npm install
```

To start the live server run:

```
npm start
```

To build the project run:

```
npm run build
```

Configure Apache to run on `localhost:8080` and copy the folder `server` in htdocs or do something so that you can serve is.

Go into `client-react/src/paths.js` and update the paths relative to were you put the server folder.

## Deployment

```
npm run build
```

Move `server` and the contend of `build` to the server. Don't forget to update react router paths.

## Built With

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React](https://reactjs.org/docs/hello-world.html)
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- [React Slick](https://github.com/akiran/react-slick)
- [Axios](https://github.com/axios/axios)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
