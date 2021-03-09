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
import DatePicker from 'react-datepicker';


export default class UpdateMessage extends Component{
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
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
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
        message: '',
        contentArray: [],
        startDate: new Date(),
        endDate: new Date(),
    }
  }

  componentDidMount(){
    
          
    axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/' + this.props.match.params.id_1)
    .then((res) => {
        this.setState({ campaign: res.data })

    })
    .catch((error) => {
        console.log(error);
  })

  axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/findMessage/' + this.props.match.params.id_2)
    .then((res) => {
        this.setState({ message: res.data })

        this.setState({title: this.state.message.Title})
        this.setState({text: this.state.message.Text})
        this.setState({contentType: this.state.message.content_type})
        this.setState({startDate: new Date(this.state.message.Start_Date)})
        this.setState({endDate: new Date(this.state.message.End_Date)})
        this.state.contentArray = this.state.message.contentArray
        
        this.state.message.contentArray.forEach(child => {
          
          if(child !== undefined){
            if(child === "Facebook"){
            $("#click1").css("border", "1px solid #000000")
          }

          if(child === "Viber"){
            $("#click2").css("border", "1px solid #000000")
          }

          if(child === "Newsletter"){
            $("#click3").css("border", "1px solid #000000")
          }

          if(child === "Boost"){
            $("#click4").css("border", "1px solid #000000")
          }

          if(child === "Spotify"){
            $("#click5").css("border", "1px solid #000000")
          }

          if(child === "Youtube"){
            $("#click6").css("border", "1px solid #000000")
          }

          if(child === "Bing"){
            $("#click7").css("border", "1px solid #000000")
          }

          if(child === "Email"){
            $("#click8").css("border", "1px solid #000000")
          }

          if(child === "Op-ed"){
            $("#click9").css("border", "1px solid #000000")
          }

          if(child === "Instagram"){
            $("#click10").css("border", "1px solid #000000")
          }

          if(child === "Twitter"){
            $("#click11").css("border", "1px solid #000000")
          }

          if(child === "Telegram"){
            $("#click12").css("border", "1px solid #000000")
          }

          if(child === "Website"){
            $("#click13").css("border", "1px solid #000000")
          }

        }
      })

    })
    .catch((error) => {
        console.log(error);
  })

  
  
    
}

findElement(entry, channel){
  return entry === channel
}


onChangeStartDate(date) {
  this.setState({
      startDate: date
  })
}

onChangeEndDate(date) {
  this.setState({
      endDate: date
  })
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

logout(){
  localStorage.removeItem('username')
  localStorage.removeItem('authorization')
  window.location = '/loginForm'
}

FBClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Facebook"){
      check = 'Facebook';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click1').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[0] = 'Facebook'
      $('#click1').css("border", "1px solid #000000")
  }

}

ViberClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Viber"){
      check = 'Viber';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click2').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[1] = 'Viber'
      $('#click2').css("border", "1px solid #000000")
  }

}

NewsletterClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Newsletter"){
      check = 'Newsletter';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click3').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[2] = 'Newsletter'
      $('#click3').css("border", "1px solid #000000")
  }
  
}

BoostClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Boost"){
      check = 'Boost';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click4').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[3] = 'Boost'
      $('#click4').css("border", "1px solid #000000")
  }
  
}

SpotifyClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Spotify"){
      check = 'Spotify';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click5').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[4] = 'Spotify'
      $('#click5').css("border", "1px solid #000000")
  }
  
}

YoutubeClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Youtube"){
      check = 'Youtube';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click6').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[5] = 'Youtube'
      $('#click6').css("border", "1px solid #000000")
  }

    
  
}

BingClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Bing"){
      check = 'Bing';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click7').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[6] = 'Bing'
      $('#click7').css("border", "1px solid #000000")
  }
  
}

EmailClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Email"){
      check = 'Email';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click8').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[7] = 'Email'
      $('#click8').css("border", "1px solid #000000")
  }
  
}

OPedClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Op-ed"){
      check = 'Op-ed';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click9').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[8] = 'Op-ed'
      $('#click9').css("border", "1px solid #000000")
  }
  
}

InstagramClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Instagram"){
      check = 'Instagram';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click10').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[9] = 'Instagram'
      $('#click10').css("border", "1px solid #000000")
  }
  
}

TwitterClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Twitter"){
      check = 'Twitter';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click11').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[10] = 'Twitter'
      $('#click11').css("border", "1px solid #000000")
  }
  
}

TelegramClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Telegram"){
      check = 'Telegram';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click12').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[11] = 'Telegram'
      $('#click12').css("border", "1px solid #000000")
  }
  
}

WebsiteClick(){
  
  var check = ''
  for (let index = 0; index < this.state.contentArray.length; index++) {
    if(this.state.contentArray[index] === "Website"){
      check = 'Website';
      this.state.contentArray[index] = undefined
    }
  }
  
  if(check !== undefined){
    $('#click13').css("border", "none")
  }

  if(check === undefined || check === ''){
      this.state.contentArray[12] = 'Website'
      $('#click13').css("border", "1px solid #000000")
  }
  
}

onSubmit(e){
    e.preventDefault()

    var array = []
    var index = 0
  
    this.state.contentArray.forEach(element => {
      if(element !== null && element !== undefined){
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
        contentArray: this.state.contentArray,
        startDate: this.state.startDate,
        endDate: this.state.endDate
    }


    axios.post('https://kaimpaigner-cms-backend.herokuapp.com/api/updateMessage/' + this.props.match.params.id_1 + '/' + this.props.match.params.id_2 , message)
        .then(res => console.log(res.data))
        .catch(err => console.log("err"))
        window.location = '/messageView/' + this.props.match.params.id_1
    
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
        <br/><br/>
        
        
      
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
                    <h3>Campaign Managemen System</h3><br/>
                    <h5>{this.state.campaign.name}</h5>
                      <Link to={"/campaignOverview/" + this.props.match.params.id_1} className={styles.navLink3}><img src={gridblack} style={{marginRight:10, paddingLeft:10}} />Overview</Link>
                      <Link to={"/addMessage/" + this.props.match.params.id_1} className={styles.navLink3}><img src={atsign} style={{marginRight:10, paddingLeft:10}} />Daily Message</Link>
                      <Link to={"/messageView/" + this.props.match.params.id_1} className={styles.navLink3}><img src={message} style={{marginRight:10, paddingLeft:10}} />Message</Link>
                      <Link to={"/addEvent/" + this.props.match.params.id_1} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Process</Link>

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

                            <br/>

                            <div style={{display: "flex"}}>
                              <div className="form-group">
                                  <label style={{fontSize:12}}>Start Date: </label>
                                  <div>
                                      <DatePicker
                                      className="form-control"
                                      selected={this.state.startDate}
                                      onChange={this.onChangeStartDate}
                                      style={{width: "300px", fontSize:12}}
                                      />
                                  </div>
                              </div>

                              <div className="form-group">
                                  <label style={{fontSize:12}}>End Date: </label>
                                  <div>
                                      <DatePicker
                                      className="form-control"
                                      selected={this.state.endDate}
                                      onChange={this.onChangeEndDate}
                                      style={{width: "300px", fontSize:12}}
                                      />
                                  </div>
                              </div>

                              


                            </div>

                            {/* <div class="form-group">
                              <label for="exampleFormControlFile1" style={{color: "#000000", fontWeight: "bold"}}>Attachement</label>
                              
                              <input type="file" class="form-control-file" text="Browse" id="exampleFormControlFile1"/>
                            </div> */}


                            <br/>

                            <div style={{display: "flex", float: "right", marginRight: "6%"}}>
                              
                                <Button variant="secondary" className={[styles['btnStyle'] , ''].join(' ')} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, color: "#a1a1a1", border: 0, marginRight: 10}}>Cancel</Button>
                                        
                                <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Update</button>
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

