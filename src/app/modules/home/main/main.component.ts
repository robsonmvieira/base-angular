import {Component, OnInit, ViewChild} from '@angular/core';
import {
  PoDialogService, PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation,
  PoMenuPanelItem,
  PoModalComponent,
  PoNavbarItem, PoNotificationService,
  PoTableAction,
  PoTableColumn,
  PoTableComponent
} from "@po-ui/ng-components";
import {SamplePoTableAirfareService} from "../../../../core/service/sample-service";
import {PoDynamicFormRegisterService} from "../../../../core/service/register-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SamplePoTableAirfareService, PoDialogService,PoDynamicFormRegisterService
]

})
export class MainComponent implements OnInit {

  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'po-icon-home' },
    { label: 'Users', action: this.changeTitle.bind(this), icon: 'po-icon-user' },
    { label: 'Products', action: this.changeTitle.bind(this), icon: 'po-icon po-icon-list' },
    { label: 'Enterprises', action: this.changeTitle.bind(this), icon: 'po-icon po-icon-world' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'po-icon-settings' },
  ];

  public readonly navBarItens: Array<PoNavbarItem> = [
    {
      label: 'Cadastros',link: '#'
    },
    {
      label: 'Importacao',link: '#'
    },
    {
      label: 'Empresa',link: '#'
    },
    {
      label: 'Cadastros',link: '#'
    },
    {
      label: 'Usuarios',link: '#'
    },
    {
      label: 'Importacao',link: '#'
    },
    {
      label: 'Empresa',link: '#'
    },
    {
      label: 'Cadastros',link: '#'
    }
  ]

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }


constructor(private sampleAirfare: SamplePoTableAirfareService,
            private poNotification: PoNotificationService,
            private poDialog: PoDialogService,
            private registerService: PoDynamicFormRegisterService) {
}


  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'po-icon-finance',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Details' }
  ];
  columns: Array<PoTableColumn> = this.sampleAirfare.getColumns();
  detail: any;
  items: Array<any> = this.sampleAirfare.getItems();
  total: number = 0;
  totalExpanded = 0;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: `Would you like to add ${selectedItems.length} items to cart?`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(`${this.getDescription(item)} added succesfully`);
          break;
        case 'reserved':
          this.poNotification.warning(
            `${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation`
          );
          break;
        case 'closed':
          this.poNotification.error(`${this.getDescription(item)} is closed and not available anymore`);
          break;
      }
    });
    this.items.forEach(item => (item.$selected = false));
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  discount(item) {
    if (!item.disableDiscount) {
      item.value = item.value - item.value * 0.2;
      item.disableDiscount = true;
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  private getDescription(item: any) {
    return `Airfare to ${item.destination} - ${item.initials}`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }

  person = {};

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    { property: 'shortDescription', label: 'Short Description', gridColumns: 12, gridSmColumns: 12, rows: 5 },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.'
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6 },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { label: 'Santa Catarina', value: 1 },
        { label: 'São Paulo', value: 2 },
        { label: 'Rio de Janeiro', value: 3 },
        { label: 'Minas Gerais', value: 4 }
      ]
    },
    { property: 'city', disabled: true, gridColumns: 6 },
    { property: 'entryTime', label: 'Entry time', type: 'time', divider: 'Work data', gridColumns: 6 },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 6 },
    { property: 'wage', type: 'currency', gridColumns: 6 },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.herokuapp.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    if (changedValue.property === 'state') {
      return {
        value: { city: undefined },
        fields: [
          {
            property: 'city',
            gridColumns: 6,
            options: this.registerService.getCity(changedValue.value.state),
            disabled: false
          }
        ]
      };
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}


