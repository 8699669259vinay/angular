import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';


TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let debugElement: DebugElement;
let htmlElement: HTMLElement;

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                RouterTestingModule,
                FormsModule
            ]
        }).compileComponents().catch(error => console.error(error));;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('.title'));
        htmlElement = debugElement.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(htmlElement.textContent).toContain(component.version);
    });

    it('should display a different test title', () => {
        component.version = 'Test version';
        fixture.detectChanges();
        expect(htmlElement.textContent).toContain('Test version');
    });
});