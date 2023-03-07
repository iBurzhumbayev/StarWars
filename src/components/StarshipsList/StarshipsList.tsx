import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getResource } from "../../common/api";
import { Spinner } from '..'
import { Character } from "../../common/models";


const StarshipsList = () => {
    // @ts-ignore
    const [charList, setCharList] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllCharacters = async () => {
        const res = await getResource(`/starships`);
        const character = res.results;
        console.log(character)
        setCharList(character);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllCharacters()
    }, [])


    return (
        <>
            {isLoading ? <Spinner/> : <View charList={charList}/>}
        </>
    )
}

const View = ({ charList }: any) => {
  
    return (
        <ul className="char">
            {charList.map((char: any)=> {
                char.id = char.url.split('/').filter(Boolean).pop()
                return (
                    <li key={char.id} className="char__item">
                        <Link to={`${char.id}`}>
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/starships/${char.id}.jpg`} 
                                onError={(e: any) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                                }}
                                alt="char"
                            />
                            <div className="char__name">{char.name}</div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
  }

export default StarshipsList;

