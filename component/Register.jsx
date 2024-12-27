import  { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:"",
            email : "",
        }
    }
    handleSubmit(e){
        //this function involes when form is submitted
        e.preventDefault();
        const { username, password, email } = this.state;
  
        // console.log(obj)
        if(username=='' || password==''||email==''){
            alert("please enter values in all fields and then submit");
            return;
        }
        
      // Reset state after submission
      this.setState({ username: "", password: "", email: "" });
      const obj = { username, password, email };
      console.log(obj);
      if(username!='' && password!="" && email!=''){
          //storing user details in local storage
          const local_data = JSON.parse(localStorage.getItem("login_ceredential")) || [];
          console.log(local_data);
          local_data.push(obj)
          localStorage.setItem('login_ceredential',JSON.stringify(local_data)) 
          alert("successfully registered!!!!!");
          window.location.href="../index.html"
      }
  
    }
    handleChange(e){
        //on input change or form  input control
        // console.log(e.target.value)
         // Handles input changes
         const { name, value } = e.target;
         this.setState({ [name]: value });
        console.log(value)
    
      }
  render() {
    const {username,password,email} = this.state
    return (
      <>
        <h1>Register form</h1>
         <form onSubmit={(e)=> this.handleSubmit(e)}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" placeholder="Enter your username" value={username} onChange={(e)=>this.handleChange(e)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" placeholder="Enter your password" value={password}  onChange={(e)=>this.handleChange(e)} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" placeholder="Enter your email"   value={email} onChange={(e)=>this.handleChange(e)}/>
          <br />
          <input type="submit" value="Register" />
        </form>
        
      </>
    )
  }
}
