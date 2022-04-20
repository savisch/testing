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

  // position: CropperPosition = {
  //   x1: -50,
  //   y1: 50,
  //   x2: ;
  //   y2: ;
  // }

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
  }

  cropperReady(): void {
    // cropper ready
    this.isCropper = true;
    const c = document.getElementsByClassName(
      'ngx-ic-source-image'
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(c[0]);
    c[0].setAttribute('cdkDrag', 'true');
  }

  loadImageFailed(): void {
    // show message
  }

  cropImage(): void {
    this.imageCropper.crop();
  }

  ngOnInit(): void {}
}
