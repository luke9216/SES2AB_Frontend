import * as React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './../containers/Login/LoginForm';

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
        <LoginForm handleEmailChange={onEmailChange} handlePasswordChange={onPasswordChange} handleSubmitBtnClick={onLogginBtnClicked} />
    );
};

export default LoginPage;