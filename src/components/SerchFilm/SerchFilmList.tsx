import React from 'react';
import { Link } from "react-router-dom";

interface ISerchFilmList{
    serch:Array<number> | null
}
const SerchFilmList:React.FC<ISerchFilmList> = (props) =>{
    const {serch} = props
    return (
        <>
            <ul>
                {
                    serch?.map((val:any,index:number)=>{
                       return <li key={index}>
                           <Link to={`film-detail/${val.id}`}>
                                <span>{val.title}</span>
                            </Link>
                        </li>
                    })
                }    
            </ul>
        </>
    )
}
export default SerchFilmList