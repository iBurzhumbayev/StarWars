import { useEffect, useState } from "react";
import { getResource } from "../../common/api";
import { Spinner } from '../'
import { Character } from "../../common/models";
import './CharList.scss';


const CharList = () => {
    // @ts-ignore
    const [charList, setCharList] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllCharacters = async () => {
        const res = await getResource(`/people`);
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
            {charList.map((char, i)=> {
                return (
                    <li key={i} className="char__item">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`} alt="char"/>
                        <div className="char__name">{char.name}</div>
                    </li>
                )
            })}
        </ul>
    );
  }

export default CharList;