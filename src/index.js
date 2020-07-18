import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './config';
import * as serviceWorker from './serviceWorker';


//import config from './aws-exports';
//let awsmobileMandatorySignIn = awsmobile.aws_mandatory_sign_in == "enable" ? true : false;


Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID,
       // identityPoolId: awsmobile.aws_cognito_identity_pool_id,
        // REQUIRED - Amazon Cognito Region
        region:  config.mincognito.REGION,
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: config.mincognito.USER_POOL_ID,
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: config.mincognito.APP_CLIENT_ID,
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
        // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
            // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
            // OPTIONAL - Cookie path
            path: '/',
            // OPTIONAL - Cookie expiration in days
            expires: 365,
            // OPTIONAL - Cookie secure flag
            secure: true
        }
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
