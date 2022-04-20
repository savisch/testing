import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { DemoFilePickerAdapter } from '../demo-file-picker.adapter';


@Component({
  selector: 'app-ngx-awesome-uploader',
  templateUrl: './ngx-awesome-uploader.component.html',
  styleUrls: ['./ngx-awesome-uploader.component.scss'],
})
export class NgxAwesomeUploaderComponent implements OnInit {
  // public adapter = new DemoFilePickerAdapter(this.http);

  constructor(private http: HttpClient) {}

  // public uploadSuccess(event): void {
  //   console.log(event);
  // }

  ngOnInit(): void {}
}
