
# Secure Web Authentication Project

This project is a secure web authentication system built with React for the front-end and Go for the back-end. The system incorporates multiple authentication methods including QR code, OAuth2 (Google), and short temporary password (STP) to enhance security on static websites.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)

## Installation

To get started with this project, you need to clone the repository and install the necessary dependencies.

```bash
git clone
cd login
npm install
```

## Development

To start the development server, use the following command:

```bash
npm start
```

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment

1. **Build the app for production** to the `build` folder using the following command:

    ```bash
    npm run build
    ```

    This will correctly bundle React in production mode and optimize the build for the best performance.

2. **Commit your changes** with a descriptive commit message.

    ```bash
    git add .
    git commit -m "Build for deployment: your feature description"
    ```

3. **Deploy the app using GitHub Pages** by running:

    ```bash
    npm run deploy
    ```


## Additional Information

### Environment Setup

Ensure you have Node.js and npm installed on your machine. You can download Node.js and npm from [here](https://nodejs.org/).

### Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run deploy`: Deploys the app to GitHub Pages.

### Important Endpoints

- `/auth/login`: Endpoint to send the phone number and receive a temporary password.
- `/auth/verify`: Endpoint to verify the temporary password.
- `/auth/resend`: Endpoint to resend the temporary password.

### Front-End Dependencies

- **react**: A JavaScript library for building user interfaces.
- **react-router-dom**: DOM bindings for React Router.
- **sweetalert2**: A beautiful, responsive, customizable replacement for JavaScript's popup boxes.
- **react-icons**: Include popular icons in your React projects easily.
- **react-countdown**: A customizable countdown component for React.
- **js-cookie**: A simple, lightweight JavaScript API for handling cookies.

### Back-End

The back-end is built with Go and provides various authentication endpoints. Ensure the Go environment is set up correctly, and the back-end server is running to handle requests from the front-end.

## Contact

For any questions or concerns, please open an issue or contact the repository owner.

```

This README provides a comprehensive guide for developers to set up their environment, run the project, and contribute to it. Adjust the URLs and repository names as necessary to fit your project's specifics.
