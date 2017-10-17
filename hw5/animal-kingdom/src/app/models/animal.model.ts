export class Animal {

  name: string;
  pyramidLevel: number;
  animalType: string;
  profileImageUrl: string;
  constructor(name:string, pyramidLevel:number, animalType:string, profileImageUrl:string) {
    this.name = name;
    this.pyramidLevel = pyramidLevel;
    this.animalType = animalType;
    this.profileImageUrl = profileImageUrl;
  }
}