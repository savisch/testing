import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAwesomeUploaderComponent } from './ngx-awesome-uploader.component';

describe('NgxAwesomeUploaderComponent', () => {
  let component: NgxAwesomeUploaderComponent;
  let fixture: ComponentFixture<NgxAwesomeUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAwesomeUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAwesomeUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
