import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Link, Box, Container } from "@material-ui/core";
import LoginForm from './../containers/LoginForm';

export interface LoginPageProps {
    props?: any
}

const LoginPage: React.SFC<LoginPageProps> = (props) => {
    const history = useHistory();
    const [userDetailsState, setUserDetailsState] = React.useState({
        email: "",
        password: ""
    });

    const onEmailChange = () => (event: any) => {
        setUserDetailsState({
            ...userDetailsState,
            email: event.target.value
        })
    };

    const onPasswordChange = () => (event: any) => {
        setUserDetailsState({
            ...userDetailsState,
            password: event.target.value
        })
    };

    const onLogginBtnClicked = () => (event: any) => {
        if (userDetailsState.email.toLowerCase() === "test@test.com" && userDetailsState.password.toLowerCase() === "12345") {
            console.log("Login Successful")
            window.location.href = 'http://localhost:3000/';
        } else {
            console.log("Login Failed")
        }
    }

    return (
        <Container component="main" maxWidth="xs">
        <React.Fragment>
     <Grid container>
        <LoginForm handleEmailChange={onEmailChange}  handlePasswordChange={onPasswordChange} handleSubmitBtnClick={onLogginBtnClicked} />

        <Grid container>
                <Grid item xs>
                  <Link href="Resetpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup"  variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
        </Grid>
     </Grid>
     </React.Fragment>
     </Container>
    );
};

export default LoginPage;
