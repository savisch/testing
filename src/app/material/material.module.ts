import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';

const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSliderModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTabsModule

]

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents, HttpClientModule],
  exports: [MaterialComponents, HttpClientModule],
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'magnify',
      sanitizer.bypassSecurityTrustResourceUrl('assets/magnify_navy.svg')
    );
    iconRegistry.addSvgIcon(
      'hide_eye',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Hide_PW.svg')
    );
    iconRegistry.addSvgIcon(
      'show_eye',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Show_PW.svg')
    );
  }
}
