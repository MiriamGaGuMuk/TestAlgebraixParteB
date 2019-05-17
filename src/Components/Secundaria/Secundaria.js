import React, {Component} from 'react';
import CheckBoxAll from '../CheckBoxAll';
// import Primero from '../Primero/Primero';
// import Segundo from '../Segundo/Segundo';
// import Tercero from '../Tercero/Tercero';
import './secundaria.css'

class Secundaria extends Component {
    constructor(props) {
        super(props)
        this.state = {
          second: [
            {id: 1, value: "Secundaria", isChecked: false},
            {id: 1, value: "Primero", isChecked: false},
            {id: 1, value: "Segundo", isChecked: false},
            {id: 1, value: "Tercero", isChecked: false}

          ]
        }
      }
      
      handleAllChecked = (event) => {
        let second = this.state.second
        second.forEach(segundo => segundo.isChecked = event.target.checked) 
        this.setState({second: second})
      }
    
      handleCheckChieldElement = (event) => {
        let second = this.state.second
        second.forEach(segundo => {
           if (segundo.value === event.target.value)
              segundo.isChecked =  event.target.checked
        })
        this.setState({second: second})
      }
    
    
      render() {
        return (
          <div>
          <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" />Secundaria
            <ul>
            {
              this.state.second.map((segundo, index) => {
                return (
                <CheckBoxAll 
                key={index} 
                handleCheckChieldElement={this.handleCheckChieldElement} 
                 {...segundo} />)
              })
            }
            </ul>
          </div>
        );
      }
}

export default Secundaria;