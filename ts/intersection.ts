type Admin = {
  name: string;
  priviliges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Employee & Admin;

const hey: ElevatedEmployee = {
  name: "asd",
  priviliges: ["asd"],
  startDate: new Date(),
};

interface Hey {
  title: string;
}

interface Hey {
  data: number;
}

const src: Hey = {
  title: "asd",
  data: 1,
};

export {};
