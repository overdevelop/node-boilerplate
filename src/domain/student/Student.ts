interface StudentProps {
  readonly id: string;
  readonly name: string;
  readonly document: string;
  readonly age: number;

  readonly phones?: string[];
}

class Student {
  public readonly id: string;
  public readonly name: string;
  public readonly document: string;
  public readonly age: number;

  private _phones: string[];

  constructor(props: StudentProps) {
    this.id = props.id;
    this.name = props.name;
    this.document = props.document;
    this.age = props.age;

    this._phones = props.phones || [];
  }

  get phones() {
    return [...this._phones];
  }

  public addPhone(phone: string) {
    this._phones = Array.from(new Set([
      ...this._phones,
      phone
    ]));

    console.log(phone);
    console.log(this._phones);
  }

}

export default Student;