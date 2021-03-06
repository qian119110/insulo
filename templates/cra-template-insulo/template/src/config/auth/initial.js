import {setCredentials, clearCredentials } from './setCredentials';

const init =  { 
  setCredentials,         
  clearCredentials,       
  redirectWhenInvalidCredentails: false,
  saveAuthValues: true,          // if you don't need to preserve the ceredentials after page refresh, set this value to false
  saveAuthValuesDecode: ({authValuesStr}) => JSON.parse(authValuesStr),
  saveAuthValuesEncode: ({authValues}) => JSON.stringify(authValues)
};

export default init;