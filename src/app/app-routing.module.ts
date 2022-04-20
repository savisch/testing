import { MatExpansionComponent } from './features/mat-expansion/mat-expansion.component';
import { HomeComponent } from './features/home/home.component';
import { NgxAwesomeUploaderComponent } from './features/ngx-awesome-uploader/ngx-awesome-uploader.component';
import { FormfieldComponent } from './features/formfield/formfield.component';
import { NgxImageCropperComponent } from './features/ngx-image-cropper/ngx-image-cropper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ngx-image-cropper',
    component: NgxImageCropperComponent,
  },
  {
    path: 'ngx-awesome-uploader',
    component: NgxAwesomeUploaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'formfield',
    component: FormfieldComponent,
  },
  {
    path: 'mat-expansion',
    component: MatExpansionComponent,
  },
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
