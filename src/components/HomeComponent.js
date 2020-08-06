import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,BreadcrumbItem,
Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {connect} from 'react-redux';
import './home.styles.css';
import { NavLink} from 'react-router-dom';
import {  withRouter} from 'react-router-dom';







 class Home extends Component {
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
     RenderCardItem(item){
        
    return(
        <Card >
             <CardImg width='30%' src ={ item.image} alt={item.name}/>
                <CardImgOverlay>
                 <CardTitle>{item.name}</CardTitle>
             </CardImgOverlay>
        </Card>
        
        );
        
    
 }
    RenderImages(props){
        if(!this.props.images){
            return <div></div>
        }
        return this.props.images.map((image)=>{
            return(
                <div key={image.name} className="col-12 col-md-6 home-container">
                    {this.RenderCardItem(image)};

                    </div>
            );
        });
    }
  
  render() {
      //const {image} = this.props; 
    return (
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
                    <NavLink className="nav-link" to="/">
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
                <div className="col-12 col-6">
                    <h1>Juliwill Ventures</h1>
                    <p>We take inspiration from God, and deliver a fantastic service to satisfy our customer wants to the fullest. Our Services is as exceptional as it is wide-ranging as we operate throughout the federation 
                        to offer our patrons the best service they desire!</p>
                </div>
                <div className="col-12 col-sm">
                </div>
            </div>
        </div>
        </header>
        
        
            <div className ="row">
                {this.RenderImages()};
            </div>
            <footer className="footer">
            <div className="container">
                <div className="row">
                     <div className="col-4 offset-1 col-sm">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
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

export default withRouter(Home);

/*
    <nav className="navbar navbar-dark navbar-expand-sm  fixed-top">
         <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <a className="navbar-brand mr-auto" href="#">JV</a>
        <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav mr-auto boom">
            <li className="nav-item active"><a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> Home</a> </li>
            <li className="nav-item "><a className="nav-link" href="/about"><span className="fa fa-info fa-lg"></span> About</a> </li>
            <li className="nav-item"><a className="nav-link" href="/contact"><span className="fa fa-address-card fa-lg"></span> Contact</a> </li>
        </ul>
        </div>
     </div>
     </nav>

*/ 