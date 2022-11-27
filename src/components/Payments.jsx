//import "../styles/Header.css"
import { useState } from "react";
import {PaysTable} from './PaysTable'
import {Payment} from './Payment'
import {Modal} from './Modal'
import '../styles/Payment.css'


let paymentsDB = []
if(localStorage.payments){
    paymentsDB = JSON.parse(localStorage.payments)
} else {
    localStorage.payments = JSON.stringify([])
}

const initialTotalPay = 16400

const Payments = () => {

    const [payments, setPayments] = useState(paymentsDB)
    const [showModal, setShowModal] = useState(false)

    const totalPays = payments.reduce( (acum, py) => acum + py.valor, initialTotalPay)

    const addPay = (concepto, valor) => {

        const fechaActual = new Date()
        const formatoFecha = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`

        const newPays = [
            ...payments,
            {
                fecha: formatoFecha,
                concepto,
                valor
            }
        ]

        localStorage.payments = JSON.stringify(newPays)

        setPayments(newPays)
    }

    return (
        <>
            <div>
                <button className="payButton" type="button" onClick={() => setShowModal(true)}>Add +</button>
                <PaysTable totalPays={totalPays}>
                    {payments.map( py => (
                        <Payment key={py.concepto} {...py}/>
                    ))}
                </PaysTable>
            </div>
            { showModal &&
            <Modal setShowModal={setShowModal} addPay={addPay}/>
            }
        </>
    )
}
  
export {Payments};