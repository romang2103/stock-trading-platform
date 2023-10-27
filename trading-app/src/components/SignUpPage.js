import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './styles/SignUpPage.css'; // Import the CSS file

function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Sign-up successful');
            // Sign-up successful, you can navigate to another page or show a success message.
        } catch (error) {
            console.error('Sign-up error', error);
            // Handle sign-up error, e.g., show an error message to the user.
        }
    }

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
                            <Typography variant="h5">Sign Up</Typography>
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
                                onChange={handlePasswordChange} // Update password state
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => navigate('/')}
                            >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item container justifyContent={'center'}>
                            <Typography variant="body2">
                                Already have an account?{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default SignUpPage;
