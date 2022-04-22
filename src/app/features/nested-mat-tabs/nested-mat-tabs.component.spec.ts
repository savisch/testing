import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMatTabsComponent } from './nested-mat-tabs.component';

describe('NestedMatTabsComponent', () => {
  let component: NestedMatTabsComponent;
  let fixture: ComponentFixture<NestedMatTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedMatTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
