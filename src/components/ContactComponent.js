import React, { Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button,Label, Col, Row
,Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';
import { Control,Form, Errors} from 'react-redux-form';
import GoogleMap from './google_map';

const required =(val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber =(val)=> !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component {
    constructor(props){
        super(props)
            this.state={
            isNavOpen: false,
            isModalOpen:false
        };
          this.toggleNav = this.toggleNav.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }
 
     toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
    }
    handleSubmit(values){
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));
        //this.props.postFeedback(values);
        this.props.resetFeedbackForm();
        

    }


  
    render(){
       return(
           <React.Fragment>
           <Navbar dark expand="md">
                <div className="container">
                 <NavbarToggler onClick={this.toggleNav}/>
                 <NavbarBrand className ="mr-auto" href="/">
                 JV
                </NavbarBrand>
         <Collapse isOpen={this.state.isNavOpen} navbar> 
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                    </NavLink>
                </NavItem>
                 <NavItem>
                    <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span>About Us
                    </NavLink>
                </NavItem>
               
                <NavItem>
                    <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                    </NavLink>
                </NavItem>
                </Nav>
              
                </Collapse>
                </div>
                </Navbar>
        <div className="container">
            <div className ="row">
                  <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem>Contact Us</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Contact Us</h3>
                      <hr/>
                      </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-5 ">
                        <h5>Our Address</h5>
                        <address>
                        8, Joseph Iyinolakan street<br />
                        Ketu Ijanikin,<br />
                        LAGOS<br />
                        <i className="fa fa-phone"></i>: +234 7031855342<br />
                        <i className="fa fa-fax"></i>: +234 8023058279<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:juliwillventures72@gmail.com">juliwillventures72@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <div>
                        <GoogleMap/>
                   </div>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+2347031855342"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:juliwillventures72@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className=" col-12 col-md-9">
                    <Form model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form group">
                            <Label htmlFor="firstname"  md={2}> First Name</Label>
                            <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                            placeholder="First Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".firstname"
                            show="touched"
                            message={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form group">
                            <Label htmlFor="lastname"  md={2}> Last Name</Label>
                            <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                            placeholder="Last Name"
                            className="form-control"
                             validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                           />
                           <Errors
                            className="text-danger"
                            model=".lastname"
                            show="touched"
                            message={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form group">
                            <Label htmlFor="telnum"  md={2}>Contact Tel.</Label>
                            <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                            placeholder="Tel. Number"
                            className="form-control"
                             validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                            }}
                           />
                            <Errors
                            className="text-danger"
                            model=".telnum"
                            show="touched"
                            message={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 numbers',
                                maxLength: 'Must be 15 numbers or less',
                                isNumber: 'Must be a number'
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form group">
                            <Label htmlFor="email"  md={2}>Email</Label>
                            <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                            placeholder="Email"
                            className="form-control"
                            validators={{
                                required, validEmail
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            message={{
                                required: 'Required',
                                validEmail:' Invalid Email Address'
                            }}
                            />
                            </Col>
                        </Row>
                        <Row className="form group">
                            <Col md={{ size: 6, offset:2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                    className="form-check-input"
                                   />{ ' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </div>
                            </Col>
                            <Col md={{ size: 3, offset:1}}>
                            <Control.select model=".contactType" name="ContactType"
                            className="form-control">
                            <option>Tel.</option>
                            <option>Email</option>
                            </Control.select>
                            </Col> 
                        </Row>
                        <Row className="form group">
                            <Label htmlFor="message"  md={2}>Your Feedback</Label>
                            <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                            rows ="12"
                            className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form group">
                            <Col md={{size:10, offset:2}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
    }
    
}

export default Contact;