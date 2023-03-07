export interface IUser {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string
}

export interface IPost {
    title: string;
    body: string;
    id: number;
    userId: number
}

export interface IComment {
    email: string;
    name: string;
    body: string;
    id: number;
    postId: number
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}