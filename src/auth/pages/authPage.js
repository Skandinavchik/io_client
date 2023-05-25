import SignInForm from "../components/signInForm";
import SignUpForm from '../components/signUpForm';
import { Box, Button } from "@mui/material";
import { useState } from "react";


const AuthPage = () => {

    const [hasAccount, setHasAccount] = useState(true);

    const style = {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const showForm = hasAccount ? <SignInForm /> : <SignUpForm />
    const showLink = hasAccount
        ? <div style={{ textAlign: 'center' }}>
            Don't have an account?
            <Button sx={{ color: 'primary' }}
                onClick={() => setHasAccount(hasAccount => !hasAccount)}>
                Sign Up
            </Button>
        </div>

        : <div style={{ textAlign: 'center' }}>
            Have an account?
            <Button sx={{ color: 'primary' }}
                onClick={() => setHasAccount(hasAccount => !hasAccount)}>
                Sign In
            </Button>
        </div>

    return (
        <main style={style}>
            <Box sx={{
                width: 450,
                borderRadius: '20px',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                padding: '50px'
            }}>
                {showForm}
                {showLink}
            </Box>
        </main>

    );
};

export default AuthPage;