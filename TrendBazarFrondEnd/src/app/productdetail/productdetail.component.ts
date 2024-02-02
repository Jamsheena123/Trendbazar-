import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product:any
  id:any
  qty:number=1
  constructor(private route:ActivatedRoute,private service:StoreService,private router:Router){
    this.id=this.route.snapshot.params["id"]    
  }

  ngOnInit(): void {
    this.service.is_loggedIn()
    this.service.retrieveProduct(this.id).subscribe(data=>this.product=data)
  }

  addtoBasket(){
    let data={"quantity":this.qty}
    this.service.addToCart(this.id,data).subscribe(data=>console.log(data))
    this.router.navigateByUrl("/products")
  }

}
