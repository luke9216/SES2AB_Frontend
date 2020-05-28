import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Link, Box, Container } from "@material-ui/core";
import LoginForm from './../../containers/Login/LoginForm';
import { userLogin } from "./../../../services/AuthService";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";

export interface LoginPageProps {
    props?: any
}

const LoginPage: React.SFC<LoginPageProps> = () => {
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

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Student Email Required'),
        password: Yup.string()
            .required('Password Required')
    });

    const onLogginBtnClicked = async (values: any) => {
        let username = values.email.toLowerCase().split('@')[0]
        userLogin(username, values.email.toLowerCase(), values.password.toLowerCase()).then(response => {
            if(response.status === 200) {
                window.location.pathname = "/"
            } else {
                toast.error("An error occured. Please try again later");
                console.log(response)
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs">
        <React.Fragment>
        <Grid container>
            <Formik
                initialValues={userDetailsState}
                validationSchema={LoginSchema}
                onSubmit={(values: any) => onLogginBtnClicked(values)}
            >
                {(props) => <LoginForm formikProps={props} />}
            </Formik>

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
