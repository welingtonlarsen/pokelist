export interface Pokemon {
  name: string;
  url: string;
}

export interface ResponseApi {
  data: {results: Pokemon[]}
}