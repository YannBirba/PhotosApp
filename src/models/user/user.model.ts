export class User {
  private _name: string;
  private _email: string;
  private _password: string;
  private _isAdmin: boolean;
  constructor(name: string, email: string, password: string, isAdmin = false) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
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

  public get isAdmin(): boolean {
    return this._isAdmin;
  }

  public set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
}