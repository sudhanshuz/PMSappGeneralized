import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http:HttpClient) { }

  public viewSuppliers(){
    return this._http.get(`${baseUrl}:8000/supplier/getAll`);
        }

        public addSuppliers(Supplier:any){
          return this._http.post(`${baseUrl}:8000/supplier/add`,Supplier);
              }

              public deleteSupplier(supplierId:any){
                return this._http.delete(`${baseUrl}:8000/supplier/delete/${supplierId}`,supplierId);
              }

              public viewSupplierByName(supplierName:any){
                return this._http.get(`${baseUrl}:8000/supplier/viewSupplierByName/${supplierName}`,supplierName);
              }

              public editSupplier(Supplier:any){
                return this._http.put(`${baseUrl}:8000/supplier/edit`,Supplier);
              }

              public viewSupplierById(supplierId:any){
                return this._http.get(`${baseUrl}:8000/supplier/viewSupplierById/${supplierId}`,supplierId);
              }

              public pickupOrder(orderId:any,supplierId:any){
                return this._http.put(`${baseUrl}:8000/supplier/pickUpOrder/${orderId}/${supplierId}`,orderId,supplierId);
              }
}
