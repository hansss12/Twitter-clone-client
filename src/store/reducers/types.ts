export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  location: string;
  description: string;
  fullname: string;
  imgUrl: string;
}

// You can add more types as needed
export interface Thread {
  id: number;
  description: string;
  like: number
}

export interface Comment {
  id: number;
  description: string;
  like: number
}