import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Compaign = props => (
    <tr>
      <td>{props.compaign.name}</td>
      <td>{props.compaign.createdBy}</td>
      <td>{props.compaign.creationDate.substring(0,10)}</td>
    </tr>
  )


export default class listRangeCompaign extends Component{
    constructor(props){
        super(props)

        this.state = {
            compaigns: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/rangeCompaign')
            .then((res) => {
                this.setState({ compaigns: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    compaignList() {
        return this.state.compaigns.map((currentcompaign) => {
          return <Compaign compaign={currentcompaign} key={currentcompaign._id}/>;
        })
    }

    render() {
        return (
          <div>
            <h3>Available Compaigns</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Created By</th>
                  <th>Creation Date</th>

                  
                </tr>
              </thead>
              <tbody>
                { this.compaignList() }
              </tbody>
            </table>

            
          </div>
        )
      }
}