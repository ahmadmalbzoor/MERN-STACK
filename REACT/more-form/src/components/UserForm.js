import React,{useState} from 'react'

const UserForm=(props)=>{
    const [FirstName,SetFirstName]=useState("");
    const[LastName,SetLastName]=useState("");
    const[Email,SetEmail]=useState("");
    const[Password,SetPassword]=useState("");
    const[ConfPass,SetConfPass]=useState("");
    const [hasBeenSubmitted,setHasbeenSubmitted]=useState(false);
    const [firstNameError,setFirstNameError]=useState("");
    const [lastNameError,setLastNameError]=useState("");
    const [emailError,setEmailError]=useState();
    const [passwordError,setPasswordError]=useState("");
    const[confPassError,setconfPassError]=useState("");
    
    const createUser=(e)=>{
        const NewUser={FirstName,LastName,Email,Password};
        e.preventDefault();
        SetFirstName("");
        SetLastName("");
        SetEmail("");
        SetPassword("");
        setHasbeenSubmitted(true);
    }
    const handelFirstName=(e)=>{
       
        SetFirstName((e.target.value));
        if(e.target.value.length<2){
            setFirstNameError("The First Name must be more than 2 character");
        }else{
            setFirstNameError("")
            }
        
        
    };
    const handelLastName=(e)=>{
        SetLastName(e.target.value);
        if (e.target.value.length<2) {
            setLastNameError("The Last Name must be more than 2 character" );
        }else{
            setLastNameError("");
        }
    }
    const handelEmail=(e)=>{
        SetEmail(e.target.value)
        {
            if(e.target.value="@"){
                setEmailError("Please Enter a valid Email")
            }else{
                setEmailError("");
            }
        }
    }
    const handelPassword=(e)=>{
      SetPassword(e.target.value)
    {
        if(e.target.value.length<8){
            setPasswordError("the Password must be more than 8 digits")
        }else{
            setPasswordError("");
        }
    }
}
    const handelConfPass=(e)=>{
        SetConfPass(e.target.value);
        if(e.target.value.length<8){
            setconfPassError("the Password must be more than 8 digits")
        
    }else if (e.target.value!=Password) {
        setconfPassError("the password should be match");
    }
        else{
            setconfPassError("");
        }
    }
    
   
 
    return(
        <>
        <form onSubmit={(e) =>e.preventDefault}>
            {
                 hasBeenSubmitted ? 
                 <h3>Thank you for submitting the form!</h3> :
                 <h3>Welcome, please submit the form.</h3> 
            }
        {/* <h3>{ formMessage() }</h3> */}
        <div>
            <lable>First Name</lable>
            <input type="text" onChange={handelFirstName}value={FirstName}/>
            {
                firstNameError ?
                <p style={{color:'red'}}>{ firstNameError }</p> :
                ''
            }
        </div>
        <div>
            <lable>Last Name</lable>
            <input type="text" onChange={handelLastName} value={LastName}/>
            {
                lastNameError?
                <p style={{color:'red'}}>{ lastNameError }</p> :
                ''
            }
        </div>
        <div>
            <lable>Email</lable>
            <input type="email" onChange={handelEmail} value={Email}/>
            {
                emailError?
                <p style={{color:'red'}}>{ emailError }</p> :
                ''
            }
        </div>
        <div>
            <lable>Password</lable>
            <input type="password" onChange={handelPassword} value={Password}/>
            {
                Password?
                <p style={{color:'red'}}>{ passwordError }</p> :
                ''
            }
        </div>
        <div>
            <lable>Confirm Password</lable>
            <input type="password" onChange={handelConfPass} value={ConfPass}/>
            {
                passwordError?
                <p style={{color:'red'}}>{ confPassError }</p> :
                ''
            }
        </div>
        <input type="submit" value="Create User" />
        </form>
        <p>First Name:{FirstName}</p>
        <p>Last Name:{LastName}</p>
        <p>Email:{Email}</p>
        </>
    );
};

export default UserForm;