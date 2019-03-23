import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should create the app', () => {
    const { app } = setup();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-brotli'`, () => {
    const { app } = setup();
    expect(app.title).toEqual('angular-brotli');
  });

  it('should render title in a h1 tag', () => {
    const { fixture } = setup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-brotli!');
  });
});
