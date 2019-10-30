
export default class actionMain {

    // static properties to be used in reducer for switch cases
    static logged_in_user_info_var = "newUserInfo";
    static Delete_logged_in_user_info_var = "deletenewUserInfo";
    static Signup_popup_open_var = "openSignUpPopup";
    static Signup_popup_close_var = "closeSignUpPopup";



    static logged_in_user_info_meh(value){
        return { 
            type: this.logged_in_user_info_var,
            payload: value
        }
    }
    static Delete_logged_in_user_info_meh(){
        return { 
            type: this.Delete_logged_in_user_info_var,
          
        }
    }
    static Signup_popup_open_meh(){
        return { 
            type: this.Signup_popup_open_var,
          
        }
    }
    static Signup_popup_close_meh(){
        return { 
            type: this.Signup_popup_close_var,
          
        }
    }
  
   
}