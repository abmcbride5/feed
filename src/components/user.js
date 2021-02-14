import react from "react";

const User = (props) => {
    return(
        <div>
            <h2>{props.users[props.user].name}</h2>
        </div>
    )
}

export default User;