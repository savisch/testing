import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper-js',
  templateUrl: './cropper-js.component.html',
  styleUrls: ['./cropper-js.component.scss']
})
export class CropperJsComponent implements OnInit {
  @Input() imageSource!: string;

  @ViewChild('image') imageElement!: ElementRef;

  imageDestination = ''; 
  cropper!: Cropper;
  croppedImage: any;

  constructor() { }

  crop(): void {
    this.cropper.crop();
    // const canvas = this.cropper.getCroppedCanvas();
    // this.imageDestination = canvas.toDataURL('image / png');
  }

  save(): void {
    const canvas = this.cropper.getCroppedCanvas();
    this.imageDestination = canvas.toDataURL('image / png');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.imageSource);
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      aspectRatio: 1,
      viewMode: 2,
      dragMode: 'move',
      // movable: true,
      autoCrop: false,
      // crop: () => {
        // const canvas = this.cropper.getCroppedCanvas();
        // this.imageDestination = canvas.toDataURL('image / png');
        // console.log(this.imageDestination);
      // },
    });
  }
}
