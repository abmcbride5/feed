import react from "react";
import User from "./user";

const Message = (props) => {
    // message component displays messages along with calling user component
    // to diplay user with corresponding message.
    return(
        <div className="messageContainer">
        <User user={props.user} users={props.users} />
        <p>{props.body}</p>
        </div>
    );
}

export default Message;