import React, { Component } from 'react';
import logo from '../../images/logo-min.png';
import {Link} from "react-router-dom";
import './Navbar.css';
import '../global.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import actionMain from '../../store/actions/actionMain';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withRouter } from "react-router-dom";
import InputAdornment from '@material-ui/core/InputAdornment';
import astrick from '../../images/redasterisk.png';



//for redux


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
    //recieving user data from redux
    loggedInUserInfo: state.Loged_in_user_info,
    //sign up popup
    signupPopup: state.Signup_Popup.openPopup,
  };
}

function mapDispatchToProps(dispatch) {
   return {
     //sending token to redux
      logged_in : function (value){
          return dispatch(actionMain.logged_in_user_info_meh(value));
        },      
    //logout
      logged_out : function (){
        return dispatch(actionMain.Delete_logged_in_user_info_meh());
      },  
     //signup dialog open
     signupDialogOpen : function (){
      return dispatch(actionMain.Signup_popup_open_meh());
    },  
     //signup dialog close
     signupDialogClosed : function (){
      return dispatch(actionMain.Signup_popup_close_meh());
    },  
  };
}



//signup/login form checker array
var signupChecker = [true,true];
var loginChecker = [true,true]
const styles = theme => ({
    button:{
        fontFamily : 'Anton',
        fontSize  : '18pt',
        letterSpacing: '0px',
        marginRight: '4px',
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
        padding:"1px 6px",
    },
    button3:{
      border:'2px solid',
      borderRadius: '0px',
      padding:"2px 6px",
  },
  button4:{
    padding:"2px 20px",
    margin:'15px 0px 0px 0px'
  },
    textField:{
      fontFamily:"OpenSans",
      border:'1px solid',
      backgroundColor:"#ffffff",
      width:'60%',
      padding:'0px 4px',
      ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
        width:'50%',
        height:'20px',
      },
      ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
        width:'46%',
      },
    },
    textField2:{
      fontFamily:"OpenSans",
      border:'1px solid',
      backgroundColor:"#ffffff",
      width:'60%',
      padding:'0px 4px',
      ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
        height:'20px',
      },
    },
    textField3:{
      padding:'0px 0px',
      fontFamily:"OpenSans",
      border:'1px solid',
      backgroundColor:"#ffffff",
      width:'60%',
      padding:'0px 4px',
      ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
        width:'50%',
        height:'20px',
      },
      ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
        width:'46%',
      },
    },
    textField2:{
      fontFamily:"OpenSans",
      border:'1px solid',
      backgroundColor:"#ffffff",
      width:'60%',
      ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
        height:'20px',
      },
    }
   
});

