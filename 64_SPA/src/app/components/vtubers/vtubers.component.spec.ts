import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtubersComponent } from './vtubers.component';

describe('VtubersComponent', () => {
  let component: VtubersComponent;
  let fixture: ComponentFixture<VtubersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtubersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtubersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
