import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpansionComponent } from './mat-expansion.component';

describe('MatExpansionComponent', () => {
  let component: MatExpansionComponent;
  let fixture: ComponentFixture<MatExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
