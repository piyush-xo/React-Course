import React from "react";

// function Greet(){
//     return <h1>Welcome Piyush</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome {props.name} {props.surname} from Functional Component</h1>
            {props.children}
        </div>
    )
}

// const Greet = () => {
//     return React.createElement(
//         'div',
//         {id:'hello, className:'dummyClass'},
//         React.createElement('h1', null, 'Welcome Piyush Functional Component')
//     )
// }


export default Greet