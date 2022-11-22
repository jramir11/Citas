import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcitasComponent } from './viewcitas.component';

describe('ViewcitasComponent', () => {
  let component: ViewcitasComponent;
  let fixture: ComponentFixture<ViewcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
