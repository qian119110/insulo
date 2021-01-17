// Credit to:
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
import React, {useContext, Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import {AuthContext, authTypes} from 'insulo-route';
import AuthError from './AuthError';
// #Localization(start)
import LocaleContext from 'insulo-locale-provider';
// #Localization(stop)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignOut() {

  const classes = useStyles();  
  const {actions: authActions, value: authConfig} = useContext(AuthContext);

  let SignOutCnv = "Sign Out";
  // #Localization(start)
  const { value: localeConfig } = useContext(LocaleContext);
  const currentLocale = localeConfig.currentLocale;

  if (localeConfig.currentLocale && typeof localeConfig.locales == 'object' && 
    typeof localeConfig.locales[currentLocale] == 'object' && localeConfig.locales[currentLocale]['auth_logout']) {
      SignOutCnv= localeConfig.locales[currentLocale]['auth_logout'];
  }
  // #Localization(stop)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  
    authActions.clearCredentials({additionalProps: {async: authConfig.authValues.asyncSignIn}});
  }

  if (authConfig.authState === authTypes.AUTH_STATE_LOGINPROGRESS) {
    const authErrorProps = {
      authError: "Authorization is in progress (wait 3 seconds) ...",
      authErrorId: "auth_login_inprogress", 
      authErrorSeverity: authTypes.AUTH_SEVERITY_INFO
    }
    return (
      <AuthError {...authErrorProps} />
    )
  }
  else if (authConfig.authState === authTypes.AUTH_STATE_LOGOUTPROGRESS) {
    const authErrorProps = {
      authError: "Logging out in progress (wait 3 seconds) ...",
      authErrorId: "auth_logout_inprogress", 
      authErrorSeverity: authTypes.AUTH_SEVERITY_INFO
    }
    return (
      <AuthError {...authErrorProps} />
    )
  }

  if (authConfig.authState === authTypes.AUTH_STATE_SET) {
    return (
      <Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {SignOutCnv}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {SignOutCnv}
            </Button>
          </form>
        </div>
      </Container>
      <Container component="main" maxWidth="lg">
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </Fragment>
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Alert severity="error">
        Authentication error.
      </Alert>
    </Container>
  );
}