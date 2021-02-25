import React, { Component } from 'react';
import styles from '../../assets/css/style.module.css'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";
import logo from './logo.jpeg'

// const { Text } = Typography;
// const RegisterForm = () => {
//   const [form] = Form.useForm();

//   //form submit successful
//   const onFinish = (values) => {
//     console.log(values);
//     if (values.password == values.confirmPassword) {
//       console.log('req send');
//       delete values.confirmPassword;
//       Axios.post("http://localhost:5000/api/registration", values)
//         .then((response) => {
//           openNotificationWithIcon(response.data.success || 'error', response.data.message)
//         })
//         .catch((error) => {
//           openNotificationWithIcon('error', 'Network Problem')
//         });
//     } else {
//       openNotificationWithIcon('error', 'Password & Confirm Password not matched ')
//     }
//     form.resetFields();
//   };

//   // notification
//   const openNotificationWithIcon = (type, message) => {
//     notification[type]({
//       message,
//     });
//   };

//  return (
    // <div className='containerForAll'>
    //   <Row>
    //     <Col xs={{ span: 22, offset: 1 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }} className="mainTopHeading">Kampainer</Col>
    //     <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
    //       <Form
    //         form={form}
    //         layout='vertical'
    //         name="basic"
    //         initialValues={{
    //           remember: true,
    //         }}
    //         onFinish={onFinish}
    //       >
    //         <Form.Item>
    //           <Text className="textSetting">Create a new Account</Text>
    //         </Form.Item>


    //         {/* Full Name Field*/}
    //         <Form.Item
    //           label=""
    //           name="name"
    //           rules={[
    //             {

    //               required: true,
    //               message: "Please enter your full name!",
    //             },
    //           ]}
    //         >
    //           <Input placeholder="Enter Full Name" className="customFields" size="large" suffix={<UserOutlined />} />
    //         </Form.Item>


    //         {/* Email Input */}
    //         <Form.Item
    //           label=""
    //           name="email"
    //           rules={[
    //             {
    //               type: "email",
    //               required: true,
    //               message: "Please enter a valid email!",
    //             },
    //           ]}
    //         >
    //           <Input placeholder="Enter Email Address" className="customFields" size="large" suffix={<MailOutlined />} />
    //         </Form.Item>

    //         {/* Password Field */}
    //         <Form.Item
    //           label=""
    //           name="password"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your password!",
    //             },
    //           ]}
    //         >
    //           <Input.Password placeholder="Enter Password" className="customFields" size='large' />
    //         </Form.Item>

    //         {/* Re-Password */}
    //         <Form.Item
    //           label=""
    //           name="confirmPassword"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please Confirm password!",
    //             },
    //           ]}
    //         >
    //           <Input.Password placeholder="Confirm Password" className="customFields" size='large' />
    //         </Form.Item>


    //         <Form.Item >
    //           <Button type="primary" htmlType="submit" className="lrgBtn">
    //             Sign Up
    //           </Button>
    //         </Form.Item>
    //         <Form.Item>
    //           <div type="flex" align="center">
    //             <p style={{ color: '6D6D6D', fontSize: '17px' }}>Already have an account? <Linkme to="/loginForm">Sign in</Linkme></p>
    //           </div>
    //         </Form.Item>
    //       </Form>
    //     </Col>
    //   </Row>
    // </div>



    
//  )
//}

export default class ForgotPassword extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('authorization')
    const username = localStorage.getItem('user_name')
    let loggedIn = true
    if(token == null){
      loggedIn = false
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loggedIn,
      email: '',
      users: []
    }
  }


  componentDidMount(){

    localStorage.removeItem('email')
    
    axios.get('https://kaimpaigner-cms-backend.herokuapp.com/api/listUsers')
    .then(res => {
      this.setState({users: res.data})
    })

    .catch(err => console.log("err"))
  }

onChangeEmail(e) {
    this.setState({
        email: e.target.value
    })
}




onSubmit(e){
    e.preventDefault()

    var check = false

    this.state.users.forEach(child => {
      if(child.email === this.state.email){
        check = true
      }
    })

    if(check === true){
        if(this.state.email != ''){
          localStorage.setItem('email', this.state.email)
          window.location = '/confirmPassword'
        }else{
          document.userForm.classList.add('was-validated')
          //alert("Password and Confirm Password Missmatch...")
        }
    }else{
      alert('Invalid Email')
    }
    
    
}



  render(){
    if(this.state.loggedIn){
      return <Redirect to="/dashboard" />
  }
    
    return(
      <div className={styles.handleOverflow}>
      
      <div className="row">
          <div className={[styles['backBlue'] , 'col-md-4'].join(' ')}>
            <div className={styles.divPos}>
              <img src={logo} style={{height:155,width:92}}/>
            </div>

            <div className={styles.divPos2}>
              <p className={styles.pStyle2} style={{fontSize:12}}><strong>Some text about features</strong></p>
              <p className={styles.pStyle2}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={styles.divPos3}>
          <div className="col-md-8">
          <form onSubmit={this.onSubmit} name="userForm" className="needs-validation" noValidate>

            <h1 className={styles.h1Style}>Forgot your password?</h1>
            <p className={styles.pStyle}>Enter your associated email to reset password</p>

            

            <div class="form-group">
              
              <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email" style={{width:"300px", fontSize: 12}} required/>
          
            </div>
            <br/>
            <button type="submit" className={[styles['btnStyle'] , 'btn btn-primary'].join(' ')} style={{backgroundColor:'#1663c7', borderRadius:0, fontSize:10, width:300}}>Continue</button><br/>
            <Link to={'/loginForm'} className={[styles['btnStyle'] , 'btn btn-secondary'].join(' ')} style={{backgroundColor:'#e5e5e5', borderRadius:0, fontSize:10, width:300, color: "#a1a1a1", border: 0, marginTop:10}}>Cancel</Link>
            
            <br/><br/>
          </form>
          </div>
          </div>
      </div>
    </div>
    )
  }
}

