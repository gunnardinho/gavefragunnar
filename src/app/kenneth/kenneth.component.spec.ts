import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennethComponent } from './kenneth.component';

describe('KennethComponent', () => {
  let component: KennethComponent;
  let fixture: ComponentFixture<KennethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
