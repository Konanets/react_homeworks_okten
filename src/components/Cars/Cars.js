import {CarsContainer, MainCarsContainer} from "./Cars.Styles";
import {Car} from "../Car/Car";

const Cars = ({cars,setCars}) => {
    return (
        <MainCarsContainer>
            <CarsContainer>
                {cars.map(car=><Car key={car.id} car={car} setCars={setCars}/>)}
            </CarsContainer>
        </MainCarsContainer>
    );
};

export {Cars};