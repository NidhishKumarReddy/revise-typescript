// const user: (string | number)[] = [1, "hc"];
let tUser: [string, number, boolean];

tUser = ["hc", 1, true];
// tUser = [1, "hc", true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "test@test.com"];

newUser[1] = "test@google.com";
// newUser.push(true);

export {};
