import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from './models/products';

import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private db:AngularFireDatabase) { 
   
  }
  create(product){
    this.db.list('/products').push(product);
    console.log(product);
  }
  getAll()
  {
    return this.db.list('/products').snapshotChanges().pipe(map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() as Products}));
    }));;
}


get(projectId){
  return this.db.object('/products/' +projectId);
}
update(projectId, product){
 return  this.db.object('/products/' + projectId).update(product);
}
delete(projectId){
  return this.db.object('/products/' +projectId).remove();
}


}
