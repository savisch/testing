import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageSource!: string;
  file!: File;

  constructor() {}

  onFileChangeEvent(e: any): void {
    console.log(e.files[0]);
    this.file = e.files[0];
    const reader = new FileReader;
    reader.readAsDataURL(this.file);
    // const target = e.target as HTMLInputElement;
    // if(target.files === null) {
    //   console.log("files null")
    // } else {
    //   console.log(target.files[0]);
    //   const file = target.files[0];
    //   const url = URL.createObjectURL(file);
    //   this.imageSource = url;
    // }
    // if (target.files[0] !== null) {
    // const file: File = target.files[0];
    // this.imageSource = e;
    reader.onload = (_event) => {
      this.imageSource = reader.result as string;
      console.log("imageSource: ", this.imageSource);
    }
  }

  ngOnInit(): void {}
}
