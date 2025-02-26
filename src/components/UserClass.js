import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)

        //creating state variable
        this.state = {
            // count : 0,
            // count2 : 2,
            userInfo:{ //this is default value like how we used to pass in useState
                name : "Satyam",
                location : "Pune",
                contact : "@pwahii11",
                avatar_url : "https://avatars.githubusercontent.com/u/56189297?v=4",
            }
        };
    }

    //componentDidMount is called after the component is rendered
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/pilot-satyam");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log(json);
    }

    render(){
        // const{name} = this.props;
        // const{count,count2} = this.state;
        const{name,login,avatar_url} = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                {/* <h3>Count: {count}</h3>
                <h3>Count2 : {count2}</h3> */}
                {/* <button 
                onClick={()=>{
                    //NEVER UPDATE STATE VARIABLES DIRECTLY, HENCE use setState
                    this.setState({
                        count : count + 1, 
                    });
                }}>
                    Count
                </button> */}
                <img src={avatar_url} alt="avatar" />
                <h3>Name: {name}</h3>
                <h3>Location: Pune</h3>
                <h3>Username: {login}</h3>
                <h3>Contact: @pwahii11</h3>
            </div>
        );
    };
}

export default UserClass;

/**
 * here first our constructor is called with some dummy data and then our render method is called
 * with dummy data of image, name, location and contact and then finally api call is made from 
 * componentDidMount() and we 
 * update our state variable with the data fetched from api and then render method is called again
 */

/**
 * Mounting cycle was finished when our component was rendered once(with dummy data) and then our 
 * Updating cycle is called where we have 'setState' and then setState updates the state variable
 * and when the state variable is updated React triggers the render once again but this time state
 * variable is updated with changed value, now React will calcultate the diff and update DOM with
 * new value and hence our values from api will get updated.
 * 
 * --After this componentUnmount() is called if we move to new page since that component is not needed.
 * and it will only get called if we move to new page.
 * 
 * --componentDidMount() can be called multiple times as we can think as of useEffect, like here
 * useEffect(() => {
 *  //API call
 * },[count1,count2])  since multiple values can be passed hence this is made as an array.
 * 
 * so in general this followed: 
 * 1)Mounting   (componentDidMount())
 * 2)Updating   (componentDidUpdate())
 * 3)UnMounting (componentWillUnmount())
 * 
 */