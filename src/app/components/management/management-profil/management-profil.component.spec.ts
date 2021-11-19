import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementProfilComponent } from './management-profil.component';

describe('ManagementProfilComponent', () => {
  let component: ManagementProfilComponent;
  let fixture: ComponentFixture<ManagementProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
