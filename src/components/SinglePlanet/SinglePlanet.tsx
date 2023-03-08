import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResource } from "../../common/api";
import { useParams } from 'react-router-dom'
import { Spinner } from '../';
import { IPlanet } from "../../common/models";

interface IProps {
    char: IPlanet,
    planetId: number
}

const SinglePlanetPage = () => {
    const { planetId } = useParams();
    const [char, setChar] = useState<IPlanet>({} as IPlanet);
    const [isLoading, setIsLoading] = useState(true);

    const getChar = async () => {
        const res = await getResource(`/planets/${planetId}`);
        const character = res;
        setChar(character);
        setIsLoading(false)
    }



    useEffect(() => {
        getChar();
    }, [])

    return (
        <div className='post-item'>
            <h1 style={{textAlign: 'center', color: '#FFEE58'}}>Planet Information</h1>
            {/* @ts-ignore */}
            {isLoading ? <Spinner/> : <View char={char} planetId={planetId}/>}
        </div>
    );
}

const View = ({ char, planetId }: IProps) => {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population } = char;

    return (
        <div className="single-char">
            <div className="single-char__wrapper">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} 
                    onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt={name} 
                    className="single-char__img-planet"
                />
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
