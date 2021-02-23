import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import $, { css } from 'jquery';
import queryString from 'query-string';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../assets/css/style.module.css'
import logo from '../assets/img/logo.jpeg'




export default class CampaignOption extends Component{
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
    axios.get('http://localhost:5000/api/' + this.props.match.params.id)
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
          <div className={[styles['backBlue'] , 'col-md-4'].join(' ')}>
            <div className={styles.divPos}>
              <img src={logo} style={{height:155,width:92}}/>
            </div>

            <div className={styles.divPos2}>
              <p className={styles.pStyle2} style={{fontSize:12}}><strong>Some text about features</strong></p>
              <p className={styles.pStyle2}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

           


          <div className={styles.divPos5}>
                <div className="col-md-8">
                    <div style={{display: "flex"}}>
                        <Link to={"/addEvent/" + this.props.match.params.id} className={styles.iconStyle3}>Add Event</Link>
                        <Link to={"/addMessage/" + this.props.match.params.id} className={styles.iconStyle3}>Add Message</Link>
                    </div>
                    

                </div>
          </div>
      </div>
    </div>
    )
  }
}

