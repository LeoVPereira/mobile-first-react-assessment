import React, { useState, useEffect } from 'react';
import TableList from '../components/TableList';
import fakeList from '../utils/fakeList';

const List = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(fakeList());
    }, []);

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div style={{ padding: 20 }}>
            <TableList rows={products} onDelete={handleDelete} />
        </div>
    );
};

export default List;
