// import http from "../services/axiosUser";
// import React from "react";
// import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"


import http from '../services/axiosUser';
import React from 'react';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'; 
// const LoginPage=({setIsLogin})=>{
// const [err,setErr]=React.useState('');
// const nameRef=React.useRef();
// const emailRef=React.useRef();
// const LoginFunc =(e)=>{
//     e.preventDefault();
//     let name= nameRef.current.value,
//     email=emailRef.current.value;
//     http.get('users')
//     .then(res=>{
//         res.data.map((user)=>{
//             if(user.username===name && user.email===email){
//                 window,localStorage.setItem('name',user.username);
//                 window.localStorage.setItem('email',user.email);
//                 setIsLogin(true);
//             }else{alert('bunday foydalanuvchi yo\'q')};
//             return true
//         })
//     })
//     .catch(err=>setErr('something went wrong!'));
// }


// }
const LoginPage = ({ setIsLogin }) => {
    // const [ users, setUsers ] = React.useState([]);
    const [ err, setErr ] = React.useState('');
    const nameRef = React.useRef();
    const emailRef = React.useRef();

    const LoginFunc = (e) => {
        e.preventDefault();
        let name = nameRef.current.value,
            email = emailRef.current.value;
        http.get('/users')
        .then(res => {
            res.data.map((user)=> {
                if(user.username === name && user.email === email) {
                    window.localStorage.setItem('name', user.username);
                    window.localStorage.setItem('email', user.email);
                    setIsLogin(true);
                } else {
                    setErr('Bunaqa foydalanuvchi yo\'q!');
                }
                return true;
            })  
        })
        .catch(err => setErr('Something wen\'t wrong! ' + err));  
        return (
            <>
            <Container>
                <Row>
                    <Col md={{size:4,offset:4}}>
                        <Card>
                            <CardHeader>
                                Login Form
                            </CardHeader>
                            <CardBody>

                               {

                                   err?
                                   <div className='alert alert-danger'>{err}</div>:
                                   ''
                               }
                               <form onSubmit={LoginFunc}>
<div className='mb-3'>
<label htmlFor='name' className='form-label'>Name</label>
<input type='text' className='form-control' ref={nameRef} id='name'/>

</div>
<div className='mb-3'>
<label htmlFor='email' className='form-label'>Email</label>
<input type='email' className='form-control' ref={emailRef} id='email'/>
</div>
<button type='submit' className='btn btn-primary'>Login</button>


                               </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }

    // return(
    //     <>
    //         <Container className='bg-success'>
    //             <Row>
    //                 <Col md={{ size: 4, offset: 4  }}>
    //                     <Card className='mt-5 shadow'>
    //                         <CardHeader className='fs-3'>Login Form</CardHeader>
    //                         <CardBody>
    //                             {
    //                                 err ? 
    //                                 <div className='alert alert-danger'>{ err }</div>:
    //                                 ''
    //                             }
    //                             <form onSubmit={LoginFunc}>
    //                                 <div className="mb-3">
    //                                     <label htmlFor="name" className="form-label">Name</label>
    //                                     <input type="text" ref={nameRef} className='form-control' id="name"/>
    //                                 </div>
    //                                 <div className="mb-3">
    //                                     <label htmlFor="email" className="form-label">Email </label>
    //                                     <input type="email" ref={emailRef} className='form-control' id="email" />
    //                                 </div>
    //                                 <button type="submit" className="btn btn-primary">Login</button>
    //                             </form>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </>
    // )
}

export default LoginPage;