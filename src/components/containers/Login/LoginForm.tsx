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
    formikProps: any;
}

const LoginForm: React.SFC<LoginFormProps> = ({ formikProps }) => {
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
                        type="email"
                        id="email"
                        label="Email Address"
                        autoFocus
                        value={formikProps.values.email}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        helperText={(formikProps.errors.email && formikProps.touched.email) && formikProps.errors.email}
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
                        value={formikProps.values.password}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        helperText={(formikProps.errors.password && formikProps.touched.password) && formikProps.errors.password}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.loginBtn}
                        onClick={formikProps.handleSubmit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default LoginForm;