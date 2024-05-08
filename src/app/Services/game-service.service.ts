import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private httpClient:HttpClient) { }
  specific:String = "classes";
  //Method to call the specific api - all depending on the button clicked by the user 
  //and the value passed by the button
  GetDNDData(info:String):Observable<any>{
    this.specific = info;
    return this.httpClient.get('https://api.open5e.com/v1/' + this.specific);
  }
}
