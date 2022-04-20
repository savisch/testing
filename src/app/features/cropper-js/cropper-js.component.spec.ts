import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperJsComponent } from './cropper-js.component';

describe('CropperJsComponent', () => {
  let component: CropperJsComponent;
  let fixture: ComponentFixture<CropperJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
