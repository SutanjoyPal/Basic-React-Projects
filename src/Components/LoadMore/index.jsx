import { useEffect, useState } from "react";

import './Style.css'

export default function LoadMore() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function getProducts() {
        try {

            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setLoading(false);
                setProducts((prevData) => [...prevData, ...result.products]);
            }
            console.log(result);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }


    }

    useEffect(() => {
        getProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
      }, [products]);

    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="Container">
            <div className="product-container">
                {
                    products && products.length ?

                        products.map((item) => (<div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>)
                        )

                        : null
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>
        </div>
    )
}