import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import $, { css } from 'jquery';
import queryString from 'query-string';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../assets/css/style.module.css'
import logo from '../assets/img/logo.jpeg'




export default class Contact extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('authorization')
        
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

    this.state = {
        loggedIn,
        campaign: ''
    }
  }

  componentDidMount(){
      const { params } = this.props
      console.log("params " + params)
    axios.get('http://localhost:5000/api/' + "5fffa94237941205a4adaff2")
    .then((res) => {
        this.setState({ compaign: res.data })
        console.log("campaign state : " + this.state.compaign.name)
    })
    .catch((error) => {
        console.log(error);
  })
  }


 






  render(){

    return(

        
      <div className={styles.handleOverflow2}>

        
        
      
      <div className="row">
          <div className={[styles['backBlue'] , 'col-md-2 fixed-top'].join(' ')}>
              <div className={styles.divPosDash}>
                
                            
                  <img src={require('../assets/img/Vector.png')} style={{marginLeft:20}}/>
                  <div className={styles.borderStyle} style={{marginRight:20}}></div>
                  <br/>
                  <Link to="/dashboard" className={styles.navLink2}><img src={require('../assets/img/grid.png')} style={{marginRight:10, paddingLeft:10}} />Dashboard</Link>
                  <Link to={"/listCompaign/" + localStorage.getItem("username")} className={styles.navLink2}><img src={require('../assets/img/volume.png')} style={{marginRight:10, paddingLeft:10}} />Campaign</Link>
               </div>
           </div>

          <div className="col-md-2">

          </div>

          <div className={[styles['backGrey'] , 'col-md-10'].join(' ')} style={{backgroundColor: "#ffffff"}}>
            <br/><br/>
            <table class="table table-borderless">
                <thead>
                    <tr>
                    
                    <th scope="col" className={styles.thStyle}>Name</th>
                    <th scope="col" className={styles.thStyle}>Task</th>
                    <th scope="col" className={styles.thStyle}>Location</th>
                    <th scope="col" className={styles.thStyle}>Campaign</th>
                    <th scope="col" className={styles.thStyle}>Communication</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.hoverClass}>
                    
                        <td className={styles.dirStyle}>
                            <div style={{display: "flex"}}>
                                <div className="form-check" style={{marginTop: 5}}>
                                    
                                    <input type="checkbox" className="form-check-input"/>
                                    
                                </div>
                                <div style={{height: 35, width: 30,backgroundColor: "#d8d8d8"}}></div>

                                <div style={{marginLeft: 10,paddingTop:2}}>
                                    <h5>Jasmine Fuller</h5>
                                    <p>Jasminefuller@mail.com</p>
                                </div>
                                
                            </div>
                            
                            
                        </td>
                        <td className={styles.dirStyle}>
                            <h5>Desider</h5>
                        </td>
                        <td className={styles.dirStyle}>
                            <h5>San Fransisco boy area, USA</h5>
                        </td>

                        <td className={styles.dirStyle}>
                            <h5>Time Machine 2020</h5>
                        </td>

                        <td className={styles.dirStyle}>
                            <button className={[styles['btnStyle'] , 'btn btn-primary ml-5'].join(' ')} style={{backgroundColor:'#1663c7', borderRadius:20, fontSize:10,height: 25, width: "auto", paddingTop: 5, marginTop: 0}}>Recent</button>
                
                        </td>
                    </tr>

                    <tr className={styles.hoverClass}>
                    
                        <td className={styles.dirStyle}>
                            <div style={{display: "flex"}}>
                                <div className="form-check" style={{marginTop: 5}}>
                                    
                                    <input type="checkbox" className="form-check-input"/>
                                    
                                </div>
                                <div style={{height: 35, width: 30,backgroundColor: "#d8d8d8"}}></div>

                                <div style={{marginLeft: 10,paddingTop:2}}>
                                    <h5>Jasmine Fuller</h5>
                                    <p>Jasminefuller@mail.com</p>
                                </div>
                                
                            </div>
                            
                            
                        </td>
                        <td className={styles.dirStyle}>
                            <h5>Desider</h5>
                        </td>
                        <td className={styles.dirStyle}>
                            <h5>San Fransisco boy area, USA</h5>
                        </td>

                        <td className={styles.dirStyle}>
                            <h5>Time Machine 2020</h5>
                        </td>

                        <td className={styles.dirStyle}>
                            <button className={[styles['btnStyle'] , 'btn btn-primary ml-5'].join(' ')} style={{backgroundColor:'#6cabfc', borderRadius:20, fontSize:10,height: 25, width: "auto", paddingTop: 5, marginTop: 0}}>Upcoming</button>
                
                        </td>
                    </tr>
                    
                    
                   
                </tbody>
                </table>
          </div>

          
      </div>
    </div>
    )
  }
}
