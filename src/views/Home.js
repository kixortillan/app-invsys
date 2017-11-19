import React from 'react'
import {
    Grid,
    Segment
} from 'semantic-ui-react';
import LoginForm from './components/LoginForm';

class Home extends React.Component {

    render() {
        return (
            <Grid.Row centered columns='five'>
                <Grid.Column>
                    <Segment>
                        <LoginForm></LoginForm>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        );
    }

}

export default Home;