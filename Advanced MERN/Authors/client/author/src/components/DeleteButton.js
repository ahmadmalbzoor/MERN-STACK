import axios from 'axios';
const DeleteButton = (props) => {
    const { userid, successCallback } = props;
    const deletAuthorr = (e) => {
        console.log(e);
        axios.delete('http://localhost:8000/api/author/' + userid)
            .then(res => {
                console.log(userid)
                successCallback();
            })
    }
    return (
        <div>
            <button onClick={deletAuthorr} >Delete</button>
        </div>
    )
}

export default DeleteButton
