import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../assets/css/style.module.css'
import uil from '../assets/img/uil_process.png'
import arrow from '../assets/img/mdi_arrow_back_ios.png'
import grid from '../assets/img/grid.png'
import volume from '../assets/img/volume.png'
import Vector from '../assets/img/Vector.png'

export default class addResearchPlanning extends Component{
    constructor(props){
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeAddOn = this.onChangeAddOn.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeAssignedTo = this.onChangeAssignedTo.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);

        const token = localStorage.getItem('authorization')
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }

        this.state = {
            loggedIn,
            title: '',
            addOn: '',
            text: '',
            startDate: new Date(),
            endDate: new Date(),
            assignedTo: '',
            campaign: '',
            checked: false,
            events: [],
            users: [],
            userNAME: ''
        }

    }

    componentDidMount(){
        axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/listUsers')
        .then((res) => {
            this.setState({ 
                users: res.data.map(user => user.name),
                userNAME: res.data[0].name 
            })
            
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

        axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/listEvent/' + localStorage.getItem("username"))
        .then(res => {
            
            this.setState({events: res.data})
            
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

    handleChange = (e) => {
        const { checked } = e.target
        this.setState({
          checked: checked
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeAddOn(e) {
        this.setState({
            addOn: e.target.value
        })
    }

    onChangeAssignedTo(e) {
        this.setState({
            assignedTo: e.target.value
        })
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value
        })
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

    onChangeUsername(e) {
        this.setState({
          userNAME: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        var check = false
        var calender = this.state.events

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].Title === this.state.title){
                    check = true
                }
            }

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].Title === this.state.title){
                    check = true
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(child.Field_Operation[0].Title === this.state.title){
                    check = true
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].Title === this.state.title){
                    check = true
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].Title === this.state.title){
                    check = true
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].Title === this.state.title){
                    check = true
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].Title === this.state.title){
                    check = true
                }
            }
            
        })

        if(check === false){
            if(this.state.startDate.getMonth() <= this.state.endDate.getMonth()){

                
                    if(this.state.title === ''  && this.state.text === ''){
                        document.userForm.classList.add('was-validated')
                    }else{

                    

                    if(this.state.startDate.getDate() === this.state.endDate.getDate()){
                        const event = {
                            title: this.state.title,
                            addOn: this.state.addOn,
                            text: this.state.text,
                            startDate: this.state.startDate,
                            endDate: this.state.endDate,
                            assignedTo: this.state.assignedTo,
                            checked: true,
                            createdBy: localStorage.getItem("username")
                        }
                
                        axios.post('https://kaimpaigner-cms-backend.herokuapp.com/api/addResearchPlanning/' + this.props.match.params.id, event)
                            .then(res => {
                                console.log(res.data)
                                
                            })
                            .catch(err => {
                                console.log("err" + err)
                            
                            })
                
                        window.location = '/addResearchPlanning/' + this.props.match.params.id
                    }else{
                        if(this.state.startDate.getDate() < this.state.endDate.getDate()){
                            const event = {
                                title: this.state.title,
                                addOn: this.state.addOn,
                                text: this.state.text,
                                startDate: this.state.startDate,
                                endDate: this.state.endDate,
                                assignedTo: this.state.assignedTo,
                                checked: false,
                                createdBy: localStorage.getItem("username")
                            }
                    
                            axios.post('https://kaimpaigner-cms-backend.herokuapp.com/api/addResearchPlanning/' + this.props.match.params.id, event)
                                .then(res => {
                                    console.log(res.data)
                                    
                                })
                                .catch(err => {
                                    console.log("err" + err)
                                
                                })
                    
                            window.location = '/addResearchPlanning/' + this.props.match.params.id
                        }else{
                            alert('Your dates are not in order, Please select the dates in order')
                        }
                    }

                    

                    
                }
                

                    
                
                
                
            }
        }else{
            alert('Title exists already')
        }
            
        

        
        
    }

    render(){
        if(!this.state.loggedIn){
            return <Redirect to="/loginForm" />
          }
          
        return(
            <div className={styles.handleOverflow}>
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
                      <Link to={"/addEvent/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Event</Link>
                      <Link to={"/addDigitalAdd/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Digital Add</Link>
                      <Link to={"/addFieldOperation/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Field Operation</Link>
                      <Link to={"/addPaidAdvertisement/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Paid Advertisement</Link>
                      <Link to={"/addOOHAdvertisement/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />OOH Advertisement</Link>
                      <Link to={"/addMailbox/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Mailbox</Link>
                      <Link to={"/addResearchPlanning/" + this.props.match.params.id} className={styles.navLink3}><img src={uil} style={{marginRight:10, paddingLeft:10}} />Research Planning</Link>

                      <Link to={"/listCompaign/" + localStorage.getItem('username')} className={styles.navLink4} style={{position:"absolute", top: "90%"}}><img src={arrow} style={{marginRight:10, paddingLeft:10}} />Back</Link>
                      
                  </div>

                  <div className="col-md-3">

                  </div>  

                  <div className={[styles['campHead'] , 'col-md-9'].join(' ')} style={{marginLeft: "30%"}}>
                  
                    
                  <div className={styles.divPos4}>
                        <div className="col-md-8">
                            <form onSubmit={this.onSubmit} name="userForm" className="needs-validation" noValidate>
                                <h1 className={styles.h1Style}>Add Research Planning</h1>
                                <br/>

                                <div className="form-group">
                                    <label style={{fontSize:12}}>Enter Title </label>
                                    <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} placeholder="Enter Title" style={{width: "300px", fontSize:12}} required/>
                                    
                                </div>


                                <div className="form-group"> 
                                    <label style={{fontSize:12}}>Add On</label>
                                    <select className="form-control" value={this.state.addOn} onChange={this.onChangeAddOn} style={{width: "300px", fontSize:12}}>
                                        <option value="">Select</option>
                                        <option value="BenchMark">BenchMark</option>
                                        <option value="Tracking Poll">Tracking Poll</option>
                                        <option value="Focus Groups">Focus Groups</option>
                                        <option value="In_depth Interviews">In_depth Interviews</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label style={{fontSize:12}}>Enter Text </label>
                                    <textarea type="text" className="form-control" value={this.state.text} onChange={this.onChangeText} placeholder="Enter Text" style={{width: "300px", fontSize:12}} required/>
                                </div>

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

                                <div className="form-group"> 
                                    <label style={{fontSize:12}}>Assigned To</label>
                                    <select ref="userInput"
                                        style={{width: "300px", fontSize:12}}
                                        required
                                        className="form-control"
                                        value={this.state.userNAME}
                                        onChange={this.onChangeUsername}>
                                        {
                                            this.state.users.map(function(user) {
                                            return <option 
                                                key={user}
                                                value={user}>{user}
                                                </option>;
                                            })
                                        }
                                    </select>
                                </div>

                              


                                <br/>
                                <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Add Plan</button>
                                
                            </form>
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