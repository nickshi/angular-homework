export class Movie {
  constructor(
    public imdbID: String,
    public title: String,
    public year:String,
    public rated: String,
    public released: String,
    public runtime: String,
    public genre: String,
    public director: String, 
    public poster: String, 
    public ratings:any,
    public plot: String) {

  }
}