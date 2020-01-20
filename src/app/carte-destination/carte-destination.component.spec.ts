import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDestinationComponent } from './carte-destination.component';

describe('CarteDestinationComponent', () => {
  let component: CarteDestinationComponent;
  let fixture: ComponentFixture<CarteDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
