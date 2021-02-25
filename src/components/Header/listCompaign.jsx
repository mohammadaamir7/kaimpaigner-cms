import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import styles from '../../assets/css/style.module.css'
import grid from '../assets/img/grid.png'
import volume from '../assets/img/volume.png'
import Vector from '../assets/img/Vector.png'

const Compaign = props => (
   <div className="col-md-3">
       <Link className={styles.divAnchor} to={"/campaignOverview/" + props.compaign._id}>
         
         <div className={styles.whiteDiv3}>

           

           <div className="row" style={{height: '70%'}}>
              <div className='col-md-12'>
                
                  <h5 style={{color:"#4a4a4a"}}>{props.compaign.name}</h5>
                  
                      
                
                <p style={{marginRight: "5%"}}>{props.compaign.description}</p>
              </div>
           </div>

           <div className="row" style={{height: '30%'}}>
              <div className='col-md-12'>
                  <div className={styles.borderStyle4}></div>
                  <p style={{fontWeight:"bold", marginTop:10}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(props.compaign.creationDate).getHours()} : {new Date(props.compaign.creationDate).getMinutes()}</p>
              </div>
           </div>

          
        </div>
      </Link>
    </div>
    
  )

  const RecentCompaign = props => (

        <div className="col-md-4">
          <Link className={styles.divAnchor} to={"/campaignOverview/" + props.compaign._id}>
            <div className={styles.whiteDiv4}>
              <div className="row" style={{height: '70%'}}>
                <div className='col-md-12'>
                
                  <h5>{props.compaign.name}</h5>
                
                
                  <p style={{marginRight: "5%"}}>{props.compaign.description}</p>

                </div>
                                
              </div>
                              
              
              
              <div className="row" style={{height: '30%'}}>
              <div className={styles.borderStyle4}></div>
                <div className='col-md-12'>
                  <p style={{fontWeight:"bold", marginTop:10}}><img src={require('../../assets/img/Time Square.png')} /> {new Date(props.compaign.creationDate).getHours()} : {new Date(props.compaign.creationDate).getMinutes()}</p>
                </div>
              </div>
              
              </div>
          </Link>         
        </div>
    
  )


export default class listCompaign extends Component{
    constructor(props){
        super(props)
        this.deleteCompaign = this.deleteCompaign.bind(this);
        //this.compaignList = this.compaignList.bind(this)

        
        const token = localStorage.getItem('authorization')
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }

        this.state = {
          loggedIn,
          compaigns: [],
          recentCompaigns: [],
          username: localStorage.getItem('username')
        }
    }

    componentDidMount(){

        $('.animateDiv').hover(function(){
          $(this).animate({
            height: "+=1%",
            width: "+=5%",
            fontSize: "+=5%"
          })
        }, function(){
          $(this).animate({
            height: "-=1%",
            width: "-=6%",
            fontSize: "-=5%"
          })
        })
        axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/listCompaign/' + localStorage.getItem("username"))
            .then((res) => {
                this.setState({ compaigns: res.data })
                      
                var array = []
                var start = this.state.compaigns.length - 1
                var end = start - 3

                for (let index = start; index > end; index--) {
                  array[index] = this.state.compaigns[index];

                }

                this.setState({ recentCompaigns: array})
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
        axios.delete('https://kaimpaigner-cms-backend.herokuapp.com/api/'+id)
            .then(response =>  console.log(response.data));

        
     window.location = '/listCompaign/' + localStorage.getItem('username')
        
    }

    compaignList() {
        return this.state.compaigns.map((currentcompaign) => {
          return <Compaign compaign={currentcompaign} key={currentcompaign._id}/>;
        })
    }

    recentcompaignList() {
      return this.state.recentCompaigns.map((currentcompaign) => {
        return <RecentCompaign compaign={currentcompaign} key={currentcompaign._id}/>;
      })
  }

    render() {
      if(!this.state.loggedIn){
        return <Redirect to="/loginForm" />
      }

      
      
        return (

          <div style={{overflowX: "hidden"}}>
            <div className="row">

                    <div className={[styles['backBlue'] , 'col-md-2 fixed-top'].join(' ')}>
                        <div className={styles.divPosDash}>
                            {/*<h1 className={styles.h1Style3}>Kaimpaigner</h1>*/}
                            
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

                  <div style={{display: 'flex'}}>

                    <h3 className={styles.h1Style5}>Campaigns</h3>
                    <Link to={"/addCampaign"} className={[styles['btnStyle3'] , 'btn btn-primary'].join(' ')}>Add New Campaign</Link>
                  </div>

                  <h5 className={styles.h1Style4}>Recent Added</h5>
                    <div className={[styles['rowGrey2'] , 'row'].join(' ')}>
                      
                          {this.recentcompaignList()}

                    </div>

                    <h5 className={styles.h1Style4}>All Campaigns</h5>
                    <div className={[styles['rowGrey2'] , 'row'].join(' ')}>
                      {this.compaignList()}

                    </div>
                </div>
            </div>
          </div>
        )
      }
}