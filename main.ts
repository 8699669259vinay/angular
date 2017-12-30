import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare var Module: any;
if ((<any>Module).isPreCompiled()) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);