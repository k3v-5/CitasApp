import {IPhoto} from "./iphoto"

export interface IMember{
    id:number;
    userName:string;
    photoUrl:string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    lookingfor:string;
    interest: string;
    city:string;
    country:string;
    photos: IPhoto[];
}