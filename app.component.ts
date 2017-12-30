import { Component, VERSION } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap';

type TabConfig = { title: string, active: boolean, link: string };

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private tabs: Array<TabConfig> = [
    { title: 'First Tab', active: true, link: "tab-one" },
    { title: 'Second Tab', active: false, link: "tab-two" },
    { title: 'Third Tab', active: false, link: "tab-three" }
  ];
  public version: string;
  public singleModel: string = '1';

  constructor() {
    this.version = VERSION.full;
  }

  public setActiveTab(tab: TabConfig) {
    for (let tabRef of this.tabs) {
      tabRef.active = false;
    }
    tab.active = true;
  }
}
