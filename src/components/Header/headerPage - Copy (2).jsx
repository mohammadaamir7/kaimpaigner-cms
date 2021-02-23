import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import $, { css } from 'jquery';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal } from "react-bootstrap";
import styles from '../../assets/css/style.module.css'

export default class HeaderPage extends Component{
    constructor(props){
        super(props)

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeStartDate2 = this.onChangeStartDate2.bind(this);
        this.onChangeEndDate2 = this.onChangeEndDate2.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.deleteProcess = this.deleteProcess.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        const token = localStorage.getItem('authorization')
        const username = localStorage.getItem('username')
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn,
            username,
            dashboardData: [],
            isOpen: false,
            firedButton: '',
            startDate: new Date(),
            endDate: new Date(),
            events: [],
            events2: [],
            title: '',
            text: '',
            process: '',
            pro_End_Date: new Date(),
            pro_Start_Date: new Date(),
            p_title: ''
        }
    }
    

    componentDidMount(){

        $('.clicked').each(function(){
            var fired = '' 
            fired = $(this).val()
            $('#model').val(fired)
            alert(fired)
            console.log("fired : " + fired)    
        })
        
        var idCount2 = 0;
        $('button.drop').each(function() {
        $(this).attr('id', 'drp' + idCount2);
        idCount2++;
        });


        
        $('button.drop').each(function() {
        var q = $(this).attr('id');
        console.log("button id : " + q)
        })
        
        

        $("#drp0").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }

            $("#drp0").css("background", "0")
            $("#drp0").css("background-color", "#214d8a")
            $("#drp0").css("color", "#ffffff")
            $("#disp0").fadeIn(100)
        })

        $("#drp1").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp1").css("background", "0")
            $("#drp1").css("background-color", "#214d8a")
            $("#drp1").css("color", "#ffffff")
            $("#disp1").fadeIn(100)
        })

        $("#drp2").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp2").css("background", "0")
            $("#drp2").css("background-color", "#214d8a")
            $("#drp2").css("color", "#ffffff")
            $("#disp2").fadeIn(100)
        })

        $("#drp3").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp3").css("background", "0")
            $("#drp3").css("background-color", "#214d8a")
            $("#drp3").css("color", "#ffffff")
            $("#disp3").fadeIn(100)
        })

        $("#drp4").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp4").css("background", "0")
            $("#drp4").css("background-color", "#214d8a")
            $("#drp4").css("color", "#ffffff")
            $("#disp4").fadeIn(100)
        })

        $("#drp5").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a") && $("#drp"+i+"").css("color", "#ffffff")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp5").css("background", "0")
            $("#drp5").css("background-color", "#214d8a")
            $("#drp5").css("color", "#ffffff")
            $("#disp5").fadeIn(100)
        })

        $("#drp6").on('click', function(){
            var i;
            for(i = 0; i < 7; i++){
                if($("#disp"+i+"").css("display", "block") && $("#drp"+i+"").css("background-color", "#214d8a") && $("#drp"+i+"").css("color", "#ffffff")){
                    $("#disp"+i+"").css("display", "none")
                    $("#drp"+i+"").css("background-color", "#ffffff")
                    $("#drp"+i+"").css("color", "#214d8a")
                }
            }
            
            $("#drp6").css("background", "0")
            $("#drp6").css("background-color", "#214d8a")
            $("#drp6").css("color", "#ffffff")
            $("#disp6").fadeIn(100)
        })


        axios.get('http://localhost:5000/api/listEvent/' + localStorage.getItem("username"))
                .then(res => {
                    
                    this.setState({events: res.data})
                    
                 })
                .catch((error) => {
                    console.log(error);
            })

            axios.get('http://localhost:5000/api/listEvent/' + localStorage.getItem("username"))
            .then(res => {
                
                this.setState({events2: res.data})
                
             })
            .catch((error) => {
                console.log(error);
        })

            axios.get('http://localhost:5000/api/countProcess/' + localStorage.getItem("username"))
                .then(res => {
                    this.setState({dashboardData: res.data})
                 })
                .catch((error) => {
                    console.log(error);
            })


    // axios.get('https://cmsdemoheroku.herokuapp.com/calendar_api/?Start_d=2021-1-1&End_d=2021-1-8')
    //         .then(res => {
    //             this.setState({compaigns: res.data.user_data.Process})
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //     })

    // axios.get("http://cmsdemoheroku.herokuapp.com/dashboard/?User_Id=" + 1)
    //     .then((res) => {
    //         this.setState({ dashboardData: res.data })
            
    //     })
    //     .catch((error) => {
                
    //         console.log(error);
    //     })

 
    }

    
    deleteProcess(id) {
        
        axios.delete('http://localhost:5000/api/deleteProcess/' + id)
          .then(response => {
              window.location = '/dashboard' 
              console.log(response.data)
            });
    }

    openModal = (name) => {
        var events = this.state.events2
        
        this.setState({ isOpen: true })
        this.setState({firedButton : name.currentTarget.value})
        

        events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.setState({process : child.Event[0]})
                    this.setState({text: child.Event[0].text})
                    this.setState({pro_Start_Date: new Date(child.Event[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Event[0].End_Date)})
                }
            
            }
        

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.Digital_Add[0]
                    this.setState({text: child.Digital_Add[0].text})
                    this.setState({pro_Start_Date: new Date(child.Digital_Add[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Digital_Add[0].End_Date)})
            }
        }
            
            if(child.Field_Operation[0] !== undefined){
                if(child.Field_Operation[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.Field_Operation[0]
                    this.setState({text: child.Field_Operation[0].text})
                    this.setState({pro_Start_Date: new Date(child.Field_Operation[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Field_Operation[0].End_Date)})
            }
        }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.Media_Ad[0]
                    this.setState({text: child.Media_Ad[0].text})
                    this.setState({pro_Start_Date: new Date(child.Media_Ad[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Media_Ad[0].End_Date)})
            }
        }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.OOH_Ad[0]
                    this.setState({text: child.OOH_Ad[0].text})
                    this.setState({pro_Start_Date: new Date(child.OOH_Ad[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.OOH_Ad[0].End_Date)})
            }
        }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.Mailbox[0]
                    this.setState({text: child.Mailbox[0].text})
                    this.setState({pro_Start_Date: new Date(child.Mailbox[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Mailbox[0].End_Date)})
            }
        }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].Title === name.currentTarget.value){
                    this.state.p_title = name.currentTarget.value
                    this.state.process = child.Research_Planning[0]
                    this.setState({text: child.Research_Planning[0].text})
                    this.setState({pro_Start_Date: new Date(child.Research_Planning[0].Start_Date)})
                    this.setState({pro_End_Date: new Date(child.Research_Planning[0].End_Date)})
            }
        }
            
        })
        
        
    };

    closeModal = () => {
        this.setState({ isOpen: false });

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


    onChangeStartDate2(date) {
        this.setState({
            pro_Start_Date: date
        })
    }

    onChangeEndDate2(date) {
        this.setState({
            pro_End_Date: date
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

    onChangeText(e) {
        this.setState({
            text: e.target.value
        })
    }

    onChangeTitle(e) {
        this.setState({
            firedButton: e.target.value
        })
    }

    logout(){
        localStorage.removeItem('username')
        localStorage.removeItem('authorization')
        window.location = '/loginForm'
    }

    onSubmit2(){
        const process = {
            title: this.state.firedButton,
            text: this.state.text,
            startDate: this.state.pro_Start_Date,
            endDate: this.state.pro_End_Date,
            id: this.state.p_title
        }

        axios.post('http://localhost:5000/api/updateProcess', process)
        .then(res => {
            console.log(res.data)
            window.location = '/dashboard'
            
        })
        .catch(err => {
            console.log("err" + err)
    
        })
    }

    onSubmit(){

       
            
        var start = this.state.startDate
        var end = this.state.endDate

        var calarray = []
        var Total_events = []
        Total_events = this.state.events2
        
        Total_events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(new Date(child.Event[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Event[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Event[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Event[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
                
            }

            if(child.Digital_Add[0] !== undefined){
                if(new Date(child.Digital_Add[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Digital_Add[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Digital_Add[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Digital_Add[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(new Date(child.Field_Operation[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Field_Operation[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Field_Operation[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Field_Operation[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(new Date(child.Media_Ad[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Media_Ad[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Media_Ad[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Media_Ad[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(new Date(child.OOH_Ad[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.OOH_Ad[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.OOH_Ad[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.OOH_Ad[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(new Date(child.Mailbox[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Mailbox[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Mailbox[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Mailbox[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(new Date(child.Research_Planning[0].Start_Date).getMonth() >= new Date(start).getMonth() && new Date(child.Research_Planning[0].End_Date).getMonth() <= new Date(end).getMonth()){
                    if(new Date(child.Research_Planning[0].Start_Date).getDate() >= new Date(start).getDate() && new Date(child.Research_Planning[0].End_Date).getDate() <= new Date(end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
        })

        this.setState({
            events: calarray
        })
        

    }

    countCheck(){
        const data = this.state.dashboardData
        if (data == null) return null
        

        return Object.keys(data).map((key) => (
            <div className="col-md-3">
                <div className={styles.whiteDiv}>
                    <h5>{key}</h5>
                    <p>{data[key]}</p>
                </div>
            </div>
        ))
    }


    
    showWeek(){

        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process
        

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.Event_Date))
        // ))

        
        
        var maxDate = new Date(Math.max.apply(null, calarray))
        
        //let weekStart = new Date(maxDate).getDate()
        var index;
        //const todaysDate = new Date()
        //let weekDate = todaysDate.getDate()
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
             //weekDate--
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

    //    for (let index = 0; index < arr.length; index++) {
    //        arr[index] = arr[index] + 1
           
    //    }
        
        const data = arr
        if (data == null) return null

        let weeknum = 7;
        var arrdy = new Array(weeknum);
        let chkDay;
        let todayDate = new Date()
        var indexdy;
       

        for(indexdy = 0; indexdy < weeknum; indexdy++){

            chkDay = 0;
            chkDay = new Date(maxDate).getDay() - indexdy
            if(chkDay < 0){
                chkDay = chkDay + weeknum
                arrdy[indexdy] = chkDay
            }
            arrdy[indexdy] = chkDay
            
        }

        console.log("before week index : " + arrdy)
        // for (let index = 0; index < arrdy.length; index++) {
        //     arrdy[index] = arrdy[index] + 1
        //     if(arrdy[index] == 7){
                
        //         arrdy[index] = 0
                
        
        //     }
        // }
        console.log("after week index : " + arrdy)

        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        
        var j = 0;

            return Object.keys(data).map((key) => (
            
                <div className={styles.weekDiv}>
                    <p>{ days[arrdy[j++]] }<br/><button className="drop">{ data[key] }</button></p>
                </div>
                
            ))
        
        
    }

  

    compaignDisplay0(){

        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })
        
        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.Event_Date))
        // ))

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

       
      
        // var pushedCampaigns = []
        // // var fullId = "disp"
        // // var idc = -1

        // for (let index = 0; index < arr.length; index++)  {
            
            
        //     var filteredArray = []
        //     filteredArray = calender.filter(el => new Date(el.Event_Date).getDate() === arr[index])
        //     console.log("Date at  " + index + " : " + arr[index])
        //     console.log("filtered at  " + index + " : " + filteredArray)
        //     if(filteredArray.length === 0){
        //         var obj = [{Event_Date : "No Events on this date"}]
        //         pushedCampaigns.push(obj)
        //     }
        //     // if(filteredArray.length !== 0){
        //     //     idc++
                
                    
        //     //         return filteredArray.map((child) => (
        //     //             <div>
        //     //             <h5>{child.Event_Date}</h5>

        //     //             <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
        //     //                 <h5>{child.Title}</h5>
        //     //                 <p>{child.Text}</p>

        //     //             <div className={styles.borderStyle3}></div>

        //     //             <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> 2 : 00</p>
                                
        //     //             </div>
        //     //             </div>

        //     // ))

            
        
                
        //     // }

        //     // return <div id={fullId + idc} style={{display: "block"}}>
        //     //         <div className={styles.whiteDiv}>
                        
        //     //             <h5>No Events on this date</h5>

        //     //             <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
        //     //                 <h5></h5>
        //     //                 <p></p>

        //     //             <div className={styles.borderStyle3}></div>

                        
                                
        //     //             </div>

        //     //         </div>


        //     // </div>
        //     pushedCampaigns.push(filteredArray)
            
            
        // }; 
        // console.log("push : " + pushedCampaigns)
        // const pushedData = pushedCampaigns
        // var fullId = "disp"
        // var idc = 0
        
        var filteredArray = []
 
        calender.forEach((child) => {
         if(child.Event[0] !== undefined){
             if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Event[0])
             }
             
         }
 
         if(child.Digital_Add[0] !== undefined){
             if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Digital_Add[0])
             }
         }
         
         if(child.Field_Operation[0] !== undefined){
             if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Field_Operation[0])
             }
         }
         
         if(child.Media_Ad[0] !== undefined){
             if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Media_Ad[0])
             }
         }
 
         if(child.OOH_Ad[0] !== undefined){
             if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.OOH_Ad[0])
             }
         }
         
         if(child.Mailbox[0] !== undefined){
             if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Mailbox[0])
             }
         }
         
         if(child.Research_Planning[0] !== undefined){
             if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                 filteredArray.push(child.Research_Planning[0])
             }
         }
         
     })
            
            var eventPush = []
            eventPush = filteredArray.filter(el => el.One_Day_Event !== true)
            
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }
            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                                <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>
                            </div>

                        </div>
                    ))
            
    
        
            
        
    }

    compaignDisplay1(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.Event_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

       var filteredArray = []
       var filteredArray0 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray.push(child.Research_Planning[0])
            }
        }
        
    })

        var eventPush = []
        eventPush = filteredArray0.filter(el => el.One_Day_Event !== true)

        eventPush.forEach(element => {
            var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
            var date_diff = end_d - start_d

            if(date_diff > 0){
                filteredArray.unshift(element)
            }
        });
    
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>

                            </div>

                        </div>
                    ))
    }

    compaignDisplay2(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.End_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

       var filteredArray = []
       var filteredArray0 = []
       var filteredArray1 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[2]){
                filteredArray.push(child.Research_Planning[0])
            }
        }
        
    })

       var eventPush0 = []
       eventPush0 = filteredArray0.filter(el => el.One_Day_Event !== true)

       var eventPush1 = []
       eventPush1 = filteredArray1.filter(el => el.One_Day_Event !== true)


       eventPush1.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }

           var date_diff = end_d - start_d

           if(date_diff > 0){
               filteredArray.unshift(element)
           }
       });

       eventPush0.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }

            var date_diff = end_d - start_d
            date_diff = date_diff - 1

            if(date_diff > 0){
                filteredArray.unshift(element)
            }
        });
            
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>

                            </div>

                            

                        </div>
                    ))
    }

    compaignDisplay3(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.End_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

       var filteredArray = []
       var filteredArray0 = []
       var filteredArray1 = []
       var filteredArray2 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Research_Planning[0])
            }
        }
        
    })
    
   
    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[3]){
                filteredArray.push(child.Research_Planning[0])
            }
        }
        
    })
    

    

       var eventPush0 = []
       eventPush0 = filteredArray0.filter(el => el.One_Day_Event !== true)

       var eventPush1 = []
       eventPush1 = filteredArray1.filter(el => el.One_Day_Event !== true)

       var eventPush2 = []
       eventPush2 = filteredArray2.filter(el => el.One_Day_Event !== true)


       eventPush2.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush1.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }
           var date_diff = end_d - start_d
            date_diff = date_diff - 1
           if(date_diff > 0){
               filteredArray.unshift(element)
           }
       });

       eventPush0.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }

            var date_diff = end_d - start_d
            date_diff = date_diff - 2

            if(date_diff > 0){
                filteredArray.unshift(element)
            }
        });

        

            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>

                            </div>

                            

                        </div>
                    ))
    }

    compaignDisplay4(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.End_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

        
            
    
       var filteredArray = []
       var filteredArray0 = []
       var filteredArray1 = []
       var filteredArray2 = []
       var filteredArray3 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Research_Planning[0])
            }
        }
        
    })
    
   
    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[4]){
                filteredArray.push(child.Research_Planning[0])
            }
        }
        
    })
    

       var eventPush0 = []
       eventPush0 = filteredArray0.filter(el => el.One_Day_Event !== true)

       var eventPush1 = []
       eventPush1 = filteredArray1.filter(el => el.One_Day_Event !== true)

       var eventPush2 = []
       eventPush2 = filteredArray2.filter(el => el.One_Day_Event !== true)

       var eventPush3 = []
       eventPush3 = filteredArray3.filter(el => el.One_Day_Event !== true)

       eventPush3.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

        var date_diff = end_d - start_d
        date_diff = date_diff

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush2.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff - 1

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush1.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

        var date_diff = end_d - start_d
         date_diff = date_diff - 2
        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush0.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }
         var date_diff = end_d - start_d
         date_diff = date_diff - 3

         if(date_diff > 0){
             filteredArray.unshift(element)
         }
     });
        
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>

                            </div>

                            

                        </div>
                    ))
    }

    compaignDisplay5(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.End_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }

        
            
       var filteredArray = []
       var filteredArray0 = []
       var filteredArray1 = []
       var filteredArray2 = []
       var filteredArray3 = []
       var filteredArray4 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Research_Planning[0])
            }
        }
        
    })
    
   
    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[5]){
                filteredArray.push(child.Research_Planning[5])
            }
        }
        
    })
    

       var eventPush0 = []
       eventPush0 = filteredArray0.filter(el => el.One_Day_Event !== true)

       var eventPush1 = []
       eventPush1 = filteredArray1.filter(el => el.One_Day_Event !== true)

       var eventPush2 = []
       eventPush2 = filteredArray2.filter(el => el.One_Day_Event !== true)

       var eventPush3 = []
       eventPush3 = filteredArray3.filter(el => el.One_Day_Event !== true)

       var eventPush4 = []
       eventPush4 = filteredArray4.filter(el => el.One_Day_Event !== true)

       eventPush4.forEach(element => {
        var start_d = new Date(element.Start_Date).getDate()
        var end_d = new Date(element.End_Date).getDate()

        var date_diff = end_d - start_d
        date_diff = date_diff

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush3.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff - 1

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush2.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

        var date_diff = end_d - start_d
        date_diff = date_diff - 2

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush1.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }

        var date_diff = end_d - start_d
         date_diff = date_diff - 3
        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush0.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

         var date_diff = end_d - start_d
         date_diff = date_diff - 4

         if(date_diff > 0){
             filteredArray.unshift(element)
         }
     });
         
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>

                            </div>

                            

                        </div>
                    ))
    }


    compaignDisplay6(){
        var calarray = []
        const calender = this.state.events
        //const calender = this.state.compaigns[0].user_data.Process


        // Object.values(calender).map((key) =>(
        //     calarray.push(new Date(key.End_Date))
        // ))

        calender.forEach((child) => {
            if(child.Event[0] !== undefined){
                calarray.push(new Date(child.Event[0].End_Date))
            }

            if(child.Digital_Add[0] !== undefined){
                calarray.push(new Date(child.Digital_Add[0].End_Date))
            }
            
            if(child.Field_Operation[0] !== undefined){
                calarray.push(new Date(child.Field_Operation[0].End_Date))
            }
            
            if(child.Media_Ad[0] !== undefined){
                calarray.push(new Date(child.Media_Ad[0].End_Date))
            }

            if(child.OOH_Ad[0] !== undefined){
                calarray.push(new Date(child.OOH_Ad[0].End_Date))
            }
            
            if(child.Mailbox[0] !== undefined){
                calarray.push(new Date(child.Mailbox[0].End_Date))
            }
            
            if(child.Research_Planning[0] !== undefined){
                calarray.push(new Date(child.Research_Planning[0].End_Date))
            }
            
        })

        
        var maxDate = new Date(Math.max.apply(null, calarray))
        var index;
        let weekDate = maxDate.getDate()
        var mynumber = 7;
        var arr = new Array(mynumber);
        

       for(index = 0; index < mynumber; index++){
    
            if(weekDate <= 0){
                if(mynumber >= 30){
                    weekDate = weekDate + 30
                }
                if(mynumber == 7){
                    weekDate = weekDate + 7
                }
            }

            arr[index] = weekDate
            weekDate--
       }
       
       var filteredArray = []
       var filteredArray0 = []
       var filteredArray1 = []
       var filteredArray2 = []
       var filteredArray3 = []
       var filteredArray4 = []
       var filteredArray5 = []

       calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[0]){
                filteredArray0.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[1]){
                filteredArray1.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[2]){
                filteredArray2.push(child.Research_Planning[0])
            }
        }
        
    })
    
   
    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[3]){
                filteredArray3.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[4]){
                filteredArray4.push(child.Research_Planning[0])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[5]){
                filteredArray5.push(child.Research_Planning[5])
            }
        }
        
    })
    

    calender.forEach((child) => {
        if(child.Event[0] !== undefined){
            if(new Date(child.Event[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Event[0])
            }
            
        }

        if(child.Digital_Add[0] !== undefined){
            if(new Date(child.Digital_Add[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Digital_Add[0])
            }
        }
        
        if(child.Field_Operation[0] !== undefined){
            if(new Date(child.Field_Operation[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Field_Operation[0])
            }
        }
        
        if(child.Media_Ad[0] !== undefined){
            if(new Date(child.Media_Ad[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Media_Ad[0])
            }
        }

        if(child.OOH_Ad[0] !== undefined){
            if(new Date(child.OOH_Ad[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.OOH_Ad[0])
            }
        }
        
        if(child.Mailbox[0] !== undefined){
            if(new Date(child.Mailbox[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Mailbox[0])
            }
        }
        
        if(child.Research_Planning[0] !== undefined){
            if(new Date(child.Research_Planning[0].End_Date).getDate() === arr[6]){
                filteredArray.push(child.Research_Planning[0])
            }
        }
        
    })
    

    
       var eventPush0 = []
       eventPush0 = filteredArray0.filter(el => el.One_Day_Event !== true)

       var eventPush1 = []
       eventPush1 = filteredArray1.filter(el => el.One_Day_Event !== true)

       var eventPush2 = []
       eventPush2 = filteredArray2.filter(el => el.One_Day_Event !== true)

       var eventPush3 = []
       eventPush3 = filteredArray3.filter(el => el.One_Day_Event !== true)

       var eventPush4 = []
       eventPush4 = filteredArray4.filter(el => el.One_Day_Event !== true)

       var eventPush5 = []
       eventPush5 = filteredArray5.filter(el => el.One_Day_Event !== true)

       eventPush5.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush4.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff - 1

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush3.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

        var date_diff = end_d - start_d
        date_diff = date_diff - 2

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

       eventPush2.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }
        var date_diff = end_d - start_d
        date_diff = date_diff - 3

        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush1.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
            if(start_d >= 30){
                start_d = start_d - 31
                if(start_d == 0){
                    start_d = start_d + 1
                }
            }
            var end_d = new Date(element.End_Date).getDate() + 1
            if(end_d >= 30){
                end_d = end_d - 31
                if(end_d == 0){
                    end_d = end_d + 1
                }
            }

        var date_diff = end_d - start_d
         date_diff = date_diff - 4
        if(date_diff > 0){
            filteredArray.unshift(element)
        }
    });

    eventPush0.forEach(element => {
        var start_d = (new Date(element.Start_Date).getDate()) + 1
        if(start_d >= 30){
            start_d = start_d - 31
            if(start_d == 0){
                start_d = start_d + 1
            }
        }
        var end_d = new Date(element.End_Date).getDate() + 1
        if(end_d >= 30){
            end_d = end_d - 31
            if(end_d == 0){
                end_d = end_d + 1
            }
        }

         var date_diff = end_d - start_d
         date_diff = date_diff - 5

         if(date_diff > 0){
             filteredArray.unshift(element)
         }
     });
        
            if(filteredArray.length === 0){
                return <div>
                    <h5>No events on this date</h5>

                    <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                        <h5></h5>
                        <p></p>

                    <div className={styles.borderStyle3}></div>

                            
                    </div>
                </div>
            }

            return filteredArray.map((child) => (

                        <div>
                            
                            <h5>{child.Start_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={(e) => this.openModal(e, 'value')} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Start_Date).getHours()} : {new Date(child.Start_Date).getMinutes()}</p>

                            <div style={{marginLeft: "auto"}}>
                                
                                <Button variant="danger" onClick={() => { this.deleteProcess(child.Title) }} className={styles.UDstyle2}>Delete</Button>
                                            
                            </div>
                            <br/>
                                    
                            </div>

                            

                        </div>
                    ))
    }

    
    


    render(){
        if(!this.state.loggedIn){
            return <Redirect to="/loginForm" />
        }
        return(
            <div className={styles.handleOverflow}>

                {/*Dashboard*/}

                <div className="row">
                    <div className={[styles['backBlue'] , 'col-md-2 fixed-top'].join(' ')}>
                        <div className={styles.divPosDash}>
                            {/*<h1 className={styles.h1Style3}>Kaimpaigner</h1>*/}
                            
                            <img src={require('./Vector.png')} style={{marginLeft:20}}/>
                            <div className={styles.borderStyle} style={{marginRight:20}}></div>
                            <br/>
                            <Link to="/dashboard" className={styles.navLink2}><img src={require('./grid.png')} style={{marginRight:10, paddingLeft:10}} />Dashboard</Link>
                            <Link to={"/listCompaign/" + localStorage.getItem("username")} className={styles.navLink2}><img src={require('./volume.png')} style={{marginRight:10, paddingLeft:10}} />Campaign</Link>
                        </div>
                    </div>

                    <div className="col-md-2">

                    </div>
                    
                    <div className={[styles['backGrey'] , 'col-md-10'].join(' ')}>

                    <Modal show={this.state.isOpen} onHide={this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>Edit Entry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={this.onSubmit2}>
                                    
                                    <div className="form-group">
                                        <label style={{fontSize:12}}>Title </label>
                                        <input id="modal" type="text" className="form-control" onChange={this.onChangeTitle} value={this.state.firedButton} placeholder={this.state.firedButton} style={{width: "95%", fontSize:12}}/>
                                    
                                    </div>

                                    

                                    <div className="form-group">
                                    
                                        <textarea type="text" className="form-control" value={this.state.text} onChange={this.onChangeText} placeholder="Entery Description" style={{width: "95%", fontSize:12}}/>
                                        
                                    </div>

                                    <div className="form-group">
                                                    <label style={{fontSize:12}}>Start Date: </label>
                                                    <div>
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={this.state.pro_Start_Date}
                                                        onChange={this.onChangeStartDate2}
                                                        style={{width: "300px", fontSize:12}}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label style={{fontSize:12}}>End Date: </label>
                                                    <div>
                                                        <DatePicker
                                                        className="form-control"
                                                        selected={this.state.pro_End_Date}
                                                        onChange={this.onChangeEndDate2}
                                                        style={{width: "300px", fontSize:12}}
                                                        />
                                                    </div>
                                                </div>
                                    
                                    {/* <Button onMouseDown={ this.deleteProcess() } variant="danger" className={[styles['btnStyle'] , ''].join(' ')} onClick={this.closeModal} style={{backgroundColor:'', borderRadius:0, fontSize:10, border: 0, marginRight: 10}}>Delete</Button> */}
                                    <div style={{display: "flex",  float: "right"}}>
                                        <Button variant="secondary" className={[styles['btnStyle'] , ''].join(' ')} onClick={this.closeModal} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, color: "#a1a1a1", border: 0, marginRight: 10}}>Cancel</Button>
                                        
                                        <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Update</button>
                                    </div>
                                    

                                </form>
                                
                        </Modal.Body>
                        
                        </Modal>

                        <div className="row" style={{backgroundColor: '#ffffff'}}>
                            <div className="col-md-12">
                                <div style={{display: 'flex', float: 'right'}}>
                                    <p className={styles.userName}>{this.state.username}</p>
                                    <button id="logout" onClick={this.logout} className={styles.LogoutBtn}>Logout</button>
                                </div>
                            </div>
                        </div>
                        <br/>
                    
                            
                        <div className={[styles['rowGrey'] , 'row'].join(' ')}>
                            

                            { this.countCheck() }

                            
                            

          
                        {/* <div className="col-md-3">
                                <div className={styles.whiteDiv2}>
                                    <h5>History</h5>
                                    <p>Martin added new compaign : Election 2020 21-01-202</p>
                                </div>
                             </div> */}
                            
                        </div>

                        

                        <div className="row">
                            <div className={[styles['backGrey2'] , 'col-md-7'].join(' ')}>
                                <div className="row">
                                    <div className="col-md">
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

                                                <button onClick={this.onSubmit} className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10, marginTop:35, marginLeft:10}}>Show Week</button>
                                

                                            </div>

                                            <br/><br/><br/>

                                        <div className={styles.whiteDiv}>
                            
                                           
                                            <h5>Campaign activity</h5>
                                            

                                            <div className={styles.borderStyle2}></div>

                                            { this.showWeek()}

                                            <div className={styles.borderStyle2}></div>
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md">

                                    <div id="disp0" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay0() }
                                        </div>


                                    </div>
                                       
                                    <div id="disp1" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay1() }
                                        </div>


                                    </div>

                                    <div id="disp2" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay2() }
                                        </div>


                                    </div>

                                    <div id="disp3" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay3() }
                                        </div>


                                    </div>

                                    <div id="disp4" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay4() }
                                        </div>


                                    </div>

                                    <div id="disp5" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay5() }
                                        </div>


                                    </div>

                                    <div id="disp6" style={{display: "none"}}>
                                        <div className={styles.whiteDiv}>
                                            { this.compaignDisplay6() }
                                        </div>


                                    </div>
                                    
                                    

                                     

                                    </div>

                                </div>

                                
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                </div>

                {/*Dashboard*/}

                
        
            </div>
        )
    }
    
}
