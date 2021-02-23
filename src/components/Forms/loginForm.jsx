import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../assets/css/style.module.css'


export default class LoginForm extends Component{
  
  constructor(props){
    super(props)
    
    const token = localStorage.getItem('authorization')
    let loggedIn = true
      if(token == null){
        loggedIn = false
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loggedIn,
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  // componentDidMount(){
  //   let token = localStorage.getItem("authorization");
  //     if (token === null) {
  //       localStorage.setItem("authorization", "");
  //       token = "";
  //     }
  //     const tokenRes = await axios.post(
  //       "http://localhost:5000/api/IsValidToken",
  //       { 
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({authToken: token})
  //      }
  //     );
  //     if (tokenRes.data) {
  //       const userRes = await axios.get("http://localhost:5000/api/loggedUser", {
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({authToken: token})
  //       });
  //       this.setState({
  //         token: token,
  //         user: userRes.data,
  //       });
  //     }
  // }

componentDidMount(){
  localStorage.removeItem('email')
}

onChangeEmail(e) {
    this.setState({
        email: e.target.value
    })
}

onChangePassword(e) {
    this.setState({
        password: e.target.value
    })
}


onSubmit(e){
    e.preventDefault()

    if(this.state.password != '' && this.state.email != ''){
      const user = {
        email: this.state.email,
        password: this.state.password
    }

    
    axios.post('http://localhost:5000/api/login', user)
        .then(res => {
          localStorage.setItem("authorization", res.data.token)
          localStorage.setItem('username', res.data.user.name)
          this.setState({
            loggedIn: true
          })

          //window.location = '/dashboard'
          
        })
        .catch(err => {
          alert("Invalid email or password.")
          console.log("err")
        })
        
    
    }else{
      document.userForm.classList.add('was-validated')
      //alert("Password and Confirm Password Missmatch...")
    }

    
    
}



  render(){
    if(this.state.loggedIn){
      return <Redirect to="/dashboard" />
    }

    return(
      <div className={styles.handleOverflow}>
      
      <div className="row">
          <div className={[styles['backBlue'] , 'col-md-4'].join(' ')}>
            <div className={styles.divPos}>
            <img src={require('./logo.jpeg')} style={{height:155,width:92}}/>
            </div>

            <div className={styles.divPos2}>
              <p className={styles.pStyle2} style={{fontSize:12}}><strong>Some text about features</strong></p>
              <p className={styles.pStyle2}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={styles.divPos3}>
          <div className="col-md-8">
          <form onSubmit={this.onSubmit} name="userForm" className="needs-validation" noValidate>

            <h1 className={styles.h1Style}>Welcome Back !</h1>
            <p className={styles.pStyle}>Sign in to continue</p>

            

            <div class="form-group">
              
              <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email" style={{width:"300px", fontSize: 12}} required/>
          
            </div>

            

            <div class="form-group">
      
              <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}  style={{width:"300px", fontSize: 12}} placeholder="Password" required/>
            </div>

           
            
            <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Sign in</button>
            <br/><br/>

            
          </form>
          <br/>
          
          <p className={styles.pStyle}>Dont't have an account? <strong><Link className={styles.linkStyle} to='/'>Sign up</Link></strong></p>
          <Link className={styles.linkStyle} to='/forgotPassword' style={{color:"grey", fontSize:12}}>Forget Password</Link>

          </div>
          </div>
      </div>
    </div>
    )
  }
}

