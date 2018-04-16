export class User {
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public surname: string,
    public role: string,
    public state: boolean
  ) {}
}
