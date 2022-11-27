import '../styles/PaysTable.css'

const PaysTable = ({children, totalPays}) => {
    return (
        <table className="paysTable">
            <thead>
                <tr>
                    <th colSpan="2">Total</th>
                    <th>${totalPays}</th>
                </tr>
                <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}
  
export {PaysTable};
  