/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BakingComponent } from './baking.component';

describe('BakingComponent', () => {
  let component: BakingComponent;
  let fixture: ComponentFixture<BakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
