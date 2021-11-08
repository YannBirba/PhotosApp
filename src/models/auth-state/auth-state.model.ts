export class AuthState {
    private _message: string;
  private _is_logged_in: boolean;
  constructor(message: string, is_logged_in = false) {
    this._message = message;
    this._is_logged_in = is_logged_in;
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }
  public get is_logged_in(): boolean {
    return this._is_logged_in;
  }

  public set is_logged_in(value: boolean) {
    this._is_logged_in = value;
  }
}