// class User {
//   public email: string;
//   private name: string;
//   city: string = "";
//   readonly street: string = "mg road";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

//Syntactic sugar
class User {
  //private can be accessed only with in this class
  // private _courseCount = 1;
  protected _courseCount = 1;
  city: string = "";
  readonly street: string = "mg road";
  constructor(
    public email: string,
    public name: string,
    private userId: string = ""
  ) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const nidhish = new User("h@h.com", "nidhish");
nidhish.city = "tirupati";
nidhish.courseCount = 120;
console.log(nidhish.courseCount);
