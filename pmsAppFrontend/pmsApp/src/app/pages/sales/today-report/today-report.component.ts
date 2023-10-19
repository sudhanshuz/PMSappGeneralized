import { Component } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-today-report',
  templateUrl: './today-report.component.html',
  styleUrls: ['./today-report.component.css']
})
export class TodayReportComponent {

  date:string="";
  Sales:any={};
  constructor(private _report:ReportsService, private datePipe:DatePipe,private _reports:ReportsService){
    const today = new Date();
    console.log(today);
    this.date=this.formatDate(today);
    this._report.addTodaysReports(this.date).subscribe(
      {
        next:(v)=>{
            this.Sales=v; 
            console.log(this.Sales);
        }
      }
    );
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Pad the day and month with leading zeros
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return formattedDay + '-' + formattedMonth + '-' + year;
  }

  public printPdf(sales:any){
    console.log(sales);
    this._reports.printPdf(sales).subscribe({
      next:(response)=>{
        const file = new Blob([response], { type: 'application/pdf' });

      // Create a URL for the Blob
      const fileURL = URL.createObjectURL(file);

      // Open the PDF in a new window for printing
      window.open(fileURL, '_blank');
      },
      error:(e)=>{
        console.log(sales);
        console.log(e);
        alert("something went wrong");
      }
    })
  }
  
}
