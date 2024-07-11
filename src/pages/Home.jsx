import React from 'react';
import Typography from '../components/Typography';
import Avatar from '../components/Avatar';

const Home = () => {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4">Bem-vindo ao Meu Sistema</Typography>
            <Typography variant="body1">Utilize o menu acima para navegar.</Typography>
        </div>
    );
};

export default Home;