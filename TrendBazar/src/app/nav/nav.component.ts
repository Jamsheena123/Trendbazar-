import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { CartlistComponent } from '../cartlist/cartlist.component';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  Cartitemcount:number=0
  constructor(private service:StoreService,private router:Router){
    

  }
ngOnInit(): void {
  this.service.cartlist().subscribe((data:any)=>this.Cartitemcount=data.basket_item_count)
  
}
signout(){
  localStorage.removeItem("token")
  this.router.navigateByUrl("")
  

}
}
