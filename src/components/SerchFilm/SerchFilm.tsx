import React, { useEffect, useRef, useState} from 'react';
import { debounse } from '../../utils/utils';
import { createSelector } from 'reselect'
import Api from '../../api/Api';
import SerchFilmList from './SerchFilmList';

const sechSelector = createSelector(
    state => state,
    sech => {
        console.log(sech)
    }
  )



const SerchFilm:React.FC = (props) =>{
    const [serch, setSerch] = useState<Array<number> | null >(null)
    const debouns = debounse(200)

    const hendleSerch = async (value:string) =>{
       try {
           if(value){
              const res = await Api.getSerch(value)
            setSerch(res.data.results)

           }else{
            setSerch(null)
           }
       } catch (error) {
           
       }
    }
    console.log(serch)


    return (
                <div className="top-search">
                    
                    <input type="text" onChange={event => debouns(hendleSerch,event.target.value)} placeholder="Ищите и найдете!"/>
                </div>
    )
}
export default SerchFilm

/*

<>
            <input type="text" onChange={event => debouns(hendleSerch,event.target.value)} placeholder="Поиск" />
            <div>
                {
                    serch && (serch.length !== 0) && <SerchFilmList serch={serch} />
                }
                
            </div>
        </>

*/