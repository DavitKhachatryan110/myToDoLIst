import React , {Component , PureComponent} from 'react'
import {ListGroupItem , ListGroup} from 'reactstrap'
import  '../Styles/all.css'

export default class List extends PureComponent {

    render() {

        const List = this.props.tasks.reverse().map((item) => (
           
        <ListGroupItem className='listStyle' tag="button"  action key={item.todoId} onClick={() => {this.props.handleDelete(item.todoId)}}>{item.text}</ListGroupItem>
     
          ))

        return(
            
                <ListGroup>
                  {List}  
                </ListGroup>
            
        
   )
 }
}