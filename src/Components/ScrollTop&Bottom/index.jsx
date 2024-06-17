import { useRef } from "react";
import useFetch from "../use-fetch";




export default function SrollToTopAndBottom() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
    );

    const bottomRef = useRef(null);

    if (error) {
        return <h1>Some Error Occured</h1>
    }


    if (pending) {
        return <h1>Loading! Please Wait</h1>
    }


    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behaviour : 'smooth'});
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: "smooth",
        });
    }

    return (
        <div>
            <h1>Scroll to top & bottom feature</h1>
            <h3>This is Top</h3>
            <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
            {data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.key}>{productItem.title}</p>
                ))
                : null}
            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref = {bottomRef}></div>
            <h3>This is Bottom</h3>
        </div>
    )
}