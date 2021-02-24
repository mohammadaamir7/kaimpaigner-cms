import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import styles from '../../assets/css/style.module.css'
import logo from './logo.jpeg'


export default class RegisterForm extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('authorization')
        
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loggedIn,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        users: []
    }
  }

  componentDidMount(){

    localStorage.removeItem('email')
    axios.get('http://kaimpaigner-cms-backend.herokuapp.com/api/listUsers')
    .then(res => {
      this.setState({users: res.data})
    })

    .catch(err => console.log("err"))
  }

onChangeName(e) {
    this.setState({
        name: e.target.value
    })
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

onChangeConfirmPassword(e) {
  this.setState({
      confirmPassword: e.target.value
  })
}

onSubmit(e){
    e.preventDefault()
    
    if(this.state.password === '' || this.state.name === '' || this.state.email === ''){
      document.userForm.classList.add('was-validated')
    }else{
      var check = false

      this.state.users.forEach(child => {
        if(child.email === this.state.email){
          check = true
        }
      })

        if(check === false){
            if(this.state.confirmPassword === this.state.password && this.state.password !== '' && this.state.name !== '' && this.state.email !== ''){
              const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            axios.post('http://kaimpaigner-cms-backend.herokuapp.com/api/registration', user)
                .then(res => console.log(res.data))
                .catch(err => console.log("err"))
                window.location = '/loginForm'
            
            }else{
              
              alert("Password and Confirm Password Missmatch...")
            }
      }else{
        alert("Email already exists..")
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

            <h1 className={styles.h1Style}>New on Kampaigner</h1>
            <p className={styles.pStyle}>Create an aacount</p>

            <div class="form-group">
              
              <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeName} placeholder="Enter Full Name" style={{width:"300px", fontSize: 12}} required/>
          
            </div>

            <div class="form-group">
              
              <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email" style={{width:"300px", fontSize: 12}} required/>
          
            </div>

            

            <div class="form-group">
      
              <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}  style={{width:"300px", fontSize: 12}} placeholder="Password" required/>
            </div>

            <div class="form-group">
              
              <input type="password" className="form-control" value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword}  style={{width:"300px", fontSize: 12}} placeholder="Confirm Password" required/>
            </div>
            
            <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Sing Up</button>
            <br/><br/>

            <p className={styles.pStyle}>Already have an account? <strong><Link className={styles.linkStyle} to='/loginForm'>Sign in</Link></strong></p>
          </form>
          </div>
          </div>
      </div>
    </div>
    )
  }
}

