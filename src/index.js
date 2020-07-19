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
      
        region:  config.cognito.REGION,
      
        userPoolId: config.cognito.USER_POOL_ID,
      
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
       
        mandatorySignIn: true,
       
        cookieStorage: {
           
            domain: '.yourdomain.com',
           
            path: '/',
            
            expires: 365,
           
            secure: true
        }
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
