export class User {
  constructor(
    public id: number,
    public email: string,
    public isAdmin: boolean,
    public isSuperAdmin: boolean,
    private _token: string,
    private expirationDate: Date
  ) {}

  get token() {
    if (!this.expirationDate || new Date() > this.expirationDate) {
      return null;
    }

    return this._token;
  }
}
