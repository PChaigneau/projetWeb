import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreFiltreComponent } from './barre-filtre.component';

describe('BarreFiltreComponent', () => {
  let component: BarreFiltreComponent;
  let fixture: ComponentFixture<BarreFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
