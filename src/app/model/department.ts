export class Department {
  id: number;
  markup: number;
  lookupCode: string;
  name: string;
  date: Date;
  departmentGroupId: number;
  groupName: string;
  salesTaxGroupId: number;
  salesTax: number;
  subDepartments: SubDepartment[];
}

export class SubDepartment {
  id: number;
  name: string;
  lookupCode: string;
  date: Date;
}
