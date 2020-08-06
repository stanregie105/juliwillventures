
import React, {Component} from 'react';
//import { NavbarBrand, Jumbotron} from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
         <footer className="footer">
        <div className="container">
            <div className="row">
                 <div className="col-4 offset-1 col-sm">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm">
                    <h5>Our Address</h5>
                    <address>
                        8, Joseph street<br/>
                        ketu-ijanikin<br/>
                        Lagos.<br/>
                        <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br/>
		              <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br/>
		              <i class="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
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
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
           </div>
        </div>
    </footer>
        

   
        </React.Fragment>
    
        );
    }
}

export default Footer;