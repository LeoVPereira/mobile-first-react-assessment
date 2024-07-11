import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/TextField';
import Button from '../components/Button';
import fakeCreate from '../utils/fakeCreate';

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fakeCreate({ name, description });
        navigate('/list');
    };

    return (
        <div style={{ padding: 20 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nome do Produto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Criar Produto
                </Button>
            </form>
        </div>
    );
};

export default Form;
