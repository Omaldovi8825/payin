import "../styles/Modal.css"
import ReactDOM from 'react-dom';
import { useState } from "react";

const formNewPayInitialState = {
    concept: '',
    qty: 0
}

const formErrorsInitialState = {
    concept: false,
    qty: false
}

const Modal = ({setShowModal, addPay}) => {

    const [form, setForm] = useState(formNewPayInitialState)
    const [errors, setErrors] = useState(formErrorsInitialState)
    const { concept, qty } = form

    const validateFormData = () => {

        const acceptedContentLength = concept.length <= 2
        const acceptedQty = qty <= 0

        setErrors({
            concept: acceptedContentLength,
            qty: acceptedQty
        })

        return !(acceptedContentLength || acceptedQty)
    }

    const onAddPay = (e) => {
        e.preventDefault()

        const validData = validateFormData()

        if(!validData) return

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
                    style={{border: `2px solid ${errors.concept ? 'red' : 'black'}`}}
                    value={form.concept}
                    onChange={handleChange}
                    name="concept"
                >
                </textarea>
                <label>Cantidad</label>
                <input 
                    style={{border: `2px solid ${errors.qty ? 'red' : 'black'}`}}
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