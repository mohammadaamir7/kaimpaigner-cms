import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";
import $, { css } from 'jquery';
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
import facebook from '../assets/img/bx_bxl-facebook(1).png'
import viber from '../assets/img/jam_viber-circle.png'
import newsletter from '../assets/img/jam_newsletter.png'
import spotify from '../assets/img/tabler_brand-spotify.png'
import youtube from '../assets/img/ant-design_youtube-outlined.png'
import bing from '../assets/img/la_blog.png'
import email from '../assets/img/line-md_email.png'
import oped from '../assets/img/align center.png'
import instagram from '../assets/img/instagram.png'
import twitter from '../assets/img/twitter.png'
import telegram from '../assets/img/tabler_brand-telegram.png'
import website from '../assets/img/gg_website.png'

export default class AddMessage extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('authorization')
        
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContentType = this.onChangeContentType.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.FBClick = this.FBClick.bind(this);
    this.ViberClick = this.ViberClick.bind(this);
    this.NewsletterClick = this.NewsletterClick.bind(this);
    this.BoostClick = this.BoostClick.bind(this);
    this.SpotifyClick = this.SpotifyClick.bind(this);
    this.YoutubeClick = this.YoutubeClick.bind(this);
    this.BingClick = this.BingClick.bind(this);
    this.EmailClick = this.EmailClick.bind(this);
    this.OPedClick = this.OPedClick.bind(this);
    this.InstagramClick = this.InstagramClick.bind(this);
    this.TwitterClick = this.TwitterClick.bind(this);
    this.TelegramClick = this.TelegramClick.bind(this);
    this.WebsiteClick = this.WebsiteClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        loggedIn,
        title: '',
        contentType: 'Election Rally',
        text: '',
        campaign: '',
        contentArray: []
    }
  }

  componentDidMount(){
    
          
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

onChangeTitle(e) {
    this.setState({
        title: e.target.value
    })
}

onChangeContentType(e) {
    this.setState({
        contentType: e.target.value
    })
}

onChangeText(e) {
    this.setState({
        text: e.target.value
    })
}

FBClick(){
  
  var check = ''
  check = this.state.contentArray[0]
   if(check === undefined){
      this.state.contentArray[0] = 'Facebook'
      $('#click1').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[0] = undefined
      $('#click1').css("border", "none")
  }
  

}

ViberClick(){
  
  var check = ''
  check = this.state.contentArray[1]
   if(check === undefined){
      this.state.contentArray[1] = 'Viber'
      $('#click2').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[1] = undefined
      $('#click2').css("border", "none")
  }

}

NewsletterClick(){
  
  var check = ''
  check = this.state.contentArray[2]
   if(check === undefined){
      this.state.contentArray[2] = 'Newsletter'
      $('#click3').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[2] = undefined
      $('#click3').css("border", "none")
  }
  
}

BoostClick(){
  
  var check = ''
  check = this.state.contentArray[3]
   if(check === undefined){
      this.state.contentArray[3] = 'Boost'
      $('#click4').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[3] = undefined
      $('#click4').css("border", "none")
  }
  
}

SpotifyClick(){
  
  var check = ''
  check = this.state.contentArray[4]
   if(check === undefined){
      this.state.contentArray[4] = 'Spotify'
      $('#click5').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[4] = undefined
      $('#click5').css("border", "none")
  }
  
}

YoutubeClick(){
  
  var check = ''
  check = this.state.contentArray[5]
   if(check === undefined){
      this.state.contentArray[5] = 'Youtube'
      $('#click6').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[5] = undefined
      $('#click6').css("border", "none")
  }
  
}

BingClick(){
  
  var check = ''
  check = this.state.contentArray[6]
   if(check === undefined){
      this.state.contentArray[6] = 'Bing'
      $('#click7').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[6] = undefined
      $('#click7').css("border", "none")
  }
  
}

EmailClick(){
  
  var check = ''
  check = this.state.contentArray[7]
   if(check === undefined){
      this.state.contentArray[7] = 'Email'
      $('#click8').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[7] = undefined
      $('#click8').css("border", "none")
  }
  
}

OPedClick(){
  
  var check = ''
  check = this.state.contentArray[8]
   if(check === undefined){
      this.state.contentArray[8] = 'Op-ed'
      $('#click9').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[8] = undefined
      $('#click9').css("border", "none")
  }
  
}

InstagramClick(){
  
  var check = ''
  check = this.state.contentArray[9]
   if(check === undefined){
      this.state.contentArray[9] = 'Instagram'
      $('#click10').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[9] = undefined
      $('#click10').css("border", "none")
  }
  
}

TwitterClick(){
  
  var check = ''
  check = this.state.contentArray[10]
   if(check === undefined){
      this.state.contentArray[10] = 'Twitter'
      $('#click11').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[10] = undefined
      $('#click11').css("border", "none")
  }
  
}

TelegramClick(){
  
  var check = ''
  check = this.state.contentArray[11]
   if(check === undefined){
      this.state.contentArray[11] = 'Telegram'
      $('#click12').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[11] = undefined
      $('#click12').css("border", "none")
  }
  
}

WebsiteClick(){
  
  var check = ''
  check = this.state.contentArray[12]
   if(check === undefined){
      this.state.contentArray[12] = 'Website'
      $('#click13').css("border", "1px solid #000000")
   }

   if(check !== undefined){
      this.state.contentArray[12] = undefined
      $('#click13').css("border", "none")
  }
  
}

onSubmit(e){
    e.preventDefault()

    var array = []
    var index = 0
  
    this.state.contentArray.forEach(element => {
      if(element !== null){
        array[index] = element
        index++
      }
    })

    this.state.contentArray = array

    if( this.state.title != ''){
      const message = {
        title: this.state.title,
        contentType: this.state.contentType,
        text: this.state.text,
        attachement: '',
        createdBy: localStorage.getItem("username"),
        contentArray: this.state.contentArray
    }


    axios.post('https://kaimpaigner-cms-backend.herokuapp.com/api/addMessage/' + this.props.match.params.id , message)
        .then(res => console.log(res.data))
        .catch(err => console.log("err"))
        window.location = '/addMessage/' + this.props.match.params.id
    
    }else{
      document.userForm.classList.add('was-validated')
      //alert("Password and Confirm Password Missmatch...")
    }

    
    
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
                  <div className={[styles['campHead'] , 'col-md-3'].join(' ')} style={{backgroundColor: "#e1eeff", height: 525, position: "fixed", top: "0"}}>
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

                  <div className={[styles['campHead'] , 'col-md-9'].join(' ')} style={{marginLeft: "28%"}}>
                  <br/>
                  <div className="container">
                    <div className="row">
                        <div className="col-md">
                           <h1>Create Daily Message</h1>
                           
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                      
                      <div className="col-md-12">
                        <form onSubmit={this.onSubmit}>
                            <div style={{display: "flex"}}>
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} placeholder="Enter Title" style={{width: "295px", fontSize:12, marginRight: 10}} required/>
                                    
                                </div>


                                <div className="form-group"> 
                                    
                                    <select className="form-control" value={this.state.contentType} onChange={this.onChangeContentType} style={{width: "295px", fontSize:12}}>
                                        <option value="Electio Rally">Election Rally</option>
                                        <option value="Speaking Opportunity">Speaking Opportunity</option>
                                        <option value="Townhall meeting">Townhall meeting</option>
                                        <option value="Retail marketing">Retail marketing</option>
                                        <option value="Press event">Press event</option>
                                        <option value="Debate">Debate</option>
                                    </select>
                                </div>

                                

                            </div>

                            <div className="form-group">
                              <div style={{display: "flex"}}>
                                <div onClick={this.FBClick} className={styles.iconBtn} id="click1" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={facebook} style={{marginRight: "5px", marginLeft: "15%"}}/>Facebook</div>
                                <div onClick={this.ViberClick} className={styles.iconBtn} id="click2" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={viber} style={{marginRight: "5px", marginLeft: "15%"}}/>Viber</div>
                                <div onClick={this.NewsletterClick} className={styles.iconBtn} id="click3" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={newsletter} style={{marginRight: "5px", marginLeft: "15%"}}/>Newsletter</div>
                                <div onClick={this.BoostClick} className={styles.iconBtn} id="click4" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={facebook} style={{marginRight: "5px", marginLeft: "15%"}}/>Boost</div>
                                
                              </div>

                              <br/>

                              <div style={{display: "flex"}}>
                                <div onClick={this.SpotifyClick} className={styles.iconBtn} id="click5" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={spotify} style={{marginRight: "15px", marginLeft: "15%"}}/>Spotify</div>
                                <div onClick={this.YoutubeClick} className={styles.iconBtn} id="click6" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={youtube} style={{marginRight: "15px", marginLeft: "15%"}}/>Youtube</div>
                                <div onClick={this.BingClick} className={styles.iconBtn} id="click7" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={bing} style={{marginRight: "5px", marginLeft: "15%"}}/>Bing</div>
                                <div onClick={this.EmailClick} className={styles.iconBtn} id="click8" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={email} style={{marginRight: "5px", marginLeft: "15%"}}/>Direct Email</div>
                                
                              </div>

                              <br/>

                              <div style={{display: "flex"}}>
                                <div onClick={this.OPedClick} className={styles.iconBtn} id="click9" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={oped} style={{marginRight: "5px", marginLeft: "15%"}}/>Op-ed</div>
                                <div onClick={this.InstagramClick} className={styles.iconBtn} id="click10" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={instagram} style={{marginRight: "5px", marginLeft: "15%"}}/>Instagram</div>
                                <div onClick={this.TwitterClick} className={styles.iconBtn} id="click11" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={twitter} style={{marginRight: "5px", marginLeft: "15%"}}/>Twitter</div>
                                <div onClick={this.TelegramClick} className={styles.iconBtn} id="click12" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={telegram} style={{marginRight: "5px", marginLeft: "15%"}}/>Telegram</div>
                                
                              </div>

                              <br/>

                              <div style={{display: "flex"}}>
                                <div onClick={this.WebsiteClick} className={styles.iconBtn} id="click13" style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "2.5%", marginRight: "2%", width: "140px", height: "55px", borderRadius: "5px"}}><img src={website} style={{marginRight: "5px", marginLeft: "15%"}}/>Website</div>
                    
                              </div>

                              
                            </div>

                            <div className="form-group">
                                    
                                    <textarea type="text" className="form-control" value={this.state.text} onChange={this.onChangeText} placeholder="Enter Text" style={{width: "95%", fontSize:12}}/>
                            </div>

                            <div class="form-group">
                              <label for="exampleFormControlFile1" style={{color: "#000000", fontWeight: "bold"}}>Attachement</label>
                              
                              <input type="file" class="form-control-file" text="Browse" id="exampleFormControlFile1"/>
                            </div>

                           
                            
                            {/* 
                            <div style={{display: "flex"}}>
                              <Button className={styles.iconBtn} style={{backgroundColor: "#ffffff", color: "#000000", border: "none", fontSize: "100%", paddingTop: "1%", marginRight: "2%", width: "150px", height: "55px"}}>Add another</Button>
                              <Button className={styles.iconBtn} style={{backgroundColor: "#ffffff", border: "none", paddingTop: "1%", marginRight: "2%", width: "50px", height: "55px"}}><img src={require('../assets/img/left.png')} style={{marginRight: "5px"}}/></Button>
                              <Button className={styles.iconBtn} style={{backgroundColor: "#ffffff", border: "none", paddingTop: "1%", marginRight: "2%", width: "50px", height: "55px"}}><img src={require('../assets/img/right.png')} style={{marginRight: "5px"}}/></Button>
                              <p style={{paddingTop: "3%"}}>1/3</p>
                              
                            </div> */}

                            <br/>

                            <div style={{display: "flex", float: "right", marginRight: "6%"}}>
                              
                                <Button variant="secondary" className={[styles['btnStyle'] , ''].join(' ')} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, color: "#a1a1a1", border: 0, marginRight: 10}}>Cancel</Button>
                                        
                                <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Create</button>
                                <br/><br/><br/>          
                            </div>
                        </form>

                        

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

