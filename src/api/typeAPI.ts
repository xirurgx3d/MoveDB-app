//export default = typeAPI;
//export default as namespace typeAPI;
export declare namespace typeAPI{
    interface MovieItem {
        genres: any;
        results: any;
        vote_count: number;
        id: number;
        video: boolean;
        vote_average: number;
        title: string;
        popularity: number;
        poster_path: string;
        original_language: string;
        original_title: string;
        genre_ids: Array<number>;
        backdrop_path: string;
        adult: boolean;
        overview: string;
        release_date: string;
      }
}
