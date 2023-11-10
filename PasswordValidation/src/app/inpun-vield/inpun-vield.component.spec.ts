import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpunVieldComponent } from './inpun-vield.component';

describe('InpunVieldComponent', () => {
  let component: InpunVieldComponent;
  let fixture: ComponentFixture<InpunVieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InpunVieldComponent]
    });
    fixture = TestBed.createComponent(InpunVieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
