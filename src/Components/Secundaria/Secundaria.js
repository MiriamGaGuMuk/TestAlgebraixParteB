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
          groups: [{id:1, value: 'Primero', isChecked: false, 
          grupos:[
            {id:1, value:'1A', isChecked: false},
            {id:2, value:'1B', isChecked: false},
            {id:3, value:'NI1', isChecked: false}
        ]},

        {id:2, value: 'Segundo', isChecked: false, 
        grupos:[
            {id:4, value:'2A', isChecked: false},
            {id:5, value:'2B', isChecked: false},
            {id:6, value:'NI2', isChecked: false}

        ]},

        {id:3, value: 'Tercero', isChecked: false, 
        grupos:[
          {id:7, value:'3A', isChecked: false},
          {id:8, value:'3B', isChecked: false},
          {id:9, value:'NI3', isChecked: false}
        ]}
           

          ]
        }
      }
      
      handleAllChecked = (event) => {
        let groups = this.state.groups
        groups.forEach(grupos => grupos.isChecked = event.target.checked) 
        this.setState({groups: groups})
      }
    
      handleCheckChieldElement = (event) => {
        let groups = this.state.groups
        // console.log('This is',groups)
        groups.forEach(grupos => {
           if (grupos.value === event.target.value)
              grupos.isChecked =  event.target.checked
        })
        this.setState(
          {groups: groups})
      }
    
    
      render() {
        
        return (
          <React.Fragment>
            <section>
          <div className="table_container">
          <div className="Secundaria">
            <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" />Secundaria
          </div>
          <ul>
          {
              this.state.groups.map((grupos, index) => {
                console.log('At render',grupos.grupos[0].id)
                return (
                  <React.Fragment>
                    <li className="second_level" key={index}>
                      <input key={grupos.id} 
                      onChange={this.handleCheckChieldElement} 
                      type="checkbox" checked={grupos.isChecked} 
                      value={grupos.value} /> 
                      {grupos.value}
                    </li>
                    
                  <CheckBoxAll
                  key={index} 
                  handleCheckChieldElement={this.handleCheckChieldElement} 
                   {...grupos} />               
                  </React.Fragment>
                    
                )
                 
              })
              
            }
            
            </ul>  
          </div>
          </section>
          </React.Fragment>
          
        );
        
      }
      
}

export default Secundaria;
/*   <CheckBoxAll
                key={index} 
                handleCheckChieldElement={this.handleCheckChieldElement} 
                 {...grupos} /> */
