import { makeStyles } from '@material-ui/core/styles';

export const navigationButtonsStyles = makeStyles(theme => ({
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root: {
        flexGrow: 1,
    }
}));

export const logoStyles = makeStyles(theme => ({
    logo: {
        height: '10%',
        width: '10%'
    }
}));
