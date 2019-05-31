import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomKeysComponent } from './random-keys.component';

describe('RandomKeysComponent', () => {
  let component: RandomKeysComponent;
  let fixture: ComponentFixture<RandomKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
