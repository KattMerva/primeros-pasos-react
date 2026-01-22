import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Playera', quantity: 10 },
    { productName: 'Falda', quantity: 5 },
    { productName: 'Sueter', quantity: 8 },
    { productName: 'Short', quantity: 2 },
]

export function FirstStepsApp() {


    return (
        <>
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map( ( item ) => (
                    <ItemCounter key={ item.productName } name={ item.productName } quantity={ item.quantity } />
                )) 
            }

            {/* {
                itemsInCart.map( ( {productName, quantity }) => (
                    <ItemCounter name={ productName } quantity={ quantity }/>
                )) 
            } */}

            {/* <ItemCounter name="Playera" quantity={ 3 }/>
            <ItemCounter name="Falda" quantity={ 6 }/>
            <ItemCounter name="Sueter" quantity={ 9 }/> */}
        </>
    );
}