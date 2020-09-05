import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../categories.service';
import { ProductService } from './../../product.service';
import { Validators, FormsModule } from '@angular/forms';
import{FormControl, FormGroup,} from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  categories$;
product :any= {};
id:string;
 

  constructor(private router: Router,
    private route:ActivatedRoute,
    private catoryService:CategoriesService, 
    private productService:ProductService) { 
    this.categories$= catoryService.getCategoris();
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
  
    }
save(product){
  if(this.id) this.productService.update(this.id ,product); 
else this.productService.create(product);
 this.router.navigate(['admin/products']);
}
delete(){
  if (!confirm("Are you realiy want to delete the product")) return;
  this.productService.delete(this.id);
  this.router.navigate(['admin/products']);
}







  ngOnInit() {
  }

}
