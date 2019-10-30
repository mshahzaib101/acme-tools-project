import actionMain from '../actions/actionMain'

const INITIAL_STATE = {
    //all data of logged user
    Loged_in_user : {},
    user_is_logged_in: false,
  }



  function Loged_in_user_info(state = INITIAL_STATE, action) {
    switch (action.type) {  
    case actionMain.logged_in_user_info_var:
      return Object.assign({}, state, { Loged_in_user: action.payload, user_is_logged_in: true});
    case actionMain.Delete_logged_in_user_info_var:
      return Object.assign({}, state, { Loged_in_user: {}, user_is_logged_in: false});
 
    default:
      return state
    }
  }
  
  export default Loged_in_user_info;