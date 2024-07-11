import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/TextField';
import Button from '../components/Button';
import fakeLogin from '../utils/fakeLogin';
import Alert from '../components/Alert';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fakeLogin(username, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
                {error && <Alert severity="error">{error}</Alert>}
            </form>
        </div>
    );
};

export default Login;
