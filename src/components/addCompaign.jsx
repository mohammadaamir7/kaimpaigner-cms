import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link, Redirect } from 'react-router-dom';
import styles from '../assets/css/style.module.css'
import logo from '../assets/img/logo.jpeg'

export default class addCompaign extends Component{
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCreationDate = this.onChangeCreationDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        const token = localStorage.getItem('authorization')
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }

        this.state = {
            loggedIn,
            name: '',
            description: '',
            creationDate: new Date()
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeCreationDate(date) {
        this.setState({
            creationDate: date
        })
    }

    onSubmit(e){
        e.preventDefault()

        if(this.state.description === '' || this.state.name === ''){
            document.userForm.classList.add('was-validated')
        }else{
            const compaign = {
                name: this.state.name,
                description: this.state.description,
                createdBy: localStorage.getItem('username'),
                creationDate: this.state.creationDate
            }
    
            axios.post('http://localhost:5000/api/addCompaign', compaign)
                .then(res => console.log(res.data))
                .catch(err => console.log("err" + err))
    
            return window.location = '/addCampaign'
        }

        
    }

    render(){
        

        if(!this.state.loggedIn){
            return <Redirect to="/loginForm" />
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
          <h1 className={styles.h1Style}>Add New Campaign</h1>

            <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                    <div className="form-group">
                        <label style={{fontSize:12}}>Campaign Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} placeholder="Enter Campaign Name" style={{width:"300px", fontSize: 12}} required/>
                        
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:12}}>Description</label>
                        <textarea type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} placeholder="Description" style={{width:"300px", fontSize: 12}} required/>
                    </div>

                    <div className="form-group">
                        <label style={{fontSize:12}}>Creation Date: </label>
                        <div>
                            <DatePicker
                            className='form-control'
                            selected={this.state.creationDate}
                            onChange={this.onChangeCreationDate}
                            style={{width: "300px", fontSize:12}}
                            />
                        </div>
                    </div>
                    
                    <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Add Campaign</button>
                    <br/>
                </form>
                <br/>
                <div style={{display: 'flex'}}>
                    <Link to={"/dashboard"} className={[styles['btnStyle4'] , 'btn btn-primary'].join(' ')}>Dashboard</Link>
                    <Link to={"/listCompaign/" + localStorage.getItem('username')} className={[styles['btnStyle4'] , 'btn btn-primary'].join(' ')}>Campaigns</Link>
                </div>

          </div>
          </div>
      </div>
    </div>
        )
    }
}