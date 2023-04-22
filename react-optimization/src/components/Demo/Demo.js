import MyParagraph from './MyParagraph';

const Demo = (props) => {
    console.log("Demo Rendered");
    return <MyParagraph>{props.show ? "Even if the props don't change, the child component is re-evaluated every time the parent component is re-rendered. Of course this re-evaluation only shows up in the Real DOM if something changes, but the virtual DOM gets refreshed every time. " : ""}</MyParagraph>
}

export default Demo;