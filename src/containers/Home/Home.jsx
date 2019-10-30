import React, { Component } from 'react';
import './home.css';
import '../global.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import actionMain from '../../store/actions/actionMain';
import { withRouter } from "react-router-dom";





// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
    //recieving user data from redux
    loggedInUserInfo: state.Loged_in_user_info,
  };
}

function mapDispatchToProps(dispatch) {
   return {
     //signup dialog open
     signupDialogOpen : function (){
      return dispatch(actionMain.Signup_popup_open_meh());
    },   
  };
}



const styles = theme => ({
    button:{
        fontFamily : 'Anton',
        fontSize  : '18pt',
        letterSpacing: '0px',
        textTransform: 'none',
        padding:"6px 6px",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
            fontSize  : '18px',
          },
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize  : '17px',
            fontWeight : '800',
            marginRight: '-2px',
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            fontSize  : '15px',
            padding:"6px 3px",
          },
    },
    button2:{
        border:'3px solid',
        borderRadius: '0px',
        padding:"0px 6px",
        margin:'30px 0px 0px 0px',
    },
})


class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="home-con">
            <h2 className='big-font home-h2'>AcmeTools Grouper</h2>
            <p className='small-font home-p home-font'>Automatically create group clips for multi camera shoots from your synchronised sequence in seconds</p>
            <h2 className='big-font home-h2'>How?</h2>
            <p className='small-font home-p home-font .home-font2'>upload an AAF file of your synchronised sequence and we will output you a grouped AAF file for Avid Media Composer</p>
            {this.props.loggedInUserInfo.user_is_logged_in === false &&
           <Button onClick={this.props.signupDialogOpen} color="secondary" variant="contained" className={classNames(classes.button, classes.button2)} >Click here to start grouping</Button>
            }
             {this.props.loggedInUserInfo.user_is_logged_in === true &&
           <Button onClick={()=>{ this.props.history.push('/grouper');}} color="secondary" variant="contained" className={classNames(classes.button, classes.button2)} >Click here to start grouping</Button>
            }
           </div>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    )(withStyles(styles)(Home)));
