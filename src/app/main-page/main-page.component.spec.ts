import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NasaService } from '../core/services/nasa.service';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let router: Router;
  let nasaService: NasaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formatDate() test', () => {
    const date = component.formatDate(Date.now());
    expect(date).toBeTruthy();
  });

  it("goToImageDetail() test", fakeAsync(() => {
    //  const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, "navigateByUrl");
    component.goToImageDetail({});
    tick;
    expect(navigateSpy).toHaveBeenCalled();
  }));

  it("getDateMonth() OK", fakeAsync(() => {
    nasaService.getPicture = () => of([]);
    component.getPictures("","");
  }));
  it("getDateMonth() KO", fakeAsync(() => {
    nasaService.getPicture = () => throwError(new Error("Ooops!"));
    component.getPictures("","");
  }));

});
