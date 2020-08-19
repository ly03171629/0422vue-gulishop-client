import { v4 as uuidv4 } from 'uuid';

export function getUserTempId(){
  let userTempId = localStorage.getItem('USERTEMPID_KEY')
  if(!userTempId){
    userTempId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    localStorage.setItem('USERTEMPID_KEY',userTempId)
  }
  return userTempId
}