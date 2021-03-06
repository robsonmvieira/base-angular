import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EnterprisesListComponent } from "./enterprises-list/enterprises-list.component";
import { EnterprisesRoutingModule } from "./enterprises-routing.module";
import { EnterpriseFormComponent } from "./enterprise-form/enterprise-form.component";
import { PoTableModule } from "@po-ui/ng-components";
import { PoDropdownModule } from "@po-ui/ng-components";
import { PoFieldModule } from "@po-ui/ng-components";
import { FormsModule } from "@angular/forms";
import { PoAvatarModule } from "@po-ui/ng-components";
import { PoButtonModule } from "@po-ui/ng-components";

@NgModule({
  declarations: [EnterpriseFormComponent, EnterprisesListComponent],
  imports: [
    CommonModule,
    EnterprisesRoutingModule,
    PoTableModule,
    PoDropdownModule,
    PoFieldModule,
    FormsModule,
    PoAvatarModule,
    PoButtonModule,
  ],
})
export class EnterprisesModule {}
