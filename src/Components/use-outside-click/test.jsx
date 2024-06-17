import { useRef, useState } from "react";
import useOutsideClick from ".";





export default function UseClickOutsideTest() {
    const ref = useRef();
    const [showContent, setShowContent] = useState(false);
    useOutsideClick(ref,()=>setShowContent(false))

    return (
        <div>
            {
                showContent ?
                    <div ref={ref}>
                        <h1>This is a random content</h1>
                        <p>
                            Please click outside of this to close this. It won't close if you
                            click inside of this content
                        </p>
                    </div>
                    : <button onClick={() => setShowContent(true)}>showContent</button>
            }
        </div>
    )
}
