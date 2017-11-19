import React, { Component } from 'react';
//import logo from './logo.svg';
import qs from 'qs';
import axios from 'axios';
import './App.css';
import {
    Button,
    Container,
    Grid,
    Sidebar,
    Icon,
    Image,
    Menu,
} from 'semantic-ui-react';


// First we import some modules...
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from './views/Home';
import Dashboard from './views/dashboard/Dashboard';
import OAuth from './views/auth/OAuth';
import StockKeepingUnit from './views/sku/StockKeepingUnit';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    toggleVisibility(state) {
        this.setState({ visible: !state.visible });
    }

    authenticate() {
        const url = window.location.href;
        //console.log(url);

        const query = qs.parse(url.substring(url.indexOf("?") + 1, url.length));
        //console.log(query);

        if (!query.code) {
            return;
        }

        axios.post('http://dev.invsys/api/oauth/token/login', {
                code: query.code
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            })
            .then((resp) => {

                //store credentials to browser
                window.localStorage.setItem('access_token', resp.data.access_token);
                window.localStorage.setItem('refresh_token', resp.data.refresh_token);
                window.localStorage.setItem('expires_in', resp.data.expires_in);

                //redirect user to dashboard
                window.location = '/dashboard';
            })
            .catch((err) => {
                console.error(err);
            });
    }

    componentDidMount() {

        this.authenticate();

    }

    render() {

        return (
            <div style={{ height: '100%' }}>

          <Menu id="topbar" fixed='top' inverted>

            <Menu.Item>
              <Button onClick={() => this.toggleVisibility(this.state)} icon='sidebar' inverted></Button>
            </Menu.Item>
            <Menu.Item as='a' header>
              <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
              />
              Company Name
            </Menu.Item>

          </Menu>

            <BrowserRouter>

              <Sidebar.Pushable as={Container} fluid style={{ marginTop: '5em' }}>

                <Sidebar as={Menu} animation='slide along' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>

                  <Menu.Item name='dashboard'>
                    <Icon name='dashboard' link/>
                    Dashboard
                  </Menu.Item>
                  <Menu.Item name='sales'>
                    <Icon name='money' />
                    Sales
                  </Menu.Item>
                  <Menu.Item name='sku'>
                    <Icon name='book' />
                    SKU
                  </Menu.Item>

                </Sidebar>

                <Sidebar.Pusher as={Container}>
                  <Grid stackable>
                    
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/sku" component={StockKeepingUnit}></Route>

                  </Grid>
                </Sidebar.Pusher>

              </Sidebar.Pushable>

            </BrowserRouter>

            <Menu fixed='bottom' inverted>

              <Menu.Item><Icon name='copyright' />Inventory System</Menu.Item>

            </Menu>

          </div>
        );
    }

}

export default App;