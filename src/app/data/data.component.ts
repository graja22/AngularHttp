import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
products:any=[]


  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
    this.httpclient.get("assets/details.json").subscribe(data =>{
      // console.log(data);
      this.products = data;
  })


  }
}