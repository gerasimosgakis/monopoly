import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSquareComponent } from './common-square.component';

describe('CommonSquareComponent', () => {
  let component: CommonSquareComponent;
  let fixture: ComponentFixture<CommonSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
