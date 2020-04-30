import React from 'react';
import { loginStyles } from "./styles";
import {
    TextField,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    Container
} from "@material-ui/core";

export interface LoginFormProps {
    handleEmailChange: Function;
    handlePasswordChange: Function;
    handleSubmitBtnClick: Function;
}

const LoginForm: React.SFC<LoginFormProps> = ({ handleEmailChange, handlePasswordChange, handleSubmitBtnClick }) => {
    const classes = loginStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
            </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleEmailChange()}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePasswordChange()}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.loginBtn}
                        onClick={handleSubmitBtnClick()}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default LoginForm;