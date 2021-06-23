export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserInfoModel {
  sub: string;
  userId: number;
  name: string;
  lastName: string;
  haveAccessToBackOffice: boolean;
}

export interface UserRequestModel {
  userId?: number;
  active: boolean;
  email: string;
  name: string;
  lastName: string;
  password?: string;
  haveAccessToBackOffice?: boolean;
  roleId?: number;
}

export interface UserModel {
  id: number;
  active: boolean;
  email: string;
  name: string;
  lastName: string;
  password: string;
  haveAccessToBackOffice: boolean;
  roleId: number;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
}

export interface RoleModel {
  id: number;
  active: boolean;
  roleCode: string;
  roleName: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
}
