export interface LoginData {
  email: string;
  password: string;
  remember_me: boolean;
}

export interface RegisterData {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  interested: string;
  term_and_condition: boolean;
}
