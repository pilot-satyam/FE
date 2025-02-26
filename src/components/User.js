const User = (props) =>{
    return (
        <div className="user-card">
            <h3>Name: {props.name}</h3>
            <h3>Location: Pune</h3>
            <h3>Contact: @pwahii11</h3>
        </div>
    )
}

export default User;