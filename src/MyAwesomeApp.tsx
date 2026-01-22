import type { CSSProperties } from "react";

const name = "Katia";
const lastName = "Merva";

const favoriteGames = ["Hollow Knight", "Animal Crossing", "Pokemon"];
const isActive = true;

const address = {
    zipCode: 44550,
    country: 'México',
}

const myStyles: CSSProperties = {
    backgroundColor: 'skyblue',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 100,
};

export function MyAwesomeApp() {

    return(
        <>
            <h1> { name } </h1>
            <h3> { lastName } </h3>

            <p>{ favoriteGames.join(', ') }</p>
            <h1>{ isActive ? 'Activo' : 'No activo' }</h1>

            <p
                style={ myStyles }
            >{ JSON.stringify(address) }</p>
        </>
    );
}

/* ES IGUAL A ESTO v
    export const MyAwesomeApp = () => {
        blablabla
    }
*/