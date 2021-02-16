import react from "react";
import Message from './message';

const Thread = (props) => {
    // Displays threads along with calling the message component to display
    // messages.
    return(
        <div className="threadContainer">
            <h1 className="threadHeader">{props.title}</h1>
            {props.messages.map((message) => {return (<Message body={message.body} user={message.user} users={props.users} />)})}
        </div>
    );
}

export default Thread;