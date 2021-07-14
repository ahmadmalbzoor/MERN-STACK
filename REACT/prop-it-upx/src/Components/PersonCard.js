import React, {Component}from 'react';
class PersonCard  extends Component{
    render(){
        const {firstName,lastName,age,hairColor}=this.props;
        return(
            <div>
               <h1>{firstName},{lastName}</h1>
                <br></br>
                Age:{age}
                <br></br>
                Hair Color:{hairColor}
            </div>
        );
    }
}
export default PersonCard;