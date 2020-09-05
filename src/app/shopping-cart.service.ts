import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from './models/products';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { 
    
  }
  private create()
  {
   return this.db.list('/shopping-carts').push({
      dateCreated : new Date().getTime()
    });
  }
 getCart(cartId:string){
  return this.db.object('/shopping-carts' + cartId);

}
getItem(cartId:string ,productId:string){
  return  this.db.object('/shopping-carts/' + cartId + '/items' +productId);
}
 private async getorCreateCartId(){



    let cartId= localStorage.getItem('cartId');
    if(cartId) return cartId;
    
      let result =await this.create();
      localStorage.setItem('cartId',result.key);
      return result.key;
     
    
  
  }
   async addToCart(product:Products)
   
   {
     let cartId =  await this.getorCreateCartId();
     let items$ = this.getItem(cartId , product.key);
     items$.valueChanges().pipe(take(1)).subscribe(items=>
      {
        if (items) {
          items$.update({quantity: items['quantity'] + 1});
        } else {
          items$.set({ product, quantity: 1 });
        }
      })


   }

  
}
