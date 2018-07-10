import React, {PureComponent, Fragment} from 'react';
import Header from "../../components/Header/header.component";
import {Button, FormControl, Grid, Row, Col, FormGroup} from 'react-bootstrap';
import './LogIn.style.css';


class LogIn extends PureComponent {
    state = {
        logInEmail: '',
        logInPassword: '',
    };

    changeValueLogIn = (e) => {
        this.setState({
            logInEmail: e.target.value
        })
    };

    changeValuePassword = (e) => {
        this.setState({
            logInPassword: e.target.value
        })
    };

    render() {
        return (
            <Fragment>
                <Header/>
                <Grid className='feature_logIn'>
                    <h2>
                        Login
                    </h2>


                    <Row className='show-grid'>
                        <FormGroup>
                            <Col xs={12} sm={6}>
                                <FormControl type="text"
                                             value={this.state.logInEmail}
                                             placeholder="Enter your mail"
                                             onChange={this.changeValueLogIn}
                                />
                            </Col>
                            <Col xs={12} sm={6}>
                                <FormControl type="text"
                                             value={this.state.logInPassword}
                                             placeholder="Password"
                                             onChange={this.changeValuePassword}
                                />
                            </Col>

                        </FormGroup>
                    </Row>

                    <Col xs={12} sm={6} smPush={3} >
                        <Button bsSize='large'
                                bsStyle='success'
                                className='feature_logInButton'>
                            LOGIN
                        </Button>
                    </Col>

                </Grid>
            </Fragment>
        );
    }
}

export default LogIn;