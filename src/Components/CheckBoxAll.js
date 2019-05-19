import React from 'react'

export const CheckBoxAll = props => {
    // console.log('Props from Checkboxall',props.id)
    return (
      <React.Fragment>
      <li className="third_level">
       <input  key={props.grupos[0].id} 
       onChange={props.handleCheckChieldElement} 
       type="checkbox" checked={props.isChecked} 
       value={props.grupos[0].value} /> 
       {props.grupos[0].value}
      </li>
      <li className="third_level">
      <input  key={props.grupos[1].id} 
      onChange={props.handleCheckChieldElement} 
      type="checkbox" checked={props.isChecked} 
      value={props.grupos[1].value} /> 
      {props.grupos[1].value}
     </li>
     <li className="third_level">
     <input  key={props.grupos[2].id} 
     onChange={props.handleCheckChieldElement} 
     type="checkbox" checked={props.isChecked} 
     value={props.grupos[2].value} /> 
     {props.grupos[2].value}
    </li>
      </React.Fragment>
    )
    
}



export default CheckBoxAll;