export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

export interface IStarship {
    name: string;
    model: string; 
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
}

export interface IPlanet {
    name: string; 
    rotation_period: string; 
    orbital_period: string; 
    diameter: string; 
    climate: string; 
    gravity: string; 
    terrain: string; 
    surface_water: string; 
    population: string;
}