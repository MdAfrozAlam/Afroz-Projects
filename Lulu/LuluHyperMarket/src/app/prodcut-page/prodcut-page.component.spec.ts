import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutPageComponent } from './prodcut-page.component';

describe('ProdcutPageComponent', () => {
  let component: ProdcutPageComponent;
  let fixture: ComponentFixture<ProdcutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
