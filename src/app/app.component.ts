import { Component } from "@angular/core";

import { PoMenuItem, PoMenuPanelItem } from "@po-ui/ng-components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Customers";
  public readonly menuItems: Array<PoMenuPanelItem> = [
    {
      label: "Home",
      action: this.changeTitle.bind(this),
      icon: "po-icon-home",
    },
    {
      label: "Users",
      action: this.changeTitle.bind(this),
      icon: "po-icon-user",
    },
    {
      label: "Products",
      action: this.changeTitle.bind(this),
      icon: "po-icon po-icon-list",
    },
    {
      label: "Enterprises",
      action: this.changeTitle.bind(this),
      icon: "po-icon po-icon-world",
    },
    {
      label: "Settings",
      action: this.changeTitle.bind(this),
      icon: "po-icon-settings",
    },
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }

  private onClick() {
    alert("Clicked in menu item");
  }
}
