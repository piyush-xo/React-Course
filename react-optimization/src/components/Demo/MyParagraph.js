const MyParagraph = (props) => {
    console.log("MyParagraph rendered");
    return <p>{props.children}</p>
};

export default MyParagraph;