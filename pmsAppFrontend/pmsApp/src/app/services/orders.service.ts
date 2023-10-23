import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class OrdersService{

  constructor(private _http:HttpClient) { }

  public viewNewOrders(){
    return this._http.get(`http://40.87.51.93:8001/orders/viewNewOrders`);
        }

        public viewPickedUpOrders(){
          return this._http.get(`http://40.87.51.93:8001/orders/viewPickedUpOrders`);
              }

              public placeOrder(Orders:any){
                return this._http.post(`http://40.87.51.93:8001/orders/add`,Orders);
              }

              public getOrderById(orderId:any){
                return this._http.get(`http://40.87.51.93:8001/orders/getOrdersById/${orderId}`,orderId);

              }

              public getMyOrdersByDocName(fullName:any){
                return this._http.get(`http://40.87.51.93:8001/orders/getMyOrdersByDocName/${fullName}`,fullName);
              }

              public viewVerifiedOrders(){
                return this._http.get(`http://40.87.51.93:8000/supplier/viewAvailableOrders`);
              }

              public pickUpOrder(orderId:any,supplierId:any){
                return this._http.put(`http://40.87.51.93:8000/supplier/pickUpOrder/${orderId}/${supplierId}`,orderId,supplierId);
              }

              public sendEmail(orderId:any){
                return this._http.get(`http://40.87.51.93:8005/emails/send-email/${orderId}`);
              }



}
