import React from 'react';
import qs from 'qs';
import {
    Form,
    Button
} from 'semantic-ui-react';

class LoginForm extends React.Component {

    handleLogin = () => {
        let url = 'http://dev.invsys/oauth/authorize';
        const data = {
            client_id: '1',
            redirect_uri: 'http://localhost:3000',
            response_type: 'code',
            scope: '',
        };

        window.location = url + '?' + qs.stringify(data);
    }

    render() {

        // return (
        //     <Form onSubmit={this.handleSubmit}>
        //         <Form.Field>
        //             <label></label>
        //             <Form.Input placeholder='E-mail address' name='email' value={email} onChange={this.handleChange} />
        //         </Form.Field>
        //         <Form.Field>
        //             <label></label>
        //             <Form.Input placeholder='Password' type='password' name='password' value={password} onChange={this.handleChange} />
        //         </Form.Field>
        //         <Form.Field>
        //             <Button primary fluid>Log In</Button>
        //         </Form.Field>
        //     </Form>
        // );
        // 
        return (
            <Form>
                <Form.Field>
                    <Button onClick={this.handleLogin} className="teal">Login using email</Button>
                </Form.Field>
                <Form.Field>
                    <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" data-onlogin="checkLoginState();"></div>
                </Form.Field>
            </Form>
        );
    }

}

export default LoginForm;