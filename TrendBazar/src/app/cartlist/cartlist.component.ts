import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  basket:any
  constructor(private service:StoreService){
   
    

  }
  ngOnInit(): void {
    this.service.isloggedin()
    this.service.cartlist().subscribe(data=>this.basket=data)
  }
}
