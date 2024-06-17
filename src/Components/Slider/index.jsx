import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Style.css'


export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(getUrl);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === (images.length - 1) ? 0 : currentSlide + 1);
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />

            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                    />
                ))
                : null}

            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className="circle-indicators">
                {images && images.length
                ? images.map((_, index) => (
                    <button
                        key={index}
                        className={
                        currentSlide === index
                            ? "current-indicator"
                            : "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                    ))
                : null}
            </span>
        </div>
    )
}