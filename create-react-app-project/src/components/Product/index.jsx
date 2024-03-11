import React from 'react'

// const Product = ({ product: { id, title, description, image } }) => {
//     // console.log("Props: ", props);
//     return (
//         <li key={id}>
//             <div> Id: {id}</div>
//             <div> Title: {title}</div>
//             <div>Description: {description}</div>
//             Image: <img src={image} alt={title} />
//         </li>
//     )
// }
const Product = ({ id, title, description, image }) => {
    // console.log("Props: ", props);
    return (
        <li key={id}>
            <div> Id: {id}</div>
            <div> Title: {title}</div>
            <div>Description: {description}</div>
            Image: <img src={image} alt={title} />
        </li>
    )
}


export default Product