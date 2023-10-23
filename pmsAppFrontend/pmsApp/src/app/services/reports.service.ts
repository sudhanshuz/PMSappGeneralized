import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private _http:HttpClient) { }
  public getReports(){
    return this._http.get(`http://40.87.51.93:8004/salesReport/getReports`);
  }

  public deleteReports(id:any){
    return this._http.delete(`http://40.87.51.93:8004/salesReport/delete/${id}`,id);
  }

  public addTodaysReports(date:any){
    return this._http.get(`http://40.87.51.93:8004/salesReport/addSalesByDate/${date}`,date);

}
public printPdf(sales:any){
  return this._http.post(`http://40.87.51.93:8004/salesReport/pdf`,sales,{responseType:'arraybuffer'});
}
}
