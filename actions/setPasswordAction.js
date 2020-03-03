import * as setPasswordAction from '../actionConstants/setPasswordConstants';

const setPassword = (token, user) => {
  return {
    type: setPasswordAction.setPasswordAPICall,
    confirmationToken: token,
    userPasswordDetails: user,
  };
};

export default setPassword;
