// const User = {
//   name: "nidhish",
//   email: "nidhishkumarreddy@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "hitesh", isPaid: false, email: "h" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "nidhish", price: 200 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "n@n.com";
// myUser._id = "67890"

export {};
