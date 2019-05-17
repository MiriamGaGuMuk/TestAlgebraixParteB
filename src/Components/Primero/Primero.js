import React, {Component} from 'react';
import CheckBoxAll from '../CheckBoxAll';

class Primero extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          first: [
            {id: 1, value: "1A", isChecked: false},
            {id: 2, value: "1B", isChecked: false},
            {id: 3, value: "NI1", isChecked: false},
          ]
        }
      }
      
      handleAllChecked = (event) => {
        let first = this.state.first
        first.forEach(primero => primero.isChecked = event.target.checked) 
        this.setState({first: first})
      }
    
      handleCheckChieldElement = (event) => {
        let first = this.state.first
        first.forEach(primero => {
           if (primero.value === event.target.value)
              primero.isChecked =  event.target.checked
        })
        this.setState({first: first})
      }
      
    
      render() {
        return (
          <div>
          <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" />Primero
            <ul>
            {
              this.state.first.map((primero, index) => {
                return (
                <CheckBoxAll 
                key={index} 
                handleCheckChieldElement={this.handleCheckChieldElement} 
                 {...primero} />)
              })
            }
            </ul>
          </div>
        );
      }
    }

export default Primero;