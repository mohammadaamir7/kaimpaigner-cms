import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../assets/css/style.module.css'
import { Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import logo from './logo.jpeg'

export default class ConfirmPassword extends Component{
  constructor(props){
    super(props)
    const token = localStorage.getItem('authorization')
    const username = localStorage.getItem('user_name')
    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
    
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loggedIn,
        password: '',
        confirmPassword: ''
    }
  }

onChangePassword(e) {
    this.setState({
        password: e.target.value
    })
}

onChangeConfirmPassword(e) {
  this.setState({
      confirmPassword: e.target.value
  })
}

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  })
}

onSubmit(e){
    e.preventDefault()

    if(this.state.confirmPassword === this.state.password && this.state.password !== ''){
      const user = {
        email: localStorage.getItem('email'),
        password: this.state.password
    }

    localStorage.removeItem('email')

    axios.post('https://kaimpaigner-cms-backend.herokuapp.com/api/updatePassword', user)
        .then(res => console.log(res.data))
        .catch(err => console.log("err"))
        window.location = '/loginForm'
    
    }else{
      if(this.state.confirmPassword != this.state.password){
          alert("Password and Confirm Password Missmatch...")
      }else{
        document.userForm.classList.add('was-validated')
      }
      
      
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
              <img src={logo} style={{height:155,width:92}}/>
            </div>

            <div className={styles.divPos2}>
              <p className={styles.pStyle2} style={{fontSize:12}}><strong>Some text about features</strong></p>
              <p className={styles.pStyle2}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className={styles.divPos3}>
            
          <div className="col-md-8">
          <form onSubmit={this.onSubmit} name="userForm" className="needs-validation" noValidate>

            <h1 className={styles.h1Style}>Reset password</h1>

            <div class="form-group">
              
              <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" style={{width:"300px", fontSize: 12}} required/>
          
            </div>

            <div class="form-group">
              
              <input type="password" name="confirmpassword" className="form-control" value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} placeholder="Re-type Password" style={{width:"300px", fontSize: 12}} required/>
          
            </div>
            <br/>
            <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#1663c7', borderRadius:0, fontSize:10, width:300}}>Continue</button><br/>
            <Link to={'/loginForm'} className={[styles['btnStyle'] , 'btn btn-secondary'].join(' ')} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, width:300, color: "#a1a1a1", border: 0, marginTop: 10}}>Cancel</Link>
            <br/><br/>
          </form>
          
          </div>
          </div>
      </div>
    </div>
    )
  }
}

