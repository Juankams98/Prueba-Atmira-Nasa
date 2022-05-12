import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class NasaService extends DataService {

  constructor(public http: HttpClient) {
    super(http)
  }
  getPicture(startDate: string, endDate:string) : Observable<any> {
    this.url = this.endPoints.timePicture.replace("{{startDate}}", startDate);
    this.url = this.url.replace("{{endDate}}", endDate);
    return this.getData();
  }
}
