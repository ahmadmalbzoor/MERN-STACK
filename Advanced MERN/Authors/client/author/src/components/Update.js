// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import AuthorForm from './AuthorForm'
// const Update = (props) => {
//     const { id } = props;
//     const [author, setAuthor] = useState();
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/author/' + id)
//             .then(res => {
//                 setAuthor(res.data);
//             })
//     }, [])}
//     const updateAuthor = (author,id) => {
//         axios.put('http://localhost:8000/api/author/' + id, author)
//             .then(res => console.log(res));
//     return (
//         <div>
//              <h1>Update a Author</h1>
//             <AuthorForm onClick={updateAuthor} initialName="" />
//         </div>
//     )
// }

// export default Update
