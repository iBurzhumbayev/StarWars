import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResource } from "../../common/api";
import { useParams } from 'react-router-dom'
import { Spinner } from '../';
import { Character } from "../../common/models";
import './SingleChar.scss'

interface IProps {
    char: Character,
    charId: number
}

const SingleChar = () => {
    const { charId } = useParams();
    const [char, setChar] = useState<Character>({} as Character);
    const [isLoading, setIsLoading] = useState(true);

    const getChar = async () => {
        const res = await getResource(`/people/${charId}`);
        const character = res;
        console.log(res)
        setChar(character);
        setIsLoading(false)
    }



    useEffect(() => {
        getChar();
    }, []);

    return (
        <div className='post-item'>
            {/* @ts-ignore */}
            {isLoading ? <Spinner/> : <View char={char} charId={charId}/>}
        </div>
    );
}

const View = ({ char, charId }:IProps) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = char;

    return (
        <div className="single-char">
            <div className="single-char__wrapper">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${charId}.jpg`} 
                    onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt={name} 
                    className="single-char__img"
                />
                <div className="single-char__info">
                    <h2 className="single-char__name">{name}</h2>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Mass: {mass}</p>
                    <p>Hair color: {hair_color}</p>
                    <p>Skin color: {skin_color}</p>
                    <p>Eye color: {eye_color}</p>
                    <p>Birth year: {birth_year}</p>
                </div>
            </div>
            <Link to="../people" className="single-char__back">Back to all</Link>
        </div>
    );
}

export default SingleChar;
