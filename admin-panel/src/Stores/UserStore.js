import {extendObservable} from 'mobx';

/**
 * UserStore
 */

 class UserStore{
     constructor(){
         extendObservable(this,
            {
                Loading:true,
                isLoggedIn:false,
                username:''
            })
     }
 }

 export default new UserStore();