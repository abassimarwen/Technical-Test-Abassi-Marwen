import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexListComponent } from './spacex-list.component';

describe('SpacexListComponent', () => {
  let component: SpacexListComponent;
  let fixture: ComponentFixture<SpacexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
