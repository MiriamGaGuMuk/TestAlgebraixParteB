import React, {Component} from 'react';
import CheckBoxAll from '../CheckBoxAll';

class Tercero extends Component {
    constructor(props) {
        super(props)
        this.state = {
          third: [
            {id: 1, value: "3A", isChecked: false},
            {id: 2, value: "3B", isChecked: false},
            {id: 3, value: "NI3", isChecked: false},
          ]
        }
      }
      
      handleAllChecked = (event) => {
        let third = this.state.third
        third.forEach(tercero => tercero.isChecked = event.target.checked) 
        this.setState({third: third})
      }
    
      handleCheckChieldElement = (event) => {
        let third = this.state.third
        third.forEach(tercero => {
           if (tercero.value === event.target.value)
              tercero.isChecked =  event.target.checked
        })
        this.setState({third: third})
      }
    
    
      render() {
        return (
          <div>
          <input type="checkbox" onChange={this.handleAllChecked}  value="checkedAll" /> Tercero
            <ul>
            {
              this.state.third.map((tercero, index) => {
                return (
                <CheckBoxAll
                key={index} 
                handleCheckChieldElement={this.handleCheckChieldElement} 
                 {...tercero} />)
              })
            }
            </ul>
          </div>
        );
      }
    }

export default Tercero;