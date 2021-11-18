import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResimGenelComponent } from './resim-genel.component';

describe('ResimGenelComponent', () => {
  let component: ResimGenelComponent;
  let fixture: ComponentFixture<ResimGenelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResimGenelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResimGenelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
