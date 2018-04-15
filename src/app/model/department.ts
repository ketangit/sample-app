export interface Department {
  id: number;
  markup: number;
  lookupCode: string;
  name: string;
  date: Date;
  numItems: number;
  numSubDepts: number;
  groupId: number;
  groupName: string;
  salesTaxId: number;
  salesTax: number;
}

export interface SubDepartment {
  id: number;
  deptId: number;
  numItems: number;
  name: string;
  lookupCode: string;
  date: Date;
}

export interface Item {
  id: number;
  deptId: number;
  subDeptId: number;
  sizeCodeId: number;
  itemNumber: number;
  description: string;
  winery: string;
  vintage: string;
  inactive: boolean;
  taxable: boolean;
  markup: number;
  casePrice: number;
  packPrice: number;
  unitPrice: number;
  unitPerCase: number;
  unitPerPack: number;
  packPerCase: number;
  upcCodes: UpcCode[];
}

export interface UpcCode {
  id: number;
  barCode: string;
}
