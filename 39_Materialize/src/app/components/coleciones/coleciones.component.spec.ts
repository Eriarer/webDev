import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecionesComponent } from './coleciones.component';

describe('ColecionesComponent', () => {
  let component: ColecionesComponent;
  let fixture: ComponentFixture<ColecionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColecionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
