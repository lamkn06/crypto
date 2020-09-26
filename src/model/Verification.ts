export enum VERIFICATION_STATUS {
  OPEN = 0,
  REJECTED = 1,
  APPROVED = 2,
  EXPIRED = 3,
  CLOSED = 4,
}

export enum VERIFICATION_CHOICE {
  GENERAL_ONE = 'general_1',
  GENERAL_TWO = 'general_2',
  GENERAL_THREE = 'general_3',
  QUALIFICATION_ATTAINED = 'qualification_attained',
  QUALIFICATION_TYPE = 'qualification_type',
  MODE_OF_STUDY = 'mode_of_study',
  DURATION_OF_STUDY = 'duration_of_study',
  ATTENDANCE_PERIOD = 'attendance_period',
  EXAMINATION_DATE = 'examination_date',
}

export enum VERIFICATION_GENERAL_SCREEN {
  GENERAL_TWO = 'general_2',
  GENERAL_THREE = 'general_3',
}

export interface Content {
  qualificationAttained: string;
  qualificationType: string;
  modeOfStudy: string;
  durationOfStudy: string;
  attendancePeriod: string;
  examinationDate: string;
}

export interface VerifyContent {
  verified: boolean;
  reason?: number;
  note?: string;
  value?: any;
  field?: string;
  showIncorrect?: boolean;
  [key: string]: any;
}

export interface RememberVerifier extends VerifierResponse {
  rememberMe: boolean;
}

export interface FileResponse {
  path: string;
  title: string;
  type: string;
}

export interface ContentResponse {
  first_name: string;
  last_name: string;

  nationality: string;
  date_of_birth: number;

  qualification_attained: string;
  qualification_type: string;

  mode_of_study: string;
  year: number;
  month: number;

  duration_of_study: string;

  attendance_from: number;
  attendance_to: number;
  attendance_period: string;

  examination_date: number;

  files: FileResponse[];
}

export interface VerifierResponse {
  department: string;
  designation: string;
  email: string;
  name: string;
  phone: string;
}

export interface VerificationResponse {
  id: string;
  first_name: string;
  last_name: string;
  qualification_attained: string;
  case_id: string;
  content: ContentResponse;
  remember_verifier_info?: VerifierResponse;
  status: VERIFICATION_STATUS;
  created_at: number;
  expired_at: number;
  summary_pdf_file: string;
  verified_at?: any;
  verifier_info?: VerifierResponse;
  verify_content?: {
    [key: string]: VerifyContent;
  };
}
