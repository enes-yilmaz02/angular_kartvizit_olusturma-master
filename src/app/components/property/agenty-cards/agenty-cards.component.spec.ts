import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentyCardsComponent } from './agenty-cards.component';

describe('AgentyCardsComponent', () => {
  let component: AgentyCardsComponent;
  let fixture: ComponentFixture<AgentyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
