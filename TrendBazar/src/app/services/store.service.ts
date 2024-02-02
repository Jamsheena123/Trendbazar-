import { HttpClient,HttpHeaders, } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public isauthenticated=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) {

   }
   signup(data:any){
    return this.http.post("http://127.0.0.1:8000/api/signup/",data)
   }

   gettoken(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data).pipe(tap(data=>this.isloggedin()))
   }

   getProducts(){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get("http://127.0.0.1:8000/api/products/",{headers})
    }
    else{
      return new Observable()
    }
  }

  retrieveproducts(id:number){
    if("token" in localStorage){
    let token:any=localStorage.getItem("token")
    let headers=new HttpHeaders({
        "Authorization": token,
        "Content-Type": "application/json"
    })
    return this.http.get(`http://127.0.0.1:8000/api/products/${id}/`,{headers})
  }
  else{
    return new Observable()
  }

}

addtocart(id:number,data:any){
if("token" in localStorage){
  let token:any=localStorage.getItem("token")
  let headers=new HttpHeaders({
      "Authorization": token,
      "Content-Type": "application/json"
  })
  return this.http.post(`http://127.0.0.1:8000/api/products/${id}/add_to_basket/`,data,{headers})
}
else{
  return new Observable()
}
}

cartlist(){
  if("token" in localStorage){
    let token:any=localStorage.getItem("token")
    let headers=new HttpHeaders({
        "Authorization": token,
        "Content-Type": "application/json"
    })
    return this.http.get(`http://127.0.0.1:8000/api/baskets/`,{headers})
  }
  else{
    return new Observable()
  }
}
isloggedin(){
  this.isauthenticated.next("token" in localStorage?true:false)
}


}
   

   
  


