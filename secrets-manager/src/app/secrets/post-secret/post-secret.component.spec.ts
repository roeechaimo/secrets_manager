import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSecretComponent } from './post-secret.component';

describe('PostSecretComponent', () => {
  let component: PostSecretComponent;
  let fixture: ComponentFixture<PostSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
