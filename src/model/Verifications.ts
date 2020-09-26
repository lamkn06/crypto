import { VERIFICATION_STATUS } from './Verification';

export enum VERIFICATION_LIST_SCREEN {
  LOADING = 'loading',
  EMPTY = 'empty',
  LIST = 'list',
}

export interface Query {
  keyword?: string;
  status: VERIFICATION_STATUS;
  sortBy?: string;
  orderBy?: string;
}

export interface Statistic {
  open: number;
  closed: number;
  rejected: number;
  approved: number;
  expired: number;
}

export interface Verification {
  id: string;
  name: string;
  qualification: string;
  caseID: string;
  createdDate: string;
  verifiedDate: string;
  expiredDate: string;
  status: VERIFICATION_STATUS;
}
