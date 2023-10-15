import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPortalComponent } from './news-portal.component';

describe('NewsPortalComponent', () => {
  let component: NewsPortalComponent;
  let fixture: ComponentFixture<NewsPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPortalComponent]
    });
    fixture = TestBed.createComponent(NewsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
