import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,BreadcrumbItem,
Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';


class About extends Component{
     constructor(props){
        super(props);
      
        this.state={
            isNavOpen: false,
            isModalOpen:false
        };
          this.toggleNav = this.toggleNav.bind(this);
        


    }

    toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
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
                
         
             <header className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Our Values</h1>
                        <p>We doctrine is built solely on trust and intergit; We derive utmost joy in delivering the most timely and satisfactory service to our clients.
                            Our Services are top-notch in itself. Our utmost joy is seeing our clients derive joy that they got the ful Values
                            for their spent resources.</p>
                    </div>
                    
                </div>
            </div>
            </header>
    
        <div className="container">
             
            <div  className="row row-content align-items-center">
                <div className ="col-12 col-sm-12  col-md-12">
                          <h2>Our History</h2>
                    <p>Started in 2010, Juliwill Ventures quickly established itself as a reliable supply chain in Nigeria. With its unique brand, it has established itself so robust in catering to client's need in a speedy fashion.
                         it enjoys patronage from the A-list clientele in Nigeria.</p>
                   
                </div>
                <div className="col-12 col-sm-12 col-md-12">
                    <h2>Our Services</h2>
                    <p>In Juliwill ventures, We deliver one of the most expedient and efficient Services you can find anywhere.
                        We supply various kinds of building materials such as Trailers of cements, sands,granites,gravel,iron-rods etc.We are alwsays at your service to give
                        you the fantastic service you desire. </p>
                </div>
            </div>
    
        </div>
         <footer className="footer">
            <div className="container">
                <div className="row">
                     <div className="col-4 offset-1 col-sm">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm">
                        <h5>Our Vision</h5>
                        <address>
                            With dignity, there's truth.<br/>
                            With truth, there's accountability<br/>
                            With accountability, there's progress<br/>
                            
                        </address>
                    </div>
                    <div class="col-12 col-sm align-self-center">
                        <div class="text-center">
                            <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                            <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                            <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">             
                    <div class="col-auto">
                        <p>© Copyright 2010 Juliwill Ventures</p>
                    </div>
               </div>
            </div>
        </footer>
            
            </React.Fragment>
        );
    }
  }
  
  export default About;
      