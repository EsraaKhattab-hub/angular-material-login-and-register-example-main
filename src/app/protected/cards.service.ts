import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }
  GetCards(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  GetOneCard(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }
  DeleteCard(id:any){
    return this.http.delete('https://fakestoreapi.com/products/'+id);
  }
  CreateCard(data:any){
    return this.http.post('https://fakestoreapi.com/products',data);
  }
}
