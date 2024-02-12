import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAppComponent } from './github-app.component';


describe('GithubAppComponent', () => {
  let component: GithubAppComponent;
  let fixture: ComponentFixture<GithubAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubAppComponent]
    });
    fixture = TestBed.createComponent(GithubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return github user ',()=>{
    component = TestBed.inject(GithubAppComponent);
    expect(component.githubProfile("jayesh352002")).toBe("Array[30]")  });
});
