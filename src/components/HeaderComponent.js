
import React, {Component} from 'react';
//import { NavbarBrand, Jumbotron} from 'reactstrap';

class header extends Component{
    render(){
        return(
            <React.Fragment>
        
        <div>
        <nav className="navbar navbar-dark navbar-expand-sm  fixed-top">
         <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <a className="navbar-brand mr-auto" href="#">JV</a>
        <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav mr-auto boom">
            <li className="nav-item "><a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> Home</a> </li>
            <li className="nav-item active"><a className="nav-link" href="./aboutus.html"><span className="fa fa-info fa-lg"></span> About</a> </li>
            <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-list fa-lg"></span> Menu</a> </li>
            <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-address-card fa-lg"></span> Contact</a> </li>
        </ul>
        </div>
     </div>
     </nav>
        </div >
         <header className="jumbotron">
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Juliwill Ventures</h1>
                    <p>We take inspiration from God, and deliver a fantastic service to satisfy our customer wants to the fullest. Our Services is as exceptional as it is wide-ranging as we operate throughout the federation 
                        to offer our patrons the best service they desire!</p>
                </div>
                <div className="col-12 col-sm">
                </div>
            </div>
        </div>
        </header>

   
        </React.Fragment>
    
        );
    }
}

export default Headers;