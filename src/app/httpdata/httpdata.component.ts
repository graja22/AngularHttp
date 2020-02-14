import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {
  data: any;
  summa:any;
  just=[]
 
constructor(private http: HttpClient) { }
king:boolean
  ngOnInit() {
  }
  
  fetchData() {
   this.king=true
    this.http.get(`http://jsonplaceholder.typicode.com/posts/1`)
      .subscribe((res: Response) => {
        this.data = res;
        this.just.push(this.data)
        console.log(this.data.userId)
        
        this.summa=this.data.userId
        
        
      });
    
}
clearData(){
  this.king=false;
}


}
