import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../core/interfaces/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: Image
  constructor() { }

  ngOnInit(): void {
  }

}
