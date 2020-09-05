import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from './models/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase) { }
  getCategoris(){
    return this.db.list('/categories').snapshotChanges().pipe(map(actions=>{
      return actions.map(action=>({key: action.key, ...action.payload.val() as Products}));
    }));;

  }
}
