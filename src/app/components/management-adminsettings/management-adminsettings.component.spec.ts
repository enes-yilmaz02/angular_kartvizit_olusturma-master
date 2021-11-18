import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAdminsettingsComponent } from './management-adminsettings.component';

describe('ManagementAdminsettingsComponent', () => {
  let component: ManagementAdminsettingsComponent;
  let fixture: ComponentFixture<ManagementAdminsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementAdminsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementAdminsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
