import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalocalComponent } from './datalocal.component';

describe('DatalocalComponent', () => {
  let component: DatalocalComponent;
  let fixture: ComponentFixture<DatalocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
