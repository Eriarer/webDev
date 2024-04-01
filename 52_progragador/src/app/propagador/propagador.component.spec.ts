import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagadorComponent } from './propagador.component';

describe('PropagadorComponent', () => {
  let component: PropagadorComponent;
  let fixture: ComponentFixture<PropagadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropagadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropagadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
