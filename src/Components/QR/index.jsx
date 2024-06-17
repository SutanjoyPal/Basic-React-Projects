import { useState } from "react"
import QRCode from "react-qr-code";



export default function QRCodeGenerator(){

    const [qrCode,setQrCode] = useState('');
    const [input,setInput] = useState('');

    function handleGenrateQRCode(){
        setQrCode(input);
        setInput('');
    }
    

    return(
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" placeholder="Enter data"  onChange={(e) => setInput(e.target.value)}/>
                <button disabled={input && input.trim() !== '' ? false:true}   onClick={handleGenrateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode 
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
    )
}