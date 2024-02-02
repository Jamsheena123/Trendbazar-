import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public is_authenticated=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post("http://127.0.0.1:8000/api/signup/",data)
  }
  getToken(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data).pipe(tap(data=>this.is_loggedIn()))
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

  retrieveProduct(id:number){
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

  addToCart(id:number,data:any){
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
  
  cartList(){
    if("token" in
     localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
          "Authorization": token,
          "Content-Type": "application/json"
      })
      return this.http.get("http://127.0.0.1:8000/api/baskets/",{headers})
    }
    else{
      return new Observable()
    }

  }
  
  is_loggedIn(){
    this.is_authenticated.next("token" in localStorage?true:false)
  }

}
