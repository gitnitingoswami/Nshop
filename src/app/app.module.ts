import { AdminAuthService } from './admin-auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { CategoriesService } from './categories.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';




import { RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';
import { DataTablesModule } from 'angular-datatables';








import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    AdminProductsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    NavbarComponent,
  
   
  ],
  imports: [


  BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
   
    DataTablesModule,
   
   
 

    NgbModule,
   
    
   RouterModule.forRoot([
     {path:'' ,
     component:HomeComponent
    },
     {path:'products' ,
     component:ProductsComponent
    },
     {path:'shopping-cart' ,
     component:ShoppingCartComponent
    },
     {path:'login' ,
     component:LoginComponent
    },


     {path:'check-out' ,
     component:CheckOutComponent,
      canActivate:[AuthGuardService]
    },
     {path:'order-sucess' ,
     component:OrderSucessComponent ,
      canActivate:[AuthGuardService]
    },
     {path:'my-Orders' ,
     component:MyOrdersComponent, 
      canActivate:[AuthGuardService]
    },


      
      {path:'admin/product/form'
       ,component:ProductFormComponent,
        canActivate:[AuthGuardService,AdminAuthService]
      },
      {path:'admin/products/:id'
      ,component:ProductFormComponent,
       canActivate:[AuthGuardService,AdminAuthService]
     },
     {path:'admin/products' ,
      component:AdminProductsComponent ,
       canActivate:[AuthGuardService,AdminAuthService]
      }, 

      {path:'admin-Orders' ,
      component:AdminOrdersComponent, 
      canActivate:[AuthGuardService,AdminAuthService]},
      

   ])
    
   
  ],
  providers: [AuthService,
  AuthGuardService,
UserService,
AdminAuthService,
CategoriesService,
ProductService,
ShoppingCartService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
