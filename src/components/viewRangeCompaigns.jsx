import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class viewRangeCompaign extends Component{
    constructor(props){
        super(props)

        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        

        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }

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

    onSubmit(e){
        e.preventDefault()

        const compaign = {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        axios.put('http://localhost:5000/api/rangeCompaign', compaign)
            .then(res => console.log(res.data))
            .catch(err => console.log("err"))

        window.location = '/listRangeCompaigns'
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Creation Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.startDate}
                            onChange={this.onChangeStartDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Creation Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.endDate}
                            onChange={this.onChangeEndDate}
                            />
                        </div>
                    </div>
                    
                    <button type="submit" classNameName="btn btn-primary">Submit</button>
                    <br/>
                    
                </form>
            </div>
        )
    }
}