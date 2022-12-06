import React from 'react';
import { Country } from "../others/country";

function SimpleMapFunction() {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const iterNum = numbers.map(num => { return (num) })

  return (
    <div>
      <strong className="heading"> Map Function  </strong>
      <ul>
        <li> {iterNum} </li>
      </ul>
    </div>
  )
}
export default SimpleMapFunction;

export function MapFunctionWithJSX() {

  return (
    <div>
      <strong className="heading"> Map Function With JSX  </strong>
      <div style={{ width:"100%", height: "80vh", overflow: "scroll" }}>
        <table style={{ textAlign: "left", width: "100%" }}>
          <tbody>
            {
              Country.map((element, index) => {
                return (
                  <tr key={index}>
                    <td> <strong> Country : </strong> {element.name} </td>
                    <td> <strong> Capital : </strong> {element.capital} </td>
                    <td> <strong> Currency : </strong>{element.currency} </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}