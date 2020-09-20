import React , {Component , PureComponent} from 'react'
import {ListGroupItem , ListGroup} from 'reactstrap'

export default class List extends PureComponent {

    render() {

        const List = this.props.tasks.map((item) => (
           
        <ListGroupItem  tag="button"  action key={item.todoId} onClick={this.props.handleDelete(item.todoId)}>{item}  </ListGroupItem>
     
          ))

        return(
            
                <ListGroup>
                  {List}  
                </ListGroup>
            
        
   )
 }
}