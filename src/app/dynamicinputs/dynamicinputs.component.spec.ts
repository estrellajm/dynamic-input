import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicinputsComponent } from './dynamicinputs.component';

describe('DynamicinputsComponent', () => {
  let component: DynamicinputsComponent;
  let fixture: ComponentFixture<DynamicinputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicinputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
