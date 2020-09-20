import React , {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input  } from 'reactstrap';


import List from './Lists'
import  '../Styles/all.css'


class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            change: '',
        };
    }
    todoId = 1
    // handleChange = (event) => {
    
    //     this.setState({change:event.target.value})
        
    // }
    handleSubmit = (text , ev) => { 
      //ev.preventDefault()
        //this.setState({change:this.state.tasks})
        //console.log(this.state.change);
        
        let aa = this.state.change;
        
        if(this.state.change === '') return;
        this.state.tasks.push(aa);
        this.setState({tasks:[{...this.state.tasks ,  todoId: this.todoId  }]} );
        //this.setState({tasks: this.state.tasks.push(aa)} );
       // console.log(this.state.tasks);
        this.setState({change:''})
       // console.log(this.state.change);
        this.todoId++
    }
    handleDelete = (id) => {
        
        const newArr =this.state.tasks.filter((todo)=>{
            return (todo.todoId !== id);
          })
        
        this.setState({tasks:[...newArr] });
        console.log(this.state.tasks)
    }

    render (){
        const styledInput = {
           outline: "none"
        }
        
        
        
        return(
            <div  className="styledDiv"  onSubmit={this.handleSubmit}>
                <h1 className='stH1' > TO DO </h1>
            <InputGroup >
                <Input type="text" 
                style={styledInput}
                placeholder='Enter Item'
                onChange={(e) => this.setState({change: e.target.value})} />
            <InputGroupAddon addonType="append">
                <Button color="secondary"   onClick={this.handleSubmit} >ADD</Button>
            </InputGroupAddon>
            </InputGroup>
        
            <List handleDelete={this.handleDelete} tasks={ this.state.tasks} />
            </div>
        )
    }
}
export default ToDo ;
