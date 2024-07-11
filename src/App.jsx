import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Form from './pages/Form';
import List from './pages/List';
import Loading from './components/Loading';

const App = () => {
    return (
        <Router>
            <Navbar />
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/list" element={<List />} />
                </Routes>
            </React.Suspense>
        </Router>
    );
};

export default App;
