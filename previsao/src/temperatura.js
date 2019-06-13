
import React from 'react'

const Temperatura = (props) =>{
    return(
        <table className="previsao-temperatura" >
            <tr className="previsao-temperatura__linha">
                <th>
                    Máxima:
                </th>
            <td>
                {props.temperatura.max} ºc
            </td>
            </tr>
                <tr className="previsao-temperatura__linha">
                    <th>
                        Mínima:
                    </th>
                    <td>
                        {props.temperatura.min} ºc
                    </td>
                </tr>
            </table> 
    )
}

export default Temperatura;