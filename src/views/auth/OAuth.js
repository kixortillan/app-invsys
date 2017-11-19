import React from 'react';
import qs from 'qs';
import axios from 'axios';

class OAuth extends React.Component {

    // parseRedirect() {
    //     const url = window.location.href;
    //     //console.log(url);
        
    //     const query = qs.parse(url.substring(url.indexOf("?") + 1, url.length));
    //     //console.log(query);

    //     axios.post('http://dev.invsys/api/oauth/token/login', {
    //             code: query.code
    //         }, {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         .then((resp) => {

    //             //store credentials to browser
    //             window.localStorage.setItem('access_token', resp.data.access_token);
    //             window.localStorage.setItem('refresh_token', resp.data.refresh_token);
    //             window.localStorage.setItem('expires_in', resp.data.expires_in);

    //             this.props.onAuthenticate();
                
    //             //redirect user to dashboard
    //             window.location = '/dashboard';
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }

    render() {

        return null;

    }

    // componentDidMount() {
    //     this.parseRedirect();
    // }

}

export default OAuth;