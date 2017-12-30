import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AgGridModule } from "ag-grid-angular/main";
import { HttpModule }   from '@angular/http';

import { AppComponent }       from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { RouteOneComponent } from './route-one/route-one.component';
import { PartialMatchFilterComponent } from "./route-one/partial-match-filter.component";
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';
import { DataProviderService } from './service/route.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule.forRoot(),
        AgGridModule.withComponents([
            PartialMatchFilterComponent
        ])
    ],
    declarations: [
        AppComponent,
        RouteOneComponent,
        RouteTwoComponent,
        RouteThreeComponent,
        PartialMatchFilterComponent
    ],
     providers: [ DataProviderService
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
