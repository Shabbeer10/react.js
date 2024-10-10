// src/components/ForgotPassword.js

import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField
} from '@mui/material';

export default function ForgotPassword({ open, handleClose }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            return;
        }
        setEmailError(false);
        setEmailErrorMessage('');
        // Simulate password reset
        setSubmitted(true);
        // Optionally, reset after a delay
        setTimeout(() => {
            setSubmitted(false);
            handleClose();
        }, 3000);
    };

    const handleDialogClose = () => {
        setEmail('');
        setEmailError(false);
        setEmailErrorMessage('');
        setSubmitted(false);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleDialogClose} aria-labelledby="forgot-password-title">
            <DialogTitle id="forgot-password-title">Forgot Password</DialogTitle>
            <DialogContent>
                {submitted ? (
                    <DialogContentText>
                        If an account with that email exists, a password reset link has been sent.
                    </DialogContentText>
                ) : (
                    <>
                        <DialogContentText>
                            Please enter your email address to receive a password reset link.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="forgot-email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError}
                            helperText={emailErrorMessage}
                        />
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose}>Cancel</Button>
                {!submitted && <Button onClick={handleSubmit}>Submit</Button>}
            </DialogActions>
        </Dialog>
    );
}
