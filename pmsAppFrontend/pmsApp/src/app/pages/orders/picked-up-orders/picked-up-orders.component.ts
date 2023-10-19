import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-picked-up-orders',
  templateUrl: './picked-up-orders.component.html',
  styleUrls: ['./picked-up-orders.component.css']
})
export class PickedUpOrdersComponent {

  pickedUpOrders=[];

  constructor(private orderService:OrdersService,private _http:HttpClient){
    this.orderService.viewPickedUpOrders().subscribe(
      (data:any)=>{
        this.orderService=data;
        this.pickedUpOrders=data;
        console.log(this.orderService);
      },);

  }



      //handle error here  

    public sendMail(orderId:any){
      console.log(orderId);
      this.orderService.sendEmail(orderId).subscribe({
        next:(e)=>{
          alert("sent");
        },
        error:(x)=>{
          alert("fail");
        }
      });
    }

  
}

