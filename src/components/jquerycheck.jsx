
import React, {Component} from 'react';
import { Modal, Button } from "react-bootstrap";
import $ from 'jquery'
import styles from '../assets/css/style.module.css'
import axios from 'axios';


export default class Practice extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }


       
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount(){
      
    }
   

    render(){
        
        return(
            <>
            <div
            
            >
              <Button variant="warning" onClick={this.openModal}>
                Launch demo modal
              </Button>
            </div>
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header>
                <Modal.Title>Edit Entry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                        <h5>Edit Entry</h5>
                        <div className="form-group">
                        
                            <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeTitle} placeholder="Entery Title" style={{width: "95%", fontSize:12}}/>
                        
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
          </>


        
    )
    }
}