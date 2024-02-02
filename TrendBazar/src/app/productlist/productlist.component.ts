import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  implements OnInit{
  products:any
  constructor(private service:StoreService){

  }
  ngOnInit(): void {
    this.service.isloggedin()
    this.service.getProducts().subscribe(data=>this.products=data
    )
  }

}
