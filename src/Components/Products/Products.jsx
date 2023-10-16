import React, { useEffect, useState } from "react";
import Login from "../Login/Login";

function Products(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(response => setData(response)) 

    }, [])

    return(
        <div>
            {
                data.map((product) => {
                    return <li>{product.name}</li>
                })
            }
        </div>
    )
}

export default Products;