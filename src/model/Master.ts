export interface General1 {
  reason: {
    [key: number]: string;
  };
}

export interface General2 {
  reason: {
    [key: number]: string;
  };
}

export interface ModeOfStudy {
  corrected_value: {
    [key: number]: string;
  };
}

export interface QualificationType {
  corrected_value: {
    [key: number]: string;
  };
}

export interface MasterResponse {
  general_1: General1;
  general_2: General2;
  general_3: any[];
  qualification_attained: any[];
  qualification_type: QualificationType;
  mode_of_study: ModeOfStudy;
  duration_of_study: any[];
  attendance_period: any[];
  examination_date: any[];
}
