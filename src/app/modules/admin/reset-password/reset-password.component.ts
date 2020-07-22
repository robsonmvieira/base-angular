import {Component, OnInit, ViewChild} from '@angular/core';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from "@po-ui/ng-templates";
import {PoDialogService} from "@po-ui/ng-components";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
