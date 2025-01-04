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
          console.log(local_data);
          local_data.push(obj)
          localStorage.setItem('login_ceredential',JSON.stringify(local_data)) 
          // alert("successfully registered!!!!!");
          // window.location.href="../index.html"
          function generateOtp() {
            let otp = '';
            for (let i = 0; i < 4; i++) {
                otp += Math.floor(Math.random() * 10); // Generate a single digit and append to the OTP
            }
            return otp;
        }
        
        const otp = generateOtp();
        localStorage.setItem("otp", JSON.stringify(otp)); // Store the generated OTP in localStorage
        //redirecting to otp page
        window.location.href = "react_day6/otp.html";
        
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
          <input type="submit" value="Register" id='submit'/>
        </form>
        
      </>
    )
  }
}
