export {};

interface Car {
    model: string;
    manufacturer: string;
    year: number;
    color: string;
    inWarranty: boolean
    miles?: number;
}

const corolla: Car = {
    model: "Corolla",
    manufacturer: "Toyota",
    year: 2006,
    color: "Red",
    inWarranty: true
}

interface Country{
    continent: string;
    language: string;
    population: number;
    government: string;
    communist: boolean;
}

const louisland: Country = {
    continent: "Antartica";
    language: "Spanish";
    population: 9000000;
    government: "democratic";
    communist: true;
}