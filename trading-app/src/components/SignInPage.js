import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './styles/SignInPage.css';



function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Initialize the useHistory hook
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Sign-in successful, navigate to the "/home" page
            navigate('/homepage');
        } catch (error) {
            console.error('Sign-in error', error);
            // Handle sign-in error, e.g., show an error message to the user.
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="container">
            <Grid container justifyContent="center">
                <Paper className="paper" elevation={3}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container justifyContent="center">
                            <Typography variant="h5">Sign In</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={handleEmailChange} // Update email state
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                value={password}
                                onChange={handlePasswordChange} // Update email state
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleSignIn}
                            >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => navigate('/signup')}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item container justifyContent={'center'}>
                            <Typography variant="body2">
                                Don't have an account?{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}


export default SignInPage;
