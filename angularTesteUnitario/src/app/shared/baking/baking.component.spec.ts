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

  it(`(U) getSacar: should poupanca = 10`, () => {
    expect(component.getSacar).toEqual(10)
  });

  it(`(U) getCarteira: should carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50)
  });

  it(`(U) sacar: sohuld transfer poupanca from carteira`, () => {
    component.sacar('10');
    fixture.detectChanges();
    expect(component.getSacar).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) sacar (): should transfer poupanca dont have string (isNan) or poupanca < value', () => {
    expect(component.sacar('string')).not.toBeTruthy();
    expect(component.sacar('100')).not.toBeTruthy();

    expect(component.getSacar).toEqual(10)
    expect(component.getCarteira).toEqual(50)
  })

  it(`(U) setDepositar: should transfer carteira from poupanca`, () => {
    component.setDepositar('50');
    expect(component.getSacar).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  })

  it('(U) setDepositar(): should transfer carteria dont have string (isNan) or carteira < value', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getSacar).toEqual(10);
    expect(component.getCarteira).toEqual
  })
});
