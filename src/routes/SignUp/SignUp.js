import React, {PureComponent, Fragment} from 'react';
import Menu from "../../components/menu/menu.component";
import {Button, FormControl, Grid, Row, Col, FormGroup} from 'react-bootstrap';
import './SignUp.style.css';

class Signup extends PureComponent {

    state = {
        signInEmail: '',
        signInPassword: '',
    };

    changeValuesignInLogin = (e) => {
        this.setState({
            signInEmail: e.target.value
        })
    };

    changeValuesignInPassword = (e) => {
        this.setState({
            signInPassword: e.target.value
        })
    };

    render() {
        return (
            <Fragment>
                <Menu/>
                <Grid className='feature_signUp'>
                    <h2>
                        Sign Up
                    </h2>


                    <Row className='show-grid'>
                        <FormGroup>
                            <Col xs={12} sm={6}>
                                <FormControl type="text"
                                             value={this.state.signInEmail}
                                             placeholder="Enter your email address"
                                             onChange={this.changeValuesignInLogin}
                                />
                            </Col>
                            <Col xs={12} sm={6}>
                                <FormControl type="text"
                                             value={this.state.signInPassword}
                                             placeholder="Password (minimum 8 characters)"
                                             onChange={this.changeValuesignInPassword}
                                />
                            </Col>

                        </FormGroup>
                    </Row>

                    <Col xs={12} sm={6} smPush={3} >
                        <Button bsSize='large'
                                bsStyle='success'
                                className='feature_logInButton'>
                            SIGN UP
                        </Button>
                    </Col>

                </Grid>
            </Fragment>
        );
    }
}

export default Signup;