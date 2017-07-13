import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribDirComponent } from './attrib-dir.component';

describe('AttribDirComponent', () => {
  let component: AttribDirComponent;
  let fixture: ComponentFixture<AttribDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttribDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttribDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
