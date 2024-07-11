import React from 'react';
import { AppBar, Toolbar, Typography as MuiTypography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Avatar src="../static/images/logo" sx={{ width: 46, height: 46 }} />
                </Box>
                <Box>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Login</Link>
                    <Link to="/form" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Criar</Link>
                    <Link to="/list" style={{ color: 'inherit', textDecoration: 'none' }}>Listar</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
