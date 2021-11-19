import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCardsComponent } from './management-cards.component';

describe('ManagementCardsComponent', () => {
  let component: ManagementCardsComponent;
  let fixture: ComponentFixture<ManagementCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
