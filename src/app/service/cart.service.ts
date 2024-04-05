import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductList } from '../components/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartaItems$=new BehaviorSubject<ProductList[]>([])
  public subTotal$=new BehaviorSubject<number>(0)
  public totalItems$=new BehaviorSubject<number>(0)
  public CartProducts:ProductList[]=[]

addProduct(product:ProductList){
  console.log("insdie service sdd product");
  
  this.CartProducts.push(product)
  console.log("cart products ",this.CartProducts);
  this.mapTotal()
}

removeProduct(id:number){
  
  console.log(id);
  
  if(this.CartProducts.length>1){
    console.log("inside iff");
console.log(  this.CartProducts );
  
  this.CartProducts.splice(id,1) 
  }
  else if(this.CartProducts.length==1){
    this.CartProducts=[]
  }
  this.mapTotal()

  console.log("total item in the cart",this.CartProducts.length);
  
}


private mapTotal(){
  const total=this.CartProducts.reduce((acc:any,curr:any)=>{

    
    
    return acc+=curr.price
  },0)


  this.subTotal$.next(total)
  this.cartaItems$.next(this.CartProducts)
  this.totalItems$.next(this.CartProducts.length)
}



}
