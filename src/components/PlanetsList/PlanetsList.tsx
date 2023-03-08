import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getResource } from "../../common/api";
import { Spinner } from '..'
import { Character } from "../../common/models";


const PlanetsList = () => {
    // @ts-ignore
    const [charList, setCharList] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false)

    const getAllCharacters = async () => {
        const res = await getResource(`/planets/?page=${pageNumber}`);
        const character = res.results;
        setCharList([...charList, ...character]);
        setPageNumber(pageNumber + 1)
        setIsLoading(false)
        setNewItemLoading(false)
        if (res.next == null) {
            setCharEnded(true)
        }
    }

    useEffect(() => {
        getAllCharacters()
    }, [])

    const onUploadCharList = () => {
        setNewItemLoading(true)
        getAllCharacters()
    }

    return (
        <>
            {isLoading ? <Spinner/> : <View charList={charList}/>}
            <button 
                style={{display: charEnded ? 'none' : ''}} 
                disabled={newItemLoading}
                onClick={() => onUploadCharList()} 
                className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </>
    )
}

const View = ({ charList }: any) => {
  
    return (
        <ul className="char">
            {charList.map((char:any)=> {
                char.id = char.url.split('/').filter(Boolean).pop()
                return (
                    <li key={char.id} className="char__item">
                        <Link to={`${char.id}`}>
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/planets/${char.id}.jpg`} 
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

export default PlanetsList;