import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import {
  PoComboOption,
  PoComboOptionGroup,
  PoNotificationService,
  PoSelectOption,
} from "@po-ui/ng-components";
import { SamplePoComboSchedulingService } from "src/app/services/http/enterpise.service";
// import { SamplePoComboSchedulingService } from '';

@Component({
  selector: "sample-po-combo-scheduling",
  templateUrl: "./enterprise-form.component.html",
  providers: [SamplePoComboSchedulingService],
  styleUrls: ["./enterprise-form.component.css"],
})
export class EnterpriseFormComponent implements OnInit {
  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  citycountry: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<PoComboOption>;
  namefantasia: string;
  phone: string;
  cnpj: string;
  ie: string;
  typeScheduling: string;
  namerazao: string;
  namelogradouro: string;
  nunber: string;
  complemento: string;
  namecontato: string;
  name: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: "Particular", value: "particular" },
    { label: "Health Insurance", value: "healthInsurance" },
  ];

  @ViewChild("schedulingForm", { static: true }) form: NgForm;

  constructor(
    private poNotification: PoNotificationService,
    private schedulingService: SamplePoComboSchedulingService
  ) {}

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = "") {
    this.poNotification.success(
      `Great ${name}, your pre-appointment was successfully received!`
    );

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ["São Paulo"]: "sp",
      ["Santa Catarina"]: "sc",
      ["Paraná"]: "pr",
    };

    return `https://thf.totvs.com.br/sample/api/static/assets/${stateByLabel[state]}.png`;
  }
}
