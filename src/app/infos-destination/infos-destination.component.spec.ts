import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosDestinationComponent } from './infos-destination.component';

describe('InfosDestinationComponent', () => {
  let component: InfosDestinationComponent;
  let fixture: ComponentFixture<InfosDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
