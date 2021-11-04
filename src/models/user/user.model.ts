export class User {
  private _name: string;
  private _email: string;
  private _password: string;
  private _is_admin: boolean;
  constructor(name: string, email: string, password: string, is_admin = false) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._is_admin = is_admin;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get is_admin(): boolean {
    return this._is_admin;
  }

  public set is_admin(value: boolean) {
    this._is_admin = value;
  }
}