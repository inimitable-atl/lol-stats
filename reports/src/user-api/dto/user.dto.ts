export class UserDto {
  name: string;
  summoners: string[];

  constructor(name: string, summoners: string[]) {
    this.name = name;
    this.summoners = summoners;
  }
}
