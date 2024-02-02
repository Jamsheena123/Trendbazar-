import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:StoreService){

  }
  title = 'trendbazar';
  islogged:boolean=false


  ngOnInit(): void {
    this.service.isauthenticated.subscribe(res=>this.islogged=res);
   
    
   
    
  }
}

