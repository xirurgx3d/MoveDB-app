import Axios, { AxiosInstance, AxiosPromise } from "axios";
import { getNodeMajorVersion } from "typescript";
// 66857c14071235655ed7062019735dbf
//httpsapi.themoviedb.org3movie550api_key=66857c14071235655ed7062019735dbf&language=ru
import {typeAPI} from "./typeAPI"

 //singleton
 class Api{
  static _instanse:null | object = null
  private token_key:string = '66857c14071235655ed7062019735dbf'
  private URL:string = 'https://api.themoviedb.org/3/'
  api:AxiosInstance

   constructor(){
    this.api = Axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
        params: {
          api_key: '66857c14071235655ed7062019735dbf',
          language: 'ru'
        }
      })
   }
   static get getInstance(){
      if(!Api._instanse){
        Api._instanse = new Api()
      }
      return Api._instanse
    }
 }

 interface IMoviesAPI {
  getFilms:(parame?:any) => AxiosPromise<typeAPI.MovieItem>,
  AllgetGenres:() => void
  getMove:(type?:string) => void
 }

 function getApi({api}:any):IMoviesAPI{
    const request:AxiosInstance = api
    return {
      // список фильмов, по странично
      getFilms(parame){
        //console.log(parame)
        return request.get('/discover/movie', {
          params:{...parame}
        })   
      },
      // все жанры
      AllgetGenres(){
        return request.get('/genre/movie/list')
      },
      getMove(type = "боевик"){
        return request.get('/discover/movie', {
          params:{
            with_genres:16
          }
        })
      }
    }
 }

 export default getApi(Api.getInstance)