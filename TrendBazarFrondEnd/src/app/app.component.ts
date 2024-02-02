import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TrendBazarFrondEnd';
  islogged:boolean=false

  constructor(private service:StoreService){

  }

  ngOnInit(): void {
      this.service.is_authenticated.subscribe(res=>this.islogged=res)
  }

}
