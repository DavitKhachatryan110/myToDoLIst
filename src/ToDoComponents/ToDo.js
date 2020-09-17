import React , {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input  } from 'reactstrap';
import {  faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ToDo extends Component {
    
    state = {
        tasks: [],
        change: '',
    };
    // handleChange = (event) => {
    
    //     this.setState({change:event.target.value})
        
    // }
    handleClick = () => { 
      
        //this.setState({change:this.state.tasks})
        console.log(this.state.change);
        
        let aa = this.state.change;

        if(this.state.change === '') return;
        this.state.tasks.push(aa);
        this.setState({tasks:[...this.state.tasks  ]} );
        //this.setState({tasks: this.state.tasks.push(aa)} );
        console.log(this.state.tasks);
        this.setState({change:''})
        console.log(this.state.change);
        
    }
    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({tasks: newArr});
    }

    render (){
        const styledInput = {
           outline: "none"
        }
        const styledDiv = {
            width: "500px",
            marginLeft: "30%"
        }
        const stBut = {
            backgroundColor: "red",
            // marginLeft: "89%",
             display:"inline",
            
        }
        const stLI = {
            backgroundColor: "rgb(170, 194, 164)",
            //width:"402px",
            //height:"40px",
            fontSize: "20px",
            border: "2px solid ",
            borderRadius: "5px",
            marginTop: "5px",
            overflow: "visible",
            wordWrap:" break-word"
            
        }
        const stH1 = {
            textAlign:"center"

        }
        
        return(
            <div  style={styledDiv} >
                <h1 style={stH1}> TO DO </h1>
            <InputGroup >
                <Input type="text" 
                style={styledInput}
                placeholder='Enter Item'
                onChange={(e) => this.setState({change: e.target.value})} />
            <InputGroupAddon addonType="append">
                <Button color="secondary"   onClick={this.handleClick} >ADD</Button>
            </InputGroupAddon>
            </InputGroup>
        
            {<ul>
            {this.state.tasks.reverse().map((item,index) => (
            <><li key={index} style={stLI}>{item}</li> 
            <Button style={stBut} onClick={this.handleDelete}  ><FontAwesomeIcon icon={faTimesCircle} /></Button></>
          ))}
            </ul> }
            </div>
        )
    }
}
export default ToDo ;
