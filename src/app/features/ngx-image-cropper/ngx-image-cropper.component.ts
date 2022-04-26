import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CropperPosition, ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-ngx-image-cropper',
  templateUrl: './ngx-image-cropper.component.html',
  styleUrls: ['./ngx-image-cropper.component.scss'],
})
export class NgxImageCropperComponent implements OnInit {
  @ViewChild(ImageCropperComponent) imageCropper!: ImageCropperComponent;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  isCropper = false;

  cropper: CropperPosition = {
    x1: 150,
    y1: 150,
    x2: 258,
    y2: 258
  }

  // transform!: Transform;

  currentScale: number = 1;

  constructor() {}

  @HostListener('wheel', ['$event'])
  scroll(event: any) {
    console.log('MouseEvent: ', event);
    if (this.isCropper) {
      event.preventDefault();
      if (event.deltaY < 0) {
        console.log('scrolling up');
        this.setTransform('up');
      } else {
        console.log('scrolling down');
        this.setTransform('down');
      }
    }
  }

  // @HostListener('mousemove', ['$event'])
  // move(event: any) {
  //   if(this.isCropper){
  //     console.log("moveEvent: ", event.clientX, event.clientY);
  //   }
    // if (this.isCropper) {
    //   event.preventDefault();
    //   if (event.deltaY < 0) {
    //     console.log('scrolling up');
    //     this.setTransform('up');
    //   } else {
    //     console.log('scrolling down');
    //     this.setTransform('down');
    //   }
    // }
  // }

  setTransform(val: string): void {
    if (val === 'up') {
      if (this.currentScale < 3) {
        this.currentScale += 0.05;
      }
    } else {
      if (this.currentScale > 0.5) {
        this.currentScale -= 0.05;
      }
    }
  }

  onFileChangeEvent(e: Event): void {
    console.log(e);
    this.imageChangedEvent = e;
  }

  imageCropped(e: ImageCroppedEvent): void {
    this.croppedImage = e.base64;
    console.log('Cropped Image: ', this.croppedImage);
  }

  imageLoaded(): void {
    // show cropper
    // setTimeout(() => {
    //   this.cropper;
    // },);
  }

  cropperReady(): void {
    // cropper ready
    this.isCropper = true;
    setTimeout(() => {
      this.cropper = {
        x1: 120,
        y1: 120,
        x2: 0,
        y2: 0,
      };
    },);
    
  }

  loadImageFailed(): void {
    // show message
  }

  cropImage(): void {
    this.imageCropper.crop();
  }

  ngOnInit(): void {}
}
