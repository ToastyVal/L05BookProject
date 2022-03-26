import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCoverPage } from './back-cover.page';

describe('BackCoverPage', () => {
  let component: BackCoverPage;
  let fixture: ComponentFixture<BackCoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackCoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackCoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
