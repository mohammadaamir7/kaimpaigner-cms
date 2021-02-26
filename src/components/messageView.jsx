import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../assets/css/style.module.css';
import gridblack from '../assets/img/gridblack.png'
import atsign from '../assets/img/at sign.png'
import message from '../assets/img/Message.png'
import uil from '../assets/img/uil_process.png'
import arrow from '../assets/img/mdi_arrow_back_ios.png'
import grid from '../assets/img/grid.png'
import volume from '../assets/img/volume.png'
import Vector from '../assets/img/Vector.png'
import del from '../assets/img/delete.png'
import edit from '../assets/img/edit.png'

const Message = props => (
    <div className={[styles['whiteDiv5'] , 'row'].join(' ')}>
        <div className="col-md-12" style={{paddingTop: "5%", paddingBottom: "4%"}}>
        <div className="row" style={{marginLeft: "0.3%"}}>
            <div style={{display: "flex"}}>
                <h5 className={styles.msgViewHd}>Message Title</h5>
                <div style={{marginLeft: "auto"}}>
                    <Link to={"/updateMessage/" + props.message.campaign_id + '/' + props.message._id} className={styles.UDstyle}><img src={edit}/></Link>
                    <button onClick={() => { props.deleteMessage(props.message._id) }} className={styles.UDstyle}><img src={del}/></button>
                                  
                </div>
            </div>
        </div> 

        <div className="row" style={{marginLeft: "0"}}>
            <div className="col-md">
                <div className="row">
                    <div className={[styles['msgName'] , 'col-md-2'].join(' ')}>
                        <p className={styles.msgNamePara}>{props.message.Title}</p>
                    </div>

                    <div className="col-md-10">
                        <p className={styles.msgPara} style={{marginRight: "0"}}>{props.message.Text}</p>
                    </div>
                </div>

                <div className="row">
                    
                    
                    <div className="col-md-12">
                        {props.message.contentArray.map((key) => (
                            
                            <p className={styles.contentPara} style={{}}>{key}</p>    
                        ))}

                    </div>
                </div>
            </div>
        </div>
            
        </div>

        

    </div>    
    
)

export default class MessageView extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('authorization')
        
        this.deleteMessage = this.deleteMessage.bind(this)

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

    this.state = {
        loggedIn,
        messages: [],
        campaign: {}
    }
  }

  componentDidMount(){
      
    axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/listMessage/' + this.props.match.params.id)
    .then((res) => {
        this.setState({ messages: res.data })
        console.log("Messages : " + this.state.messages)
    })
    .catch((error) => {
        console.log(error);
  })

  axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/' + this.props.match.params.id)
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

  deleteMessage(id) {
    axios.delete('https://kaimpaigner-cms-backend.herokuapp.com/api/deleteMessage/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      messages: this.state.messages.filter(el => el._id !== id)
    })
  }

messageList() {
    return this.state.messages.map(currentMessage => {
      return <Message message={currentMessage} deleteMessage={this.deleteMessage} key={currentMessage._id}/>;
    })
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
                
                            
                  <img src={Vector} style={{marginLeft:20}}/>
                  <div className={styles.borderStyle} style={{marginRight:20}}></div>
                  <br/>
                  <Link to="/dashboard" className={styles.navLink2}><img src={grid} style={{marginRight:10, paddingLeft:10}} />Dashboard</Link>
                  <Link to={"/listCompaign/" + localStorage.getItem("username")} className={styles.navLink2}><img src={volume} style={{marginRight:10, paddingLeft:10}} />Campaign</Link>
               </div>
           </div>

          <div className="col-md-2">

          </div>

          <div className={[styles['backGrey'] , 'col-md-10'].join(' ')}>
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
                  <div className={[styles['campHead2'] , 'col-md-3'].join(' ')} style={{backgroundColor: "#e1eeff", height: 525, position: "fixed", top: "0"}}>
                    <br/>
                    <h3>Campaign Management System</h3><br/>
                    <h5>{this.state.campaign.name}</h5>
                      <Link to={"/campaignOverview/" + this.props.match.params.id} className={styles.navLink3}><img src={gridblack} style={{marginRight:10, paddingLeft:10}} />Overview</Link>
                      <Link to={"/addMessage/" + this.props.match.params.id} className={styles.navLink3}><img src={atsign} style={{marginRight:10, paddingLeft:10}} />Daily Message</Link>
                      <Link to={"/messageView/" + this.props.match.params.id} className={styles.navLink3}><img src={message} style={{marginRight:10, paddingLeft:10}} />Message</Link>
                      <Link to={"/addEvent/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Process</Link>

                      <Link to={"/listCompaign/" + localStorage.getItem("username")} className={styles.navLink4} style={{position:"absolute", top: "90%"}}><img src={arrow} style={{marginRight:10, paddingLeft:10}} />Back</Link>
                  </div>

                  <div className="col-md-3">

                  </div>

                  <div className={[styles['campHead2'] , 'col-md-9'].join(' ')} style={{marginLeft: "28%"}}>
                  <br/>
                  <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div style={{display: "flex"}}>
                                <h1>Daily Message</h1>
                                <Link to={"/addMessage/" + this.props.match.params.id} className={[styles['btnStyle2'] , 'btn btn-primary'].join(' ')}>Create Daily Message</Link>
                            </div>
                           
                           
                        </div>
                    </div>
                    

                        {this.messageList()}

                        
                    
                      
                    
                  </div>
                      

                     
                  </div>
              </div>
          </div>

          
      </div>
    </div>
    )
  }
}

