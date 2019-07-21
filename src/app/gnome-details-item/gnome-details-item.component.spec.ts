/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GnomeDetailsItemComponent } from './gnome-details-item.component';

describe('GnomeDetailsItemComponent', () => {
  let component: GnomeDetailsItemComponent;
  let fixture: ComponentFixture<GnomeDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
