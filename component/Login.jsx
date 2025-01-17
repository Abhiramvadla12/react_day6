import { Component } from 'react';
import './style_login.css'
class Login extends Component {
  constructor(props){
    super(props)
    //defining a state with values username, password, email
    this.state = {
      username:"",
      password:"",
      email:"",
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
         // Validation rules with updated regex
    const usernameRegex = /^[a-zA-Z0-9_ ]{3,15}$/; // 3-15 chars, alphanumeric + underscores
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // At least 8 chars, 1 letter, 1 number, 1 special character

    // Username Validation
    if (!usernameRegex.test(username)) {
      alert("Invalid Username: Use 3-15 characters (letters, numbers, or underscores).");
      return;
    }

    // Email Validation
    if (!emailRegex.test(email)) {
      alert("Invalid Email: Enter a valid email address.");
      return;
    }

    // Password Validation
    if (!passwordRegex.test(password)) {
      alert(
        "Invalid Password: Must be at least 8 characters, with at least 1 letter, 1 number, and 1 special character (@, $, !, %, *, ?, &)."
      );
      return;
    }

    // Reset state after submission
    this.setState({ username: "", password: "", email: "" });
    const obj = { username, password, email };
    console.log(obj);
    if(username!='' && password!="" && email!=''){
        //storing user details in local storage
        const local_data = JSON.parse(localStorage.getItem("login_ceredential")) || [];
        //checking whether is already exists or not
        let userFound = false;
        local_data.forEach((element,index) => {
            if(element.username==obj.username && element.password == obj.password && element.email==obj.email){
                userFound = true;
            }
        });
        if(userFound){
            alert("login successful wait for 3 seconds redirecting to home page")
            localStorage.setItem("display",JSON.stringify(obj))
            setTimeout(()=>{
                window.location.href = '../home.html'
            },3000)
        }
        else{
          console.log(local_data);
          // local_data.push(obj)
          // localStorage.setItem('login_ceredential',JSON.stringify(local_data))
          if(confirm("user not found ,do you want register or enter correct ceredentials , if you want to register click yes")){
              window.location.href = "react_day6/Register.html";
          }
          
        }
        
    }

  }
  handleChange(e){
    //on input change or form  input control
    // console.log(e.target.value)
     // Handles input changes
     console.log(this.state)
     const { name, value } = e.target;
     this.setState({ [name]: value });
    console.log(value)

  }
  render() {
    //destructing the this.state object 
    const {username,password,email} = this.state;
    // console.log(username,password,email)
    return (
      <>
        <h1>Login Form</h1>
        {/* //creating a form */}
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" placeholder="Enter your username" value={username} onChange={(e)=>this.handleChange(e)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>this.handleChange(e)}  />
          <br />
          <label htmlFor="email">Email  :  </label>
          <input type="text" name="email" id="email" placeholder="Enter your email"   value={email} onChange={(e)=>this.handleChange(e)}/>
          <br />
          <input type="submit" value="Login" id='submit' />
        </form>
      </>
    );
  }
}

export default Login;
