import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '../../environments/environment';
import { Config } from '../services/config';

@Injectable({
  providedIn: 'root'
})

export class UsermanagementService {


  private BASE_URL:string = env.APIURL + '/admin/users-list?page=';
  config = new Config;
    constructor(private http: Http) { }

    addDriver(data) {
        console.log(data)
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
         let headers: Headers = new Headers();
         headers.append("sessionToken", currentUser.sessionToken); 
         headers.append("Content-Type", "application/json");
         const uri = env.APIURL + '/admin/add-user';
      
        return this
            .http
            .post(uri, data,  {headers: headers})
            .map((res: Response) => {
                console.log(res)
                return res.json()
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    updateDriver(data) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
         headers.append("sessionToken", currentUser.sessionToken); 
         headers.append("Content-Type", "application/json");
         const uri = env.APIURL + '/admin/edit-user/'+ data.id;
         return this
            .http
            .post(uri, data,  {headers: headers})
            .map((res: Response) => {
                console.log(res)
                return res.json()
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }


   
    public getdataarchive(page:Number):any{
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
       // const uri = env.APIURL + '/admin/users-list';
		return this.http.get(`${this.BASE_URL}${page}`+'&active=5', {headers: headers})
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
    }

    public getdata(page:Number, data):any{
        console.log(data)
        const uri = env.APIURL + '/admin/users-list?page=';
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
       // const uri = env.APIURL + '/admin/users-list';
		return this.http.get(`${uri}${page}${data}`, {headers: headers})
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
    }
    
    public getsystemdata(page:Number):any{
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
         const uri = env.APIURL + '/admin/customers?page=';
		return this.http.get(`${uri}${page}`, {headers: headers})
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
    }
    
   
    
    changeProfilePicture(event) {
      console.log(event)
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let headers: Headers = new Headers();
          headers.append("sessionToken", currentUser.sessionToken); 
        //  headers.append("Content-Type", "application/json");
        //  headers.append("Content-Type", "multipart/form-data");
        const uri = env.APIURL +'/admin/upload-image';
       // const uri = 'http://devadmin.jhaiho.com/api/admin/upload-image';
        const fileList: FileList = event.files;
        if (fileList.length > 0) {
            const file = fileList[0];
    
            const formData = new FormData();
            formData.append('image', file, file.name);
         
            return this
            .http
            .post(uri, formData, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
           
        }
    }

  /*  UploadGallery(event) {
        console.log(event)
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let headers: Headers = new Headers();
            headers.append("sessionToken", currentUser.sessionToken); 
          //  headers.append("Content-Type", "application/json");
          //  headers.append("Content-Type", "multipart/form-data");
          const uri = env.APIURL +'/admin/upload-image';
         // const uri = 'http://devadmin.jhaiho.com/api/admin/upload-image';
          const fileList: FileList = event.files;
          if (fileList.length > 0) {
              const file = fileList[0];
              let file = [];
               for(let i=0; i < fileList.length; i++){
                file.push(fileList[i]);
               }
               console.log(file)
              const formData = new FormData();
              formData.append('images', file, file.name);
           
              return this
              .http
              .post(uri, formData, {headers: headers})
              .map((res: Response) => {
                  return res.json();
              })
              .catch((error: Response) => {
                  error = error.json();
                  return Observable.throw(error);
              });
             
          }
      }

*/
    getDriversfilter(a) {
      
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/users-list?status='+a;
        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }


   
    getDriverDetail(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/user-detail/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
    
    /**
     *SBO functions starts
     *
     * @param {*} driverid
     * @returns
     * @memberof UsermanagementService
     */

    getsbo_customer_Detail(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/customers-list/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

    getsbo_login_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/login-information/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
    
    getsbo_appointment_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/appointment-information/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

    get_customer_appoinments_info(driverid) {
      
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/customer-appointment/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
               // console.log(res.json());
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
  
     
    // SBO ACTIVITY LOG 14/07/2018

    getSBOActivityLog(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/sbo-activity/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
    
    getsbo_reviews_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/reviews-list/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

    getsbo_appointments_list(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/appointments-list/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                console.log(res)
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
    getsbo_appointments_with_customer_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/appointments-with-customer/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
   
    getsbo_gallery_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/gallery-list/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

    getsbo_customer_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/customer-information/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

    getsbo_profile_info(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/profile-details/' + driverid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }
    getappointment_with_customer(driverid,customerid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/user/appointments-with-customer/' + driverid + '?customerId=' + customerid;

        return this
            .http
            .get(uri, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
            
    }

  
/**
 *SBO fuction end
 * 
 * @param {*} driverid
 * @returns
 * @memberof UsermanagementService
 */
  
 /**
  * For permanent delete  user
  */

    removeDriverp(driverid) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
         headers.append("sessionToken", currentUser.sessionToken); 
         headers.append("Content-Type", "application/json");

        const uri = env.APIURL + '/admin/delete-user/' + driverid;
        return this
            .http
            .delete(uri,{headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }

  /**
   * For Archive User 
   * @param driverid 
   * @param rval 
   */
    removeDriver(driverid,rval) {       
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));       // console.log(currentUser)              
        let headers: Headers = new Headers();       
        headers.append("sessionToken", currentUser.sessionToken);       
        headers.append("Content-Type", "application/json");      
        const uri = env.APIURL + '/admin/delete-user/' + driverid;      
        return this.http.patch(uri,{reason:rval},{headers:headers}).map((res: Response)=> {               
            return res.json();   
            })
            .catch((error: Response) => {
            error = error.json();               
            return Observable.throw(error);         
            });    
        }

     /**
   * For Archive User 
   * @param driverid 
   * @param rval 
   */

   recoverUser(driverid) {       
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));       // console.log(currentUser)              
     let headers: Headers = new Headers();       
     headers.append("sessionToken", currentUser.sessionToken);       
     headers.append("Content-Type", "application/json");      
     const uri = env.APIURL + '/admin/recover-user/' + driverid;      
     return this.http.patch(uri,{reason:" "},{headers:headers}).map((res: Response)=> {               
         return res.json();   
         })
         .catch((error: Response) => {
         error = error.json();               
         return Observable.throw(error);         
         });    
     }

  /**
   * Block User 
   * @param driverid 
   */
        blockUser(driverid) {   
           
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));       // console.log(currentUser)              
             let headers: Headers = new Headers();       
             headers.append("sessionToken", currentUser.sessionToken);       
             headers.append("Content-Type", "application/json");      
             const uri = env.APIURL + '/admin/block-user/' + driverid;      
             return this.http.patch(uri,{reason:" "},{headers:headers})
               .map((res: Response)=> {               
                 return res.json();   
                 })
                 .catch((error: Response) => {
                 error = error.json();               
                 return Observable.throw(error);         
                 });    
             } 

}
