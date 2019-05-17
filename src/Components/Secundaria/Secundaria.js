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
          highSchool: [
            {id: 1, value: "Primero", isChecked: false},
            {id: 1, value: "Segundo", isChecked: false},
            {id: 1, value: "Tercero", isChecked: false}

          ]
        }
      }
      
      handleAllChecked = (event) => {
        let highSchool = this.state.highSchool
        highSchool.forEach(secundaria => secundaria.isChecked = event.target.checked) 
        this.setState({highSchool: highSchool})
      }
    
      handleCheckChieldElement = (event) => {
        let highSchool = this.state.highSchool
        highSchool.forEach(secundaria => {
           if (secundaria.value === event.target.value)
              secundaria.isChecked =  event.target.checked
        })
        this.setState({highSchool: highSchool})
      }
    
    
      render() {
        return (
          <div>
          <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" />Secundaria
          <ul>
            {
              this.state.highSchool.map((secundaria, index) => {
                return (
                <CheckBoxAll 
                key={index} 
                handleCheckChieldElement={this.handleCheckChieldElement} 
                 {...secundaria} />)
              })
            }
            </ul>
          </div>
        );
      }
}

export default Secundaria;