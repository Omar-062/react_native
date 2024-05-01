export interface Props {
  content?: any;
  navigation?: any;
  route?: any;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}