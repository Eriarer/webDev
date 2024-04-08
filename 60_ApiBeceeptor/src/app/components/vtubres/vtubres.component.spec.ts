import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtubresComponent } from './vtubres.component';

describe('VtubresComponent', () => {
  let component: VtubresComponent;
  let fixture: ComponentFixture<VtubresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtubresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtubresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