//validation check
var emailChecker = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupDialogOpen: this.props.signupPopup,
            signupEmail:'',
            signupPassword:'',
            signupName:'',
            signupPhoneno:'',
            signupCountry:'',
            signupColor:['black','black'],
            snackbar: false,
            snackbarText:'',
            loginDialogOpen: false,
            loginEmail:'',
            loginPassword:'',
            loginColor:['black','black'],
            loginEmailPlacholder:'',
            loginPassPlacholder:'',
            signSubmitDisplay:'inline-block',
            signupLoaderDisplay:'none',
            loginSubmitDisplay:'inline-block',
            loginLoaderDisplay:'none',
            signupMsgDialogOpen: false,
            logoutMenu: false,
            showAstricEmail: '0px',
            showAstricPass: '0px',
            msgDialog1:'',
            msgDialog2:'',

        }
    }

    snackbarhandleClick = () => {
      this.setState({ snackbar: true });
    };
  
    snackbarhandleClose = () => {
      this.setState({ snackbar: false });
    };
  

    signupDialogOpen = () => {
      this.props.signupDialogOpen();      };
    
    signupDialogClose = () => {
      this.props.signupDialogClosed();
      };

    signupMsgDialogOpen = () => {
      this.setState({ signupMsgDialogOpen: true });

      };
    
    signupMsgDialogClose = () => {
        this.setState({ signupMsgDialogOpen: false });
      };

    loginDialogOpen = () => {
        this.setState({ loginDialogOpen: true });
      };
    
    loginDialogClose = () => {
        this.setState({ loginDialogOpen: false });
      };

    signupEmailHandler = (ev) => {
      this.setState({signupEmail: ev.target.value})
    }

    signupPasswordHandler = (ev) => {
      this.setState({signupPassword: ev.target.value})
    }

    signupNameHandler = (ev) => {
      this.setState({signupName: ev.target.value})
    }

    signupPhonenoHandler = (ev) => {
      this.setState({signupPhoneno: ev.target.value})
    }

    signupCountryHandler = (ev) => {
      this.setState({signupCountry: ev.target.value})
    }

    signupSubmit = () => {

          //for password check
          if(this.state.signupPassword.length < 6) {
            let signupArrayColor = this.state.signupColor;
            signupArrayColor[1] = '#ff0000';
            this.setState({showAstricPass:'25px',signupColor : signupArrayColor, snackbarText: 'Password length should be more then 6'});
            this.snackbarhandleClick();
            signupChecker[1] = false;
          }else{
            let signupArrayColor = this.state.signupColor;
            signupArrayColor[1] = 'black';
            this.setState({showAstricPass:'0px',signupColor : signupArrayColor});
            signupChecker[1] = true;
          }

       
         //for email check
         let emailVal= emailChecker.test(this.state.signupEmail)
         if(emailVal === false) {
           let signupArrayColor = this.state.signupColor;
           signupArrayColor[0] = '#ff0000';
           this.setState({showAstricEmail:'25px',signupColor : signupArrayColor, snackbarText: 'Email is not Valid'});
           this.snackbarhandleClick();
           signupChecker[0] = false;
         }else{
           let signupArrayColor = this.state.signupColor;
           signupArrayColor[0] = 'black';
           this.setState({showAstricEmail:'0px',signupColor : signupArrayColor});
           signupChecker[0] = true;
         }

         if(signupChecker[0] === true && signupChecker[1] === true ){
          // console.log(signupChecker)
          this.setState({
            signSubmitDisplay:'none',
            signupLoaderDisplay:'inline-block',
          })
          //api
          let payload = {"email": this.state.signupEmail, "password": this.state.signupPassword, "firstName": this.state.signupName, "country": this.state.signupCountry, "phoneNo": this.state.signupPhoneno};
          fetch(`https://api.acmetools.tv/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(response => {
          this.setState({
            signSubmitDisplay:'inline-block',
            signupLoaderDisplay:'none',
          })
          // console.log('Success:', response)
          if(response.name === "BadRequest"){
            // console.log('failed')
            //making email label red
            let signupArrayColor = this.state.signupColor;
            signupArrayColor[0] = '#ff0000';
            this.setState({
              showAstricEmail:'0px',
              showAstricPass:'0px',
              signupColor : signupArrayColor,
              signSubmitDisplay:'inline-block',
              signupLoaderDisplay:'none',
              snackbarText: response.errors[0].message,
            })
            this.snackbarhandleClick();

        
        }else{
            if(response.id.length !== 0){
              this.signupDialogClose();
              this.setState({msgDialog1:'A confirmation email has been sent to you',msgDialog2:'Thanks for signing up'})
              this.signupMsgDialogOpen();
            }
          }
        })
        .catch(error => {
          this.setState({
            signSubmitDisplay:'inline-block',
            signupLoaderDisplay:'none',
            snackbarText: 'Network Error'
          })
          this.snackbarhandleClick();
          // console.error('Error:', error)
        });
        }
       
      
    }

    loginEmailHandler = (ev) => {
      this.setState({loginEmail: ev.target.value})
    }

    loginPasswordHandler = (ev) => {
      this.setState({loginPassword: ev.target.value})
    }

    loginSubmit = () => {
         //for password check
         if(this.state.loginPassword.length < 6) {
          let signupArrayColor = this.state.loginColor;
          signupArrayColor[1] = '#ff0000';
          this.setState({loginColor : signupArrayColor, snackbarText: 'Password length should be more then 6', loginPassPlacholder:'Wrong Password'});
          this.snackbarhandleClick();
          loginChecker[1] = false;
        }else{
          let signupArrayColor = this.state.loginColor;
          signupArrayColor[1] = 'black';
          this.setState({loginColor : signupArrayColor});
          loginChecker[1] = true;
        }

     
       //for email check
       let emailVal= emailChecker.test(this.state.loginEmail)
       if(emailVal === false) {
         let signupArrayColor = this.state.loginColor;
         signupArrayColor[0] = '#ff0000';
         this.setState({loginColor : signupArrayColor, snackbarText: 'Email is not Valid', loginEmailPlacholder:'Fill out an email'});
         this.snackbarhandleClick();
         loginChecker[0] = false;
       }else{
         let signupArrayColor = this.state.loginColor;
         signupArrayColor[0] = 'black';
         this.setState({loginColor : signupArrayColor});
         loginChecker[0] = true;
       }

       if(loginChecker[0] === true && loginChecker[1] === true ){
        // console.log(loginChecker)
        this.setState({
          loginSubmitDisplay:'none',
          loginLoaderDisplay:'inline-block',
        })

       //login api
       let payload = {"email": this.state.loginEmail, "password": this.state.loginPassword,"strategy": "local"};
       fetch(`https://api.acmetools.tv/authentication`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload)
     })
     .then(res => res.json())
     .then(response => {
       this.setState({
        loginSubmitDisplay:'inline-block',
        loginLoaderDisplay:'none',
       })
        // console.log('Success:', response)
        if(response.accessToken){
          // console.log('sucess')
          this.loginDialogClose();
            //changig route to /grouper
            this.props.history.push('/grouper');
          //sending token to Redux store and changing navbar display
          this.tokenSender(response.accessToken);
        }
        else{
          //making email/pass label red
          let loginArrayColor = this.state.signupColor;
          loginArrayColor[0] = '#ff0000';
          loginArrayColor[1] = '#ff0000';
          this.setState({
           loginColor : loginArrayColor,
           loginSubmitDisplay:'inline-block',
           loginLoaderDisplay:'none',
           snackbarText: 'Email or Password is Incorrect',
          })
          this.snackbarhandleClick();
        }
     })
     .catch(error => {
       this.setState({
        loginSubmitDisplay:'inline-block',
         loginLoaderDisplay:'none',
         snackbarText: 'Network Error'
       })
       this.snackbarhandleClick();
      //  console.log('Error:', error)
     });
     
      }
    }
    
    tokenSender = (token) => {
    

      // console.log('called',token)
      let userData = {
        token: token,
        email: this.state.loginEmail
      }
      this.props.logged_in(userData)
    }

   

    logoutMenuClose = (event) => {
      if (this.anchorEl.contains(event.target)) {
        return;
      }
  
      this.setState({ logoutMenu: false });
    }

    logoutMenuOpen = (ev) => {
      this.setState({logoutMenu: !this.state.logoutMenu})
    }

    logoutUser = (ev) => {
      this.props.logged_out();
       //changig route to /
       this.props.history.push('/');

      this.logoutMenuClose(ev);

    }

    render() {
      const { classes } = this.props;
      return (
          <div className='nav-container'>
                            
                            <div className="App-logo-con">
                            <Link className="link-tag" to="/" > 
                            <img src={logo} className="App-logo" alt="logo" />
                            </Link>
                            </div>
                            
                              <div className="nav-btns">
                             
                              <h4 className="btn-h4-tag"><Link className="link-tag" to="/about" ><Button color="primary" className={classes.button}>About</Button></Link></h4>
                              <h4 className="btn-h4-tag"><Link className="link-tag" to="/contactus" ><Button color="primary" className={classes.button}>Contact</Button></Link></h4>
                              {this.props.loggedInUserInfo.user_is_logged_in === false &&
                              <h4 className="btn-h4-tag"><Button onClick={this.loginDialogOpen} color="primary" className={classes.button}>Log In</Button></h4>
                              }
                              {this.props.loggedInUserInfo.user_is_logged_in === false &&
                              <h4 className="btn-h4-tag"><Button onClick={this.signupDialogOpen} color="secondary" variant="contained" className={classNames(classes.button, classes.button2)} >Sign Up</Button></h4>
                              }
                              {this.props.loggedInUserInfo.user_is_logged_in === true &&
                               <h4 className="btn-h4-tag"><Link className="link-tag" to="/grouper"><Button color="primary" className={classes.button}>Grouper</Button></Link></h4>
                              }
                               {this.props.loggedInUserInfo.user_is_logged_in === true &&
                              <h4 className="btn-h4-tag"> <Tooltip title={this.props.loggedInUserInfo.Loged_in_user.email} aria-label="user-email">
                              <Button  buttonRef={node => {
                                this.anchorEl = node;
                              }}
                              aria-owns={this.state.logoutMenu ? 'menu-list-grow' : undefined}
                              aria-haspopup="true"
                               onClick={this.logoutMenuOpen} color="secondary" variant="contained" className={classNames(classes.button, classes.button2)} >{this.props.loggedInUserInfo.Loged_in_user.email.slice(0, 10)}..</Button>
                              
                              </Tooltip>
                              {/* //drop down menue */}
                      <Popper open={this.state.logoutMenu} anchorEl={this.anchorEl} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          id="menu-list-grow"
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={this.logoutMenuClose}>
                            <div className='big-font drop-con'>
                                <div className=' drop1-con'>
                                <p className='drop-p2'>Credits<span className='drop-s1'>42</span></p>
                                <p className='small-font drop-p2'>Contact us to get some more</p>
                             
                                </div>
                                <p className='big-font logoutBtn' onClick={(ev)=>{this.logoutUser(ev);}}>Logout</p>
                            </div>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                              </h4>
                            }
                              </div>
                            
                        
                            

                        {/* //dialogs code */}
                        {/* //signup dialog */}
                        
                         <Dialog
                          open={this.props.signupPopup}
                          onClose={this.signupDialogClose}
                          aria-labelledby="signup-form"
                         
                        >
                        <div className='big-font dialog-con'>
                        <DialogTitle id="sign-up" >
                        <div className='dialog-logo-con'>
                        <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <p className='big-font sign-up-head'>Click sign up to start grouping</p>
                        </DialogTitle>
                       
                        <div className='signup-form-con'>

                        <div className='input-con-signup'>
                        <label className='label-input-signup' style={{color:this.state.signupColor[0]}} htmlFor='signup-email'>Email</label>
                       <TextField
                        id="signup-email"
                        className={classes.textField3}
                        value={this.state.signupEmail}
                        onChange={this.signupEmailHandler}
                        placeholder='This will be your username'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" >
                             <img width={this.state.showAstricEmail} src={astrick} />
                            </InputAdornment>
                          ),
                        }}
                      />
                        </div>

                        <div className='input-con-signup'>
                        <label className='label-input-signup' style={{color:this.state.signupColor[1]}} htmlFor='signup-Password'>Password</label>
                        <TextField 
                        onChange={this.signupPasswordHandler}
                        id="signup-Password"
                        className={classes.textField}
                        value={this.state.signupPassword}
                        type='password'
                        placeholder='Enter a new password'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" >
                             <img width={this.state.showAstricPass} src={astrick} />
                            </InputAdornment>
                          ),
                        }}
                      />
                        </div>

                        <div className='input-con-signup'>
                        <label className='label-input-signup'  htmlFor='signup-Name'>Name</label>
                        <TextField 
                        onChange={this.signupNameHandler}
                        id="signup-Name"
                        className={classes.textField}
                        value={this.state.signupName}
                      />
                        </div>

                        <div className='input-con-signup'>
                        <label className='label-input-signup'  htmlFor='signup-phno'>Phone Number</label>
                        <TextField 
                        onChange={this.signupPhonenoHandler}
                        id="signup-phno"
                        className={classes.textField}
                        value={this.state.signupPhoneno}
                      />
                      </div>

                      <div className='input-con-signup'>
                        <label className='label-input-signup' htmlFor='signup-Country'>Country</label>
                        <TextField 
                        onChange={this.signupCountryHandler}
                        id="signup-Country"
                        className={classes.textField}
                        value={this.state.signupCountry}
                      />
                       </div> 

                        
                        </div>
                        <div className='signup-dialog-submit'>
                        <CircularProgress style={{display: this.state.signupLoaderDisplay}} className={classes.progress} size={30} />
                        <Button style={{display: this.state.signSubmitDisplay}} onClick={this.signupSubmit} color="secondary" variant="contained" className={classNames(classes.button, classes.button3)} >Sign Up</Button>
                        </div>
                        </div>
                         </Dialog>

                        {/* //dialogs code */}
                        {/* //login dialog */}

                        <Dialog
                          open={this.state.loginDialogOpen}
                          onClose={this.loginDialogClose}
                          aria-labelledby="login-form"
                        >
                        <div className='big-font dialog-con'>
                        <DialogTitle id="login">
                        <div className='dialog-logo-con'>
                        <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <p className='big-font sign-up-head'>Login</p>
                        </DialogTitle>
                       
                        <div className='login-form-con'>

                        <div className='input-con-signup'>
                        <label className='label-input-signup' style={{color:this.state.loginColor[0]}} htmlFor='signup-email'>Email</label>
                        <TextField
                        id="login-email"
                        className={classes.textField2}
                        value={this.state.loginEmail}
                        onChange={this.loginEmailHandler}
                        placeholder={this.state.loginEmailPlacholder}
                      />
                        </div>

                        <div className='input-con-signup'>
                        <label className='label-input-signup' style={{color:this.state.loginColor[1]}} htmlFor='signup-Password'>Password</label>
                        <TextField 
                        onChange={this.loginPasswordHandler}
                        id="login-Password"
                        className={classes.textField2}
                        value={this.state.loginPassword}
                        type='password'
                        placeholder={this.state.loginPassPlacholder}
                      />
                        </div>
                        
                        </div>
                        <div className='login-dialog-submit'>
                        <p className='forget-pass' onClick={()=>{this.loginDialogClose();this.signupMsgDialogOpen();this.setState({msgDialog1:'We have sent a password reset link to your email',msgDialog2:'Thanks'})}}>Forgot your password?</p>
                        <CircularProgress style={{display: this.state.loginLoaderDisplay}} className={classes.progress} size={30} />
                        <Button style={{display: this.state.loginSubmitDisplay}} onClick={this.loginSubmit} color="secondary" variant="contained" className={classNames(classes.button, classes.button3)} >Log In</Button>
                        </div>
                        </div>
                         </Dialog>

                         {/* //dialogs code */}
                        {/* //signup message dialog */}
                        <Dialog
                        open={this.state.signupMsgDialogOpen}
                          onClose={this.signupMsgDialogClose}
                          aria-labelledby="signup-msg"
                        >
                        <div className='big-font dialog-con'>

                        <DialogTitle id="msg-dialog-title" >
                        <div className='dialog-logo-con msgdialog-logo-con'>
                        <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className='msg-dialog-btn'>
                        <IconButton
                            aria-label="Close"
                            color="inherit"
                            onClick={this.signupMsgDialogClose}
                          >
                            <CloseIcon />
                          </IconButton>
                          </div>
                        </DialogTitle>
                       <div className='msg-dialog-content'>
                        <p className='msg-dialog-p'>{this.state.msgDialog1}</p>
                        <p className='msg-dialog-p'>{this.state.msgDialog2}</p>
                        <Button onClick={this.signupMsgDialogClose} color="secondary" variant="contained" className={classNames(classes.button, classes.button3, classes.button4)} >OK</Button>
                        </div>
                       
                        </div>
                         </Dialog>




                         {/* //snackbar code */}
                         <Snackbar
                         key='snackbar-signup'
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                        open={this.state.snackbar}
                        onClose={this.snackbarhandleClose}
                        message={<span id="message-signup">{this.state.snackbarText}</span>}
                        action={
                          <IconButton
                            aria-label="Close"
                            color="inherit"
                            onClick={this.snackbarhandleClose}
                          >
                            <CloseIcon />
                          </IconButton>
                        }
                      />
          
        </div>
      )
    }
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
  )(withStyles(styles)(NavBar)));

