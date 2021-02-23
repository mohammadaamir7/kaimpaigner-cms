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
            compaigns: [{
                "success": true,
                "message": "Data Successfully Sent",
                "User": [],

                "user_data":{
                    "Process":[
                        {
                        "Title" : "New Event 1",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-02-2021",
                        "End_Date" : "01-04-2021",
                        "Event_Date" : "01-04-2021",
                        "Created_At" : "01-02-2021",
                        "One_Day_Event" : false
                    },
                    {
                        "Title" : "New Event 2",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-06-2021",
                        "End_Date" : "01-08-2021",
                        "Event_Date" : "01-08-2021",
                        "Created_At" : "01-06-2021",
                        "One_Day_Event" : false
                    },
                    {
                        "Title" : "New Event 3",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-07-2021",
                        "End_Date" : "01-08-2021",
                        "Event_Date" : "01-08-2021",
                        "Created_At" : "01-07-2021",
                        "One_Day_Event" : false
                    },
                    {
                        "Title" : "New Event 4",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-07-2021",
                        "End_Date" : "01-07-2021",
                        "Event_Date" : "01-07-2021",
                        "Created_At" : "01-07-2021",
                        "One_Day_Event" : true
                    },
                    {
                        "Title" : "New Event 5",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-03-2021",
                        "End_Date" : "01-07-2021",
                        "Event_Date" : "01-07-2021",
                        "Created_At" : "01-03-2021",
                        "One_Day_Event" : false
                    },
                    {
                        "Title" : "New Event 6",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-05-2021",
                        "End_Date" : "01-05-2021",
                        "Event_Date" : "01-05-2021",
                        "Created_At" : "01-05-2021",
                        "One_Day_Event" : true
                    },
                    {
                        "Title" : "New Event 7",
                        "Text" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula enim. Fusce suscipit consequat diam sit amet hendrerit. Sed eget massa a ex posuere consectetur. Aliquam vel orci aliquam sem condimentum pharetra. Ut posuere eu neque ac venenatis. Sed sed est cursus, commodo sapien id, fermentum orci. ",
                        "Start_Date" : "01-01-2021",
                        "End_Date" : "01-02-2021",
                        "Event_Date" : "01-02-2021",
                        "Created_At" : "01-01-2021",
                        "One_Day_Event" : false
                    },
                ]
                  
                }
            }],
            isOpen: false,
            firedButton: '',
            startDate: new Date(),
            endDate: new Date(),
            events: [],
            events2: []
        }
    }
    
    openModal = () => {
        this.setState({ isOpen: true })
        
    };

    closeModal = () => this.setState({ isOpen: false });


    componentDidMount(){

        var idCount2 = 0;
        $('button.drop').each(function() {
        $(this).attr('id', 'drp' + idCount2);
        idCount2++;
        });


        
        $('button.drop').each(function() {
        var q = $(this).attr('id');
        console.log("button id : " + q)
        })
        
        var fired
        $('button.clicked').on('click', function(){
            fired = ''
            fired = $(this).val()
            console.log("fired : " + fired)
        })

        this.setState({
            firedButton: fired
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
                    console.log("Event Response : " + res.data[0].Event[0].Title)
                    this.setState({events: res.data})
                    
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

    onSubmit(){
        var start = this.state.startDate
        var end = this.state.endDate

        axios.get('http://localhost:5000/api/listEvent/' + start + '/' + end)
        .then((res) => {
            this.setState({ events2: res.data })
            
        })
        .catch((error) => {
            console.log(error);
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
        console.log("campaign Data: " + calender)

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

        console.log("Calender : " + calarray)
        
        var maxDate = new Date(Math.max.apply(null, calarray))
        console.log("Maxx : " + maxDate)
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
        
            var filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])
            
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
                            
                            <h5>{child.Event_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                                <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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

        var filteredArray0 = []
        filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

        var filteredArray = []
        filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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

        
            
       var filteredArray0 = []
       filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

       var filteredArray1 = []
       filteredArray1 = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

       var filteredArray = []
       filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[2])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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
       filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[3])

       var filteredArray0 = []
       filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

       var filteredArray1 = []
       filteredArray1 = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

       var filteredArray2 = []
       filteredArray2 = calender.filter(el => new Date(el.End_Date).getDate() === arr[2])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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
       filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[4])

       var filteredArray0 = []
       filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

       var filteredArray1 = []
       filteredArray1 = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

       var filteredArray2 = []
       filteredArray2 = calender.filter(el => new Date(el.End_Date).getDate() === arr[2])

       var filteredArray3 = []
       filteredArray3 = calender.filter(el => new Date(el.End_Date).getDate() === arr[3])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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
       filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[5])

       var filteredArray0 = []
       filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

       var filteredArray1 = []
       filteredArray1 = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

       var filteredArray2 = []
       filteredArray2 = calender.filter(el => new Date(el.End_Date).getDate() === arr[2])

       var filteredArray3 = []
       filteredArray3 = calender.filter(el => new Date(el.End_Date).getDate() === arr[3])

       var filteredArray4 = []
       filteredArray4 = calender.filter(el => new Date(el.End_Date).getDate() === arr[4])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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
       filteredArray = calender.filter(el => new Date(el.End_Date).getDate() === arr[6])

       var filteredArray0 = []
       filteredArray0 = calender.filter(el => new Date(el.End_Date).getDate() === arr[0])

       var filteredArray1 = []
       filteredArray1 = calender.filter(el => new Date(el.End_Date).getDate() === arr[1])

       var filteredArray2 = []
       filteredArray2 = calender.filter(el => new Date(el.End_Date).getDate() === arr[2])

       var filteredArray3 = []
       filteredArray3 = calender.filter(el => new Date(el.End_Date).getDate() === arr[3])

       var filteredArray4 = []
       filteredArray4 = calender.filter(el => new Date(el.End_Date).getDate() === arr[4])

       var filteredArray5 = []
       filteredArray5 = calender.filter(el => new Date(el.End_Date).getDate() === arr[5])

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
                            
                            <h5>{child.End_Date.substring(0, 10)}</h5>

                            <div className={[styles['compaignDiv'] , 'mx-auto'].join(' ')}>
                            <button className="clicked" onClick={this.openModal} value={child.Title}><h5>{child.Title}</h5></button>
                                <p>{child.Text}</p>

                            <div className={styles.borderStyle3}></div>

                            <p style={{fontWeight:"bold"}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(child.Created_At).getHours()} : {new Date(child.Created_At).getMinutes()}</p>
                                    
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
                            <form>
                                    
                                    <div className="form-group">
                                    
                                        <input type="text" className="form-control" value={this.state.firedButton} onChange={this.onChangeTitle} placeholder="Entery Title" style={{width: "95%", fontSize:12}}/>
                                    
                                    </div>

                                    <div className="form-group">
                                    
                                        <textarea type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} placeholder="Entery Description" style={{width: "95%", fontSize:12}}/>
                                        
                                    </div>
                                    
                                    
                                    <div style={{display: "flex",  float: "right"}}>
                                        <Button variant="secondary" className={[styles['btnStyle'] , ''].join(' ')} onClick={this.closeModal} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, color: "#a1a1a1", border: 0, marginRight: 10}}>Cancel</Button>
                                        
                                        <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#214d8a', borderRadius:0, fontSize:10}}>Update</button>
                                    </div>
                                    

                                </form>
                        </Modal.Body>
                        
                        </Modal>
                        <br/><br/>
                        
                       

                    
                            
                        <div className={[styles['rowGrey'] , 'row'].join(' ')}>
                            

                            { this.countCheck() }

                            <div className="col-md-3">
                                <div className={styles.whiteDiv}>
                                    <h5>Hello {this.state.username}</h5>
                                    <br/><br/>
                                </div>
                            </div>

                            
                            

          
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
