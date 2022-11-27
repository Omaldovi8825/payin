//import "../styles/Header.css"

const Payment = (props) => {

    const { fecha, concepto, valor } = props

    return (
        <tr>
            <td>{fecha}</td>
            <td>{concepto}</td>
            <td>${valor}</td>
        </tr>
    );
}
  
export {Payment};