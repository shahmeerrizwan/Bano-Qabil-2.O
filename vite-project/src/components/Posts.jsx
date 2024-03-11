import React, { Component, useContext } from 'react'
import { Spinner, Alert, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context';
import PropTypes from 'prop-types';


// const Posts = ({ posts }) => {
//     return posts.map((post) => {
//         return <Container>
//             <Row>
//                 <Col><Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src="holder.js/100px180" />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>

//                         </Card.Text>
//                         <Button variant="primary">View Details</Button>
//                     </Card.Body>
//                 </Card></Col>
//             </Row>

//         </Container>

//     })
// }
// const Posts = (props) => {
//     const { posts, name = "ali haider" } = props
//     const state = useContext(UserContext);
//     console.log("state: ", state, props);

//     const navigate = useNavigate()
//     return <Container>
//         <h1>{name}</h1>
//         <input type="text" value={state.user} onChange={(e) => state.setUser(e.target.value)} />
//         <Row>{posts.map((post) => {
//             return <Col key={post.id} xs={4}><Card className='w-100'>
//                 <Card.Img variant="top" src="holder.js/100px180" alt={post.id} />
//                 <Card.Body>
//                     <Card.Title>{post.title}</Card.Title>
//                     <Card.Text>
//                         {post.body}
//                     </Card.Text>
//                     <Button variant="primary" onClick={() => navigate(`/posts/${post.id}`)}>View Details</Button>
//                     <Link to={`/posts/${post.id}?name=ali&age=24`}>View Details</Link>
//                 </Card.Body>
//             </Card></Col>

//         })} </Row></Container>
// }

class Posts extends Component {
    render() {
        return (
            <div>
                <p> Name: {this.props.name} </p>
                HTML: {this.props.html}
                <p>EyeColor: {this.props.eyeColor}</p>
                <p>Age : {this.props.age} </p>
            </div>
        );
    }
}

// Posts.defaultProps = {
//     name: "Rahul",
//     eyeColor: "deepblue",
//     age: "45",
// };


Posts.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.

    eyeColor: PropTypes.string,
    // age: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    posts: PropTypes.array,
    html: PropTypes.element
    // optionalArray: PropTypes.array,
    // optionalBigInt: PropTypes.bigint,
    // optionalBool: PropTypes.bool,
    // optionalFunc: PropTypes.func,
    // optionalNumber: PropTypes.number,
    // optionalObject: PropTypes.object,
    // optionalString: PropTypes.string,
    // optionalSymbol: PropTypes.symbol,

    // // Anything that can be rendered: numbers, strings, elements or an array
    // // (or fragment) containing these types.
    // // see https://reactjs.org/docs/rendering-elements.html for more info
    // optionalNode: PropTypes.node,

    // // A React element (ie. <MyComponent />).
    // optionalElement: PropTypes.element,

    // // A React element type (eg. MyComponent).
    // // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
    // // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
    // optionalElementType: PropTypes.elementType,

    // // You can also declare that a prop is an instance of a class. This uses
    // // JS's instanceof operator.
    // optionalMessage: PropTypes.instanceOf(Message),

    // // You can ensure that your prop is limited to specific values by treating
    // // it as an enum.
    // optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // // An object that could be one of many types
    // optionalUnion: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.number,
    //     PropTypes.instanceOf(Message)
    // ]),

    // // An array of a certain type
    // optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // // An object with property values of a certain type
    // optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // // You can chain any of the above with `isRequired` to make sure a warning
    // // is shown if the prop isn't provided.

    // // An object taking on a particular shape
    // optionalObjectWithShape: PropTypes.shape({
    //     optionalProperty: PropTypes.string,
    //     requiredProperty: PropTypes.number.isRequired
    // }),

    // // An object with warnings on extra properties
    // optionalObjectWithStrictShape: PropTypes.exact({
    //     optionalProperty: PropTypes.string,
    //     requiredProperty: PropTypes.number.isRequired
    // }),

    // requiredFunc: PropTypes.func.isRequired,

    // // A value of any data type
    // requiredAny: PropTypes.any.isRequired,

    // // You can also specify a custom validator. It should return an Error
    // // object if the validation fails. Don't `console.warn` or throw, as this
    // // won't work inside `oneOfType`.
    // customProp: function (props, propName, componentName) {
    //     if (!/matchme/.test(props[propName])) {
    //         return new Error(
    //             'Invalid prop `' + propName + '` supplied to' +
    //             ' `' + componentName + '`. Validation failed.'
    //         );
    //     }
    // },

    // // You can also supply a custom validator to `arrayOf` and `objectOf`.
    // // It should return an Error object if the validation fails. The validator
    // // will be called for each key in the array or object. The first two
    // // arguments of the validator are the array or object itself, and the
    // // current item's key.
    // customArrayProp: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
    //     if (!/matchme/.test(propValue[key])) {
    //         return new Error(
    //             'Invalid prop `' + propFullName + '` supplied to' +
    //             ' `' + componentName + '`. Validation failed.'
    //         );
    //     }
    // })
};

export default Posts