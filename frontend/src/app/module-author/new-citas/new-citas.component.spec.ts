import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCitasComponent } from './new-citas.component';

describe('NewCitasComponent', () => {
  let component: NewCitasComponent;
  let fixture: ComponentFixture<NewCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
