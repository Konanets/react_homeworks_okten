import {useForm} from "react-hook-form";
import {carService} from "../../services";

const Form = ({setCars}) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        try {
            let newCar = await carService.addCar(data)
            setCars(cars=>[...cars,newCar.data])
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                Input model <input type={"text"} {...register('model')}/>
                Input price <input type={"text"} {...register('price')}/>
                Input year <input type={"text"} {...register('year')}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export {Form};