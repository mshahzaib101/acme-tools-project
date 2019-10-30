import actionMain from '../actions/actionMain'

const INITIAL_STATE = {
   openPopup: false,
  }



  function Signup_Popup(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.Signup_popup_open_var:
      return Object.assign({}, state, { openPopup: true});

    case actionMain.Signup_popup_close_var:
    return Object.assign({}, state, { openPopup: false});
 
    default:
      return state
    }
  }
  
  export default Signup_Popup;