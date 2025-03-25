import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cartItems')) || [];
        setProduct(data);
    }, []);

    const handleIncrement = (index) => {
        const updatedProduct = [...product];
        updatedProduct[index].quantity += 1;
        setProduct(updatedProduct);
        localStorage.setItem('cartItems', JSON.stringify(updatedProduct)); // Update localStorage
    };

    const handleDecrement = (index) => {
        const updatedProduct = [...product];
        if (updatedProduct[index].quantity > 1) {
            updatedProduct[index].quantity -= 1;
            setProduct(updatedProduct);
            localStorage.setItem('cartItems', JSON.stringify(updatedProduct)); // Update localStorage
        }
    };

    const handleDelete = (index) => {
        const updatedProduct = product.filter((_, i) => i !== index);
        setProduct(updatedProduct);
        localStorage.setItem('cartItems', JSON.stringify(updatedProduct)); // Update localStorage
    };

    return (
        <>
            <div className="text-center">
                <h4>My Cart Items</h4>
            </div>

            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>
                                    <img src={item.image} alt={item.title} height={"100px"} width={"100px"} />
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleIncrement(index)}
                                        >
                                            +
                                        </button>
                                        <input
                                            type="text"
                                            value={item.quantity}
                                            readOnly
                                            className="mx-2 text-center"
                                            style={{ width: '40px' }}
                                        />
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleDecrement(index)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <MdDeleteForever
                                        size={24}
                                        color="red"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleDelete(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <p>Total Units: {product.reduce((acc, item) => acc + item.quantity, 0)}</p>
                <p>Total Price: ${product.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
                <div className="btn btn-warning">CheckOut</div>
            </div>
        </>
    );
};

export default CartPage;
