import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResource } from "../../common/api";
import { useParams } from 'react-router-dom'
import { Spinner } from '../';
import { Character } from "../../common/models";

interface IProps {
    char: Character,
    charId: number
}

const SingleStarshipPage = () => {
    const { starshipId } = useParams();
    const [char, setChar] = useState<Character>({} as Character);
    const [isLoading, setIsLoading] = useState(true);

    const getChar = async () => {
        const res = await getResource(`/starships/${starshipId}`);
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
            {isLoading ? <Spinner/> : <View char={char} starshipId={starshipId}/>}
        </div>
    );
}

const View = ({ char, starshipId }) => {
    const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class } = char;

    return (
        <div className="single-char">
            <div className="single-char__wrapper">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`} 
                    onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt={name} 
                    className="single-char__img-starship"
                />
                <div className="single-char__info">
                    <h2 className="single-char__name">{name}</h2>
                    <p>Model: {model}</p>
                    <p>Manufacturer: {manufacturer}</p>
                    <p>Cost in credits: {cost_in_credits}</p>
                    <p>Length: {length}</p>
                    <p>Max atmosphering speed: {max_atmosphering_speed}</p>
                    <p>Crew: {crew}</p>
                    <p>Passengers: {passengers}</p>
                    <p>Cargo capacity: {cargo_capacity}</p>
                    <p>Consumables: {consumables}</p>
                    <p>Hyperdrive rating: {hyperdrive_rating}</p>
                    <p>MGLT: {MGLT}</p>
                    <p>Starship_class: {starship_class}</p>
                </div>
            </div>
            <Link to="../starships" className="single-char__back">Back to all</Link>
        </div>
    );
}

export default SingleStarshipPage;
