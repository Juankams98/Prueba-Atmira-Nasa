import { Component, OnInit } from '@angular/core';
import { Image } from '../core/interfaces/image';
import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  image: Image
  constructor(private readonly _sessionService: SessionService) { }

  ngOnInit(): void {
    this.image = this._sessionService.getImageSelected()
  }

}
