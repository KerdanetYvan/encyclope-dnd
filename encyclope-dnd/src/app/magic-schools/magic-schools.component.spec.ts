import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSchoolsComponent } from './magic-schools.component';

describe('MagicSchoolsComponent', () => {
  let component: MagicSchoolsComponent;
  let fixture: ComponentFixture<MagicSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
