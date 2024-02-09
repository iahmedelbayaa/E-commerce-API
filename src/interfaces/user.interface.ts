export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleName: string;
  roleId: number;
}

export default interface ISignupResponse {
  user: IUser;
}
