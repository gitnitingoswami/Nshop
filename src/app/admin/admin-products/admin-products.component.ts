 import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ProductService } from './../../product.service';
import { SubscriptionLike } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  implements OnInit,OnDestroy {
  products;
  
 
  dtOptions: DataTables.Settings = {};
  subscription:SubscriptionLike;
  filteredProducts:any[];

  constructor(private productService:ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(products => this.filteredProducts= this.products =products
      );

  
  

}
filter(query:string){
  this.filteredProducts =(query) ?
  this.products.filter(p=>p.title.includes(query)):this.products;
}
ngOnDestroy(){
  this.subscription.unsubscribe();

}



ngOnInit() :void{
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5
  }
}

}

  

