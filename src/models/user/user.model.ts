export class User {
    private name: string;
    private email: string;
    private password: string;
    constructor(name: string, email: string, password: string) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    public get Name() {
      return this.name;
  }

  public set Name(value: string) {
      this.name = value;
  }
  }