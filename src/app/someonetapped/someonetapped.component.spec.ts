import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeonetappedComponent } from './someonetapped.component';

describe('SomeonetappedComponent', () => {
  let component: SomeonetappedComponent;
  let fixture: ComponentFixture<SomeonetappedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeonetappedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeonetappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
