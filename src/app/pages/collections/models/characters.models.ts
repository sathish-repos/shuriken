export interface Characters {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Character {
  debut?: Debut;
  family?: Family;
  id: number;
  images: string[];
  jutsu?: string[];
  name: string;
  natureType?: string[];
  personal: Personal;
  rank?: Rank;
  tools?: string[];
  uniqueTraits?: string[];
  voiceActors?: VoiceActors;
  香燐Karin?: {};
}

export interface Debut {
  manga?: string;
  anime?: string;
  novel?: string;
  movie?: string;
  game?: string;
  ova?: string;
  appearsIn: string;
}

export interface Family {
  father?: string;
  mother?: string;
  son?: string;
  daughter?: string;
  wife?: string;
  'adoptive son'?: string;
  godfather?: string;
  brother?: string;
  'clone/son'?: string;
  'grandmother '?: string;
  sister?: string;
  nephew?: string;
  uncle?: string;
  'adoptive mother'?: string;
  'adoptive sons'?: string;
  'adoptive brother'?: string;
  clone?: string;
  godson?: string;
  'great-grandfather'?: string;
  grandfather?: string;
  grandmother?: string;
  cousin?: string;
  'genetic template/parent'?: string;
  'clone/brother'?: string;
  'pet '?: string;
  grandson?: string;
  granddaughter?: string;
  granduncle?: string;
  aunt?: string;
  'first cousin once removed'?: string;
  host?: string;
  niece?: string;
  lover?: string;
  creator?: string;
  'genetic template'?: string;
  'original form'?: string;
  'mother '?: string;
  'genetic source'?: string;
  'creator/father'?: string;
  creation?: string;
  'adoptive father'?: string;
  'adoptive sister'?: string;
  'adoptive grandfather'?: string;
  'adoptive aunt'?: string;
  'incarnation with the god tree'?: string;
  'depowered form'?: string;
  sibling?: string;
}

export interface Personal {
  affiliation?: string[] | string;
  age?: Age;
  birthdate?: string;
  bloodType?: string;
  clan?: string[] | string;
  classification?: string[] | string;
  height?: Height;
  jinchūriki?: string[];
  kekkeiGenkai?: string[] | string;
  kekkeiMōra?: string;
  occupation?: string[] | string;
  partner?: string[] | string;
  sex?: string;
  species?: string;
  status?: string;
  tailedBeast?: string;
  team?: string[] | string;
  titles?: string[];
  weight?: Weight;
}

export interface Age {
  'Part I'?: string;
  'Part II'?: string;
  'Academy Graduate'?: string;
  'Chunin Promotion'?: string;
  'Blank Period'?: string;
  'Boruto Movie'?: string;
  'Boruto Manga'?: string;
}

export interface Height {
  'Part I'?: string;
  'Part II'?: string;
  'Blank Period'?: string;
  Gaiden?: string;
  'Boruto Movie'?: string;
  'Boruto Manga'?: string;
}

export interface Weight {
  'Part I'?: string;
  'Part II'?: string;
}

export interface Rank {
  ninjaRank?: NinjaRank;
  ninjaRegistration?: string;
}

export interface NinjaRank {
  'Part I'?: string;
  Gaiden?: string;
  'Blank Period'?: string;
  'Part II'?: string;
  'Boruto Manga'?: string;
}

export interface VoiceActors {
  japanese: string[] | string;
  english?: string[] | string;
}
