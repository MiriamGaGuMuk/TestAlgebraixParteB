import React, {Component} from 'react';
import CheckBoxAll from '../CheckBoxAll';

class Segundo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          second: [
            {id: 1, value: "2A", isChecked: false},
            {id: 2, value: "2B", isChecked: false},
            {id: 3, value: "NI2", isChecked: false},
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
          <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" />Segundo
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

export default Segundo;