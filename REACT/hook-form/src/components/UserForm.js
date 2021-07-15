import React,{useState} from 'react'

const UserForm=(props)=>{
    const [FirstName,SetFirstName]=useState("");
    const[LastName,SetLastName]=useState("");
    const[Email,SetEmail]=useState("");
    const[Password,SetPassword]=useState("");
    const[ConfPass,SetConfPass]=useState("");
    const createUser=(e)=>{
        e.preventDefault();
        const NewUser={FirstName,LastName,Email,Password,ConfPass};
        SetFirstName("");
        SetLastName("");
        SetEmail("");
        SetPassword("");
        SetConfPass("");
    };
    return(
        <>
        <form onSubmit={createUser}>
        <div>
            <lable>First Name</lable>
            <input type="text" onChange={(e)=>SetFirstName(e.target.value)}value={FirstName}/>
        </div>
        <div>
            <lable>Last Name</lable>
            <input type="text" onChange={(e)=>SetLastName(e.target.value)} value={LastName}/>
        </div>
        <div>
            <lable>Email</lable>
            <input type="email" onChange={(e)=>SetEmail(e.target.value)} value={Email}/>
        </div>
        <div>
            <lable>Password</lable>
            <input type="password" onChange={(e)=>SetPassword(e.target.value)} value={Password}/>
        </div>
        <div>
            <lable>Confirm Password</lable>
            <input type="password" onChange={(e)=>SetConfPass(e.target.value)} value={ConfPass}/>
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