import React,{Component} from 'react';

import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
//import ContactsNew from './ContactComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { actions} from 'react-redux-form';
import { connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


const mapStateToProps = state =>{
  return{ images: state.images}


};

const mapDispatchToProps=dispatch=>{
 return{ fetchPosts: ()=>{dispatch(fetchPosts())},

 resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}
}
};

class Main extends Component{

  componentDidMount(){
    this.props.fetchPosts();

}

  render(){
      return(
          <div>
              
              
              <BrowserRouter>
              <Switch>
                <Route exact path="/" component={()=> <Home images={this.props.images}/>}/>

                <Route path="/about" component={About}/>
                <Route path="/contact" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
            </Switch>
          </BrowserRouter> 
              
         </div>
    
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
    
    
    
  
