import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { CategoriesService } from './../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from './../shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent  {
products:Products[]=[];
fliteredproducts:Products[]=[];
categories$;
category:string;
  constructor(
    private shoppingCart:ShoppingCartService,
    route:ActivatedRoute,
     productservice:ProductService , 
     categoriesService:CategoriesService,
    private db:AngularFireDatabase) 
     {
     productservice.getAll()
     .pipe(switchMap(products=>{
      this.products=products
    return route.queryParamMap}))
           .subscribe(params=>{
      this.category = params.get('category');
   
      this.fliteredproducts= (this.category)?
      this.products.filter(p=>p.category===this.category):
      this.products;
    });

    this.categories$=categoriesService.getCategoris();

    

   }
   addtocart(product:Products){
this.shoppingCart.addToCart(product); 
     
    
   }
getquantity(){
//  let quantity=this.shoppingCart.getItem();
  
}
   

}
