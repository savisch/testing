import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxImageCropperComponent } from './features/ngx-image-cropper/ngx-image-cropper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './common/tools/dialog/dialog.component';
import { FormfieldComponent } from './features/formfield/formfield.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxAwesomeUploaderComponent } from './features/ngx-awesome-uploader/ngx-awesome-uploader.component';
import { CropperJsComponent } from './features/cropper-js/cropper-js.component'
import { FilePickerModule } from 'ngx-awesome-uploader';
import { HomeComponent } from './features/home/home.component';
import { MatExpansionComponent } from './features/mat-expansion/mat-expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxImageCropperComponent,
    DialogComponent,
    FormfieldComponent,
    NgxAwesomeUploaderComponent,
    CropperJsComponent,
    HomeComponent,
    MatExpansionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    FilePickerModule,
    DragDropModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
