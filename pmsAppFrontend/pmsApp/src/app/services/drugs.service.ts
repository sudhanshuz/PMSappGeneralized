import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
//import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(private _http:HttpClient) {

   }

   public viewDrugs(){
    return this._http.get(`${baseUrl}:8000/drugs/getAll`);
        }

    public addDrugs(Drugs:any){
      return this._http.post(`${baseUrl}:8000/drugs/add`,Drugs); 
    }

    public deleteDrugs(drugName:any){
      return this._http.delete(`${baseUrl}:8000/drugs/deleteDrugByName/${drugName}`,drugName); 
    }
    public viewDrugByName(drugName:any){
      return this._http.get(`${baseUrl}:8000/drugs/viewDrugByName/${drugName}`);
          }

          public editDrugs(Drugs:any){
            return this._http.put(`${baseUrl}:8000/drugs/edit`,Drugs);
          }


          public addDrugsWithImg(Drugs:any,file:any){
            let formData=new FormData();
            formData.append("file",file);
            formData.append("drugData",JSON.stringify(Drugs));
            return this._http.post(`${baseUrl}:8000/drugs/addWithImg`,formData); 
          }

        }
