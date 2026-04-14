import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>Home</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
            </div>

            <div className="products-grid">
                {products.map((item) => (
                    <div className="card" key={item.id}>
                        
                        {/* ✅ FIX: clickable link */}
                        <Link to={`/products/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                        </Link>

                        <p>Price: {item.price}</p>

                        <button className="btn">Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;