import React from 'react'

export const CheckBoxAll = props => {
    return (
      <li>
       <input key={props.id} 
       onChange={props.handleCheckChieldElement} 
       type="checkbox" checked={props.isChecked} 
       value={props.value} /> 
       {props.value}
      </li>
    )
}


export default CheckBoxAll;