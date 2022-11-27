import "../styles/Modal.css"
import ReactDOM from 'react-dom';
import { useState } from "react";

const formNewPayInitialState = {
    concept: '',
    qty: 0
}

const Modal = ({setShowModal, addPay}) => {

    const [form, setForm] = useState(formNewPayInitialState)

    const onAddPay = (e) => {
        e.preventDefault()
        const { concept, qty } = form
        addPay( concept, Number(qty))
        setShowModal(false)
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <button className="closeModal" type="button" onClick={() => setShowModal(false)}>X</button>
            <form onSubmit={onAddPay}>
                <label>Concepto</label>
                <textarea
                    value={form.concept}
                    onChange={handleChange}
                    name="concept"
                >
                </textarea>
                <label>Cantidad</label>
                <input 
                    type="number"
                    name="qty"
                    onChange={handleChange}
                    value={form.qty}
                />
                <button type="submit">Add +</button>
            </form>
        </div>
    , document.querySelector('#modal'))
}
  
export {Modal};