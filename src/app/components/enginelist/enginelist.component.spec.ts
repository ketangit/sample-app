import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginelistComponent } from './enginelist.component';

describe('EnginelistComponent', () => {
  let component: EnginelistComponent;
  let fixture: ComponentFixture<EnginelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
