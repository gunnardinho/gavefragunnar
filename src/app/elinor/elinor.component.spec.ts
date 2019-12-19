import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElinorComponent } from './elinor.component';

describe('ElinorComponent', () => {
  let component: ElinorComponent;
  let fixture: ComponentFixture<ElinorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElinorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElinorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
