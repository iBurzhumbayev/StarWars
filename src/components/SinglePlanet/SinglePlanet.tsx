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

const SinglePlanetPage = () => {
    const { planetId } = useParams();
    const [char, setChar] = useState<Character>({} as Character);
    const [isLoading, setIsLoading] = useState(true);

    const getChar = async () => {
        const res = await getResource(`/planets/${planetId}`);
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
            {isLoading ? <Spinner/> : <View char={char} planetId={planetId}/>}
        </div>
    );
}

const View = ({ char, planetId }) => {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population } = char;

    return (
        <div className="single-char">
            <div className="single-char__wrapper">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} alt={name} className="single-char__img-planet"/>
                <div className="single-char__info">
                    <h2 className="single-char__name">{name}</h2>
                    <p>Rotation period: {rotation_period}</p>
                    <p>Orbital period: {orbital_period}</p>
                    <p>Diameter: {diameter}</p>
                    <p>Climate: {climate}</p>
                    <p>Gravity: {gravity}</p>
                    <p>Terrain: {terrain}</p>
                    <p>Surface_water: {surface_water}</p>
                    <p>Population: {population}</p>
                </div>
            </div>
            <Link to="../planets" className="single-char__back">Back to all</Link>
        </div>
    );
}

export default SinglePlanetPage;
