import { Component } from "react";

class Profile extends Component {

  render() {
        /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <> 
      <p>{this.props.user.userName}</p>
      <p>{this.props.user.email}</p>
      </>
    )    
  }
};

export default Profile;
