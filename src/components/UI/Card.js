
import "./Card.css";
const Card = (props) => {
    const classes = 'card ' + props.className;
    /* props.className are any styles received from 
    the outside (not in Card.css, but set in other 
        components and passed on to the wrapper) */
    return <div className={classes}>{props.children}</div>;
    /* props.children is built into React. 
    We need it if we want to wrap return output 
    in custom components (here: Card). 
    children is a reserved name. Its value will 
    always be the content in between the custom 
    component tags.*/
}
export default Card;