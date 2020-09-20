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
    
    handleSubmit = (text , ev) => { 
      
        if(this.state.change === '') return;
       // this.state.tasks.push(aa);
        const shalloArr = [...this.state.tasks ,
                    {   text: this.state.change,
                        todoId: this.todoId
                    }
        ]
        this.setState({tasks:[...shalloArr]} );
        this.setState({change:''})
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
        
         console.log(this.state.tasks)
        
        return(
            <div  className="styledDiv"  onSubmit={this.handleSubmit}>
                <h1 className='stH1' > TO DO </h1>
                    <InputGroup className='inputGroup' >
                        <Input type="text" 
                            value={this.state.change}
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
