export interface Clans {
  clans: Group[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Group {
  id: number;
  name: string;
  characters: number[];
}
