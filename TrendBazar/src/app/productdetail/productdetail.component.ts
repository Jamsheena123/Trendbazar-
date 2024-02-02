import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id:any
  qty:number=1
  product:any
  constructor(private route:ActivatedRoute,private service:StoreService,private router:Router){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id)
    
    
  }
  ngOnInit(): void {
    this.service.isloggedin()
    this.service.retrieveproducts(this.id).subscribe(data=>this.product=data)
  }
  addtobasket(){
    let data={"quantity":this.qty}
    this.service.addtocart(this.id,data).subscribe(data=>this.router.navigateByUrl("/products"))
    
  }


}
