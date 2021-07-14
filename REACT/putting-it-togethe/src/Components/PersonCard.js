import React, {Component}from 'react';
class PersonCard  extends Component{
    constructor(props){
        super(props);
        this.state= {
            age: this.props.age
        }
    }

    increaseAge = () => this.setState({age: this.state.age+1});

    render(){
        const {firstName,lastName,hairColor}=this.props;
        const {age} = this.state;
        return(
            <div>
               <h1>{firstName},{lastName}</h1>
                <br></br>
                Age:{age}
                <br></br>
                Hair Color:{hairColor}
                <br></br>
                <button onClick={this.increaseAge}>increase</button>
            </div>
        );
    }
    
}
export default PersonCard;