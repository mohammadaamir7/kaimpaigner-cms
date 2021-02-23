import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../assets/css/style.module.css'





export default class CampaignOverview extends Component{
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
        this.setState({ campaign: res.data })
        
    })
    .catch((error) => {
        console.log(error);
  })
  
  }

  logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('authorization')
    window.location = '/loginForm'
}
 

deleteCompaign(id){
  axios.delete('http://localhost:5000/api/'+id)
      .then(response =>  console.log(response.data));

  
window.location = '/listCompaign/' + localStorage.getItem('username')
  
}




  render(){

    if(!this.state.loggedIn){
      return <Redirect to="/loginForm" />
    }


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
                <div className="row" style={{backgroundColor: '#ffffff'}}>
                    <div className="col-md-12">
                        <div style={{display: 'flex', float: 'right'}}>
                            <p className={styles.userName}>{localStorage.getItem('username')}</p>
                            <button id="logout" onClick={this.logout} className={styles.LogoutBtn}>Logout</button>
                        </div>
                    </div>
                </div>
                <br/>

              <div className="row"> 
                  <div className={[styles['campHead'] , 'col-md-3'].join(' ')} style={{backgroundColor: "#e1eeff", height: 525, position: "fixed", top: "0"}}>
                    <br/>
                    <h3>Campaign Management System</h3><br/>
                    <h5>{this.state.campaign.name}</h5>
                      <Link to={"/campaignOverview/" + this.props.match.params.id} className={styles.navLink3}><img src={require('../assets/img/gridblack.png')} style={{marginRight:10, paddingLeft:10}} />Overview</Link>
                      <Link to={"/addMessage/" + this.props.match.params.id} className={styles.navLink3}><img src={require('../assets/img/at sign.png')} style={{marginRight:10, paddingLeft:10}} />Daily Message</Link>
                      <Link to={"/messageView/" + this.props.match.params.id} className={styles.navLink3}><img src={require('../assets/img/Message.png')} style={{marginRight:10, paddingLeft:10}} />Message</Link>
                      <Link to={"/addEvent/" + this.props.match.params.id} className={styles.navLink3}><img src={require('../assets/img/uil_process.png')} style={{marginRight:10, paddingLeft:10}} />Process</Link>
                      <Link to={"/updateCompaign/" + this.props.match.params.id} className={styles.navLink3}><img src={require('../assets/img/gridblack.png')} style={{marginRight:10, paddingLeft:10}} />Update</Link>
                      <button onClick={() => { this.deleteCompaign(this.props.match.params.id) }} className={styles.navbutton}><img src={require('../assets/img/gridblack.png')} style={{marginRight:10, paddingLeft: 0}} />Delete</button>

                      <Link to={"/listCompaign/" + localStorage.getItem('username')} className={styles.navLink4} style={{position:"absolute", top: "90%"}}><img src={require('../assets/img/mdi_arrow_back_ios.png')} style={{marginRight:10, paddingLeft:10}} />Back</Link>
                      
                  </div>

                  <div className="col-md-3">

                  </div>  

                  <div className={[styles['campHead'] , 'col-md-9'].join(' ')} style={{marginLeft: "30%"}}>
                  <br/>
                    <div className="row">
                        <div className="col-md">
                           <h1>Campaign Overview</h1>
                           <br/>

                           {/* <div style={{border: "1px solid #000000", height: 150, width: "60%"}}>
                                Campaign Image
                           </div> */}
                           <img src={require('../assets/img/test_image.jpg')} style={{height: "200px", width: "90%"}}/>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                      <div className="col-md-8">
                          <p>{this.state.campaign.description}</p>
                          
                  
                      </div>
                      
                      <div className="col-md-4">
                          <div style={{display: "flex"}}>
                              <img src={require('../assets/img/Calendar.png')}/>
                              <p style={{marginLeft: 10, paddingTop: 10}}>{new Date(this.state.campaign.creationDate).getFullYear()}-{new Date(this.state.campaign.creationDate).getMonth() + 1}-{new Date(this.state.campaign.creationDate).getDate()}</p>
                          </div>
                          <br/>
                          <div style={{display: "flex"}}>
                              <img src={require('../assets/img/Time Square.png')}/>
                              <p style={{marginLeft: 10, paddingTop: 10}}>{new Date(this.state.campaign.creationDate).getHours()} : {new Date(this.state.campaign.creationDate).getMinutes()}</p>
                          </div>
                      </div>
                      
                    </div>
                      

                     
                  </div>
              </div>
          </div>

          
      </div>
    </div>
    )
  }
}
