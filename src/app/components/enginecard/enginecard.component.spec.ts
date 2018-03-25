import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginecardComponent } from './enginecard.component';

describe('EnginecardComponent', () => {
  let component: EnginecardComponent;
  let fixture: ComponentFixture<EnginecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
