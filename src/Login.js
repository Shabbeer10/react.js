// src/components/Login.js

import React, { useState, useContext } from 'react';
import {
    Box,
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Link,
    TextField,
    Typography,
    Snackbar,
    Alert,
    IconButton,
    InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ForgotPassword from './ForgotPassword';
import { admins } from './adminData'; // Ensure correct path
import { AuthContext } from './Authorization'; // Import AuthContext
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // Form state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Error handling state
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    
    // Modal and Snackbar state
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    
    // Password visibility toggle state
    const [showPassword, setShowPassword] = useState(false);

    // Authentication context and navigation
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handlers for Forgot Password Modal
    const handleClickOpenForgotPassword = () => {
        setOpenForgotPassword(true);
    };

    const handleCloseForgotPassword = () => {
        setOpenForgotPassword(false);
    };

    // Handlers for Snackbar
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    // Handler to toggle password visibility
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateInputs();
        if (!isValid) {
            return;
        }

        // Authenticate against admins data
        const admin = admins.find(
            (admin) => admin.email.toLowerCase() === email.toLowerCase() && admin.password === password
        );

        if (admin) {
            login(admin); // Use the login function from AuthContext
            setSnackbarMessage('Logged in successfully!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            // Redirect to admin dashboard or home after a short delay to show the snackbar
            setTimeout(() => {
                navigate(`/user/${admin.alias}`);
            }, 1500);
        } else {
            setSnackbarMessage('Invalid email or password.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    // Input validation function
    const validateInputs = () => {
        let isValid = true;

        // Email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        // Password validation
        if (!password || password.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <Card variant="outlined" sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 8 }}>
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', mb: 2, textAlign: 'center' }}
            >
                Sign in
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
            >
                {/* Email Field */}
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@domain.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                        aria-label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                {/* Password Field */}
                <FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpenForgotPassword}
                            variant="body2"
                            sx={{ alignSelf: 'baseline' }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>
                    <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        placeholder="••••••"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? 'error' : 'primary'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>

                {/* Remember Me Checkbox */}
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />

                {/* Forgot Password Modal */}
                <ForgotPassword open={openForgotPassword} handleClose={handleCloseForgotPassword} />

                {/* Submit Button */}
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Sign in
                </Button>

                {/* Sign Up Link */}
                <Typography sx={{ textAlign: 'center' }}>
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/signup" // Update to your actual sign-up route
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                    >
                        Sign up
                    </Link>
                </Typography>
            </Box>

            {/* Snackbar for Notifications */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Card>
    );
}
