import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontpressComponent } from './dontpress.component';

describe('DontpressComponent', () => {
  let component: DontpressComponent;
  let fixture: ComponentFixture<DontpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DontpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DontpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
