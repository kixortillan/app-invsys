import React from 'react'
import {
    Button,
    Form,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

class Register extends React.Component {

    render() {
        return (
            <Grid.Row centered columns='five'>
                <Grid.Column>
                    <Segment>
                        <LoginForm></LoginForm>
                        <Form>
                            <Divider horizontal>OR</Divider>
                            <Form.Field>
                                <Container textAlign='center'>
                                    <Link to="/reset">Forgot Password</Link>
                                </Container>
                            </Form.Field>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        );
    }

}

export default Register;