import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtuberComponent } from './avtuber.component';

describe('AvtuberComponent', () => {
  let component: AvtuberComponent;
  let fixture: ComponentFixture<AvtuberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvtuberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvtuberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
