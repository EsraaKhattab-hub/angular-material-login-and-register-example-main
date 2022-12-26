import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { CardsService } from '../cards.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  cards:object | any;
  id:any;
  title:string | undefined;
  description:string | undefined;
  price:number | undefined;
  card:any;
  // // isView:false | undefined;

  constructor(
    private router: Router ,
    private data: CardsService ,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.data.GetCards().subscribe(
      (      data: object | undefined) => this.cards=data);
    
      
  }
  addItem() {
    let card = {
      title: this.title ="Card1",
      price:this.price =23, 
      description: this.description ="ggggggggggggggggggggggggggggggg",
    };
    this.data.CreateCard(card).subscribe(
      (response) => {
        this.cards.push(response);
      },
      (err) => {
        console.log(err);
      }
    );
   }
  
  ViewItem(id:any){
    this.data.GetOneCard(id)
    .subscribe(
      (response) => {
        console.log(response);
        this.card.isView=true;
      },
      (err) => {
        console.log(err);
      }
     );
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

  onDeleteProduct(id:any){
   this.data.DeleteCard(id)
   .subscribe(
    (response) => {
      console.log(response);
      const index = this.cards.findIndex((x: { id: any; }) => x.id == id);
      this.cards.splice(index, 1);
    },
    (err) => {
      console.log(err);
    }
   );
  }
 }

