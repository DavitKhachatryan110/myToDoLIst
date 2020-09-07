import React , {Component} from "react" 

class Product extends Component{
    constructor(props){
        super(props);
    };

    render() {
        return(
<>       
<h1>my price is {this.props.price}</h1>      
<h1>my name is {this.props.name}</h1>  
<h1>my description is {this.props.description}</h1>  
 </>
        );
    }
};
export default Product ;