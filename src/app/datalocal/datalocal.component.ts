import { Component, OnInit } from '@angular/core';
import * as details from'src/assets/details.json';
@Component({
  selector: 'app-datalocal',
  templateUrl: './datalocal.component.html',
  styleUrls: ['./datalocal.component.css']
})
export class DatalocalComponent implements OnInit {
datastore=[]
puthusu:any
  constructor() { }

  ngOnInit() {
    // console.log("goutham",this.datastore)
    this.datastore.push(details)
    console.log("sathya",this.datastore)
    this.puthusu=this.datastore[0].default

  }


}
