import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../core/interfaces/image';
import { NasaService } from '../core/services/nasa.service';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  startDate: any = null
  endDate: any = null
  imageList: Image[] = []

  constructor(
    private readonly _nasaService: NasaService,
    private readonly _sessionService: SessionService,
    private readonly _router: Router
    ) { }

  ngOnInit(): void {
    this.startDate = new Date(Date.now() - ((24 * 60 * 60 * 1000) * 6))
    this.endDate = new Date(Date.now() - (24 * 60 * 60 * 1000))
    this.getPictures(this.formatDate(this.startDate), this.formatDate(this.endDate))
  }

  getPictures(startDate: string, endDate: string) {
    this._nasaService.getPicture(startDate, endDate).subscribe(
      (response: any) => {
        this.imageList = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  formatDate(date: any) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  goToImageDetail(image: any) {
    this._sessionService.setImageSelected(image)
    this._router.navigateByUrl("/image-detail");
  }
}
