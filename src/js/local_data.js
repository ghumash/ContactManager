import {v4 as uuidv4} from "uuid";

export const list = [
  {
    id: uuidv4(),
    firstName: "Joe 1",
    lastName: "Smith 1",
    email: "joesmith1@gmail.com",
    phone: [
      {
        id: uuidv4(),
        value: "+19545877681"
      },
      {
        id: uuidv4(),
        value: "+785655456552"
      }
    ],
    profession: "PhD 1",
    avatar: "",
  },
  {
    id: uuidv4(),
    firstName: "Joe 2",
    lastName: "Smith 2",
    email: "joesmith2@gmail.com",
    phone: [
      {
        id: uuidv4(),
        value: "+19545877683"
      },
      {
        id: uuidv4(),
        value: "+785655456554"
      }
    ],
    profession: "PhD 2",
    avatar: "",
  },
  {
    id: uuidv4(),
    firstName: "Joe 3",
    lastName: "Smith 3",
    email: "joesmith3@gmail.com",
    phone: [
      {
        id: uuidv4(),
        value: "+19545877685"
      },
      {
        id: uuidv4(),
        value: "+785655456556"
      }
    ],
    profession: "PhD 3",
    avatar: "",
  },
];
