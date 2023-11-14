import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesSectionComponent } from './circles-section.component';

describe('CirclesSectionComponent', () => {
  let component: CirclesSectionComponent;
  let fixture: ComponentFixture<CirclesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirclesSectionComponent]
    });
    fixture = TestBed.createComponent(CirclesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
