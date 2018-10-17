import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReComponent } from './view-re.component';

describe('ViewReComponent', () => {
  let component: ViewReComponent;
  let fixture: ComponentFixture<ViewReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
