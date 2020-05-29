import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTenComponent } from './main-ten.component';

describe('MainTenComponent', () => {
  let component: MainTenComponent;
  let fixture: ComponentFixture<MainTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
