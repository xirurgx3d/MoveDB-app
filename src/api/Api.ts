import Axios, { AxiosInstance, AxiosPromise } from "axios";
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
  getFilms:(parame?:any) => AxiosPromise,
  AllgetGenres:() => AxiosPromise,
  getMove:(id:number) => AxiosPromise
  getCredits:(id:number) => AxiosPromise
  getRecommendations:(id:number) => AxiosPromise
  getSerch:(value:string) => AxiosPromise
  getTrending:() => AxiosPromise
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
      // детали фильма
      getMove(id:number){
        return request.get('/movie/'+ id)
      },
      // список актеров
      getCredits(id:number){
        return request.get(`/movie/${id}/credits`)
      },
      // рекомендованные
      getRecommendations(id:number){
        return request.get(`movie/${id}/recommendations`)
      },
      // поиск
      getSerch(value:string){
        return request.get(`/search/movie`,{
          params:{
            query:value  // Final Destination 3  Пункт назначения 3
          }
        })
      },
      getTrending(){
        return request.get(`/trending/movie/week`)
      }
    }
 }

 export default getApi(Api.getInstance)