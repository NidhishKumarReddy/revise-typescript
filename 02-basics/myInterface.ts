interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, off: number): number;
}

//reopening of a interface
interface User {
  githubToken: string;
}

//inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  role: "admin",
  email: "h@h.com",
  userId: 2211,
  githubToken: "github",
  startTrail: () => "trail started",
  getCoupon: (name: "nidhish10", off: 10) => 10,
};

export {};
