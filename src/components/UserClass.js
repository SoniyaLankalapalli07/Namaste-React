import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0,
            count2: 2,
        };
    }
    componentDidMount(){
        console.log("child component did mount")
    }

    componentDidUpdate(){
        console.log("did update");
    }

    componentWillUnmount(){
        console.log("will unmount");
    }
    render(){
    const {name, location}= this.props;
    const {count, count2} = this.state;
    return <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            this.setState({
                count: count + 1,
                // count: this.state.count + 1,
            })
        }}>Increase Count</button>
         <h2>Name: {name}</h2>
         <h3>Location: {location}</h3>
    </div>
    }
}

export default UserClass;