import React from 'react';
import MyParagraph from './MyParagraph';

const Demo = (props) => {
    console.log("Demo Rendered");
    return <MyParagraph>{props.show ? "Even if the props don't change, the child component is re-evaluated every time the parent component is re-rendered. Of course this re-evaluation only shows up in the Real DOM if something changes, but the virtual DOM gets refreshed every time. " : ""}</MyParagraph>
}

export default React.memo(Demo);
//Memoization is still a little expensive to do because at every re-render, react has to compare the props with previous props.