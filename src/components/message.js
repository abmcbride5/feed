import react from "react";
import User from "./user";

const Message = (props) => {
    return(
        <div className="messageContainer">
        <User user={props.user} users={props.users} />
        <p>{props.body}</p>
        </div>
    )
}

export default Message;