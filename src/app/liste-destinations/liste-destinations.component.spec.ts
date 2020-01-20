import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDestinationsComponent } from './liste-destinations.component';

describe('ListeDestinationsComponent', () => {
  let component: ListeDestinationsComponent;
  let fixture: ComponentFixture<ListeDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
