import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNutritionComponent } from './select-nutrition.component';

describe('SelectFruitsComponent', () => {
  let component: SelectNutritionComponent;
  let fixture: ComponentFixture<SelectNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNutritionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
