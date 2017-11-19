import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

//load Semantic UI css
import './semantic/dist/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let facebookLogin = (d, s, id) => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=927862904014293';
    fjs.parentNode.insertBefore(js, fjs);
}

facebookLogin(document, 'script', 'facebook-jssdk');