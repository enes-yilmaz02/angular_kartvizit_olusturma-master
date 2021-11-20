import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementContentCardComponent } from './management-content-card.component';

describe('ManagementContentCardComponent', () => {
  let component: ManagementContentCardComponent;
  let fixture: ComponentFixture<ManagementContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
