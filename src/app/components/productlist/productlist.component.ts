import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Product, ProductList } from '../model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})


export class ProductlistComponent {


productApi:ApiService=inject(ApiService)
cart:CartService=inject(CartService)

products:ProductList[]=[]
viewmore:boolean=false
loader:boolean=false
ngOnInit(){
 this.listProducts()
}


listProducts(){
  this.loader=true
  this.productApi.listProducts().subscribe({
      next:(response:Product[])=>{
    this.products=response
    this.loader=false
      },
    error:(error)=>{
      console.log(error);
      
    }})}


    addItem(id:number){
const product=this.products.filter((item)=>item.id==id)
this.cart.addProduct(product[0])

    }


    viewMore(){
      this.viewmore=!this.viewmore
    }

}