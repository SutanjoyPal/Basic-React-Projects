import { useState } from "react";
import Modal from './modal'
import './Style.css'

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>

            <button onClick={handleToggleModalPopup}>Open Modal PopUp</button>
            {showModalPopup ? (
                <Modal
                    id={"custom-id"}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    onClose={onClose}
                    body={<div>Customized body</div>}
                />
                
            ):null}
        </div>
    )
}