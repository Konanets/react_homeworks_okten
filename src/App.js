import './App.css';
import {useRef} from "react";

import {actions, useAnimalReducer} from "./Reducers";

function App() {

    const catRef=useRef()
    const dogRef=useRef()

    const [catState,catDispatch]=useAnimalReducer()
    const [dogState,dogDispatch]=useAnimalReducer()

    const addCat=()=>{
        catDispatch({type:actions.ADD,payload: {name:catRef.current.value}})
    }

    const addDog=()=>{
        console.log(dogRef.current.value)
        dogDispatch({type:actions.ADD,payload: {name:dogRef.current.value}})
    }

    const deleteCat=(id)=>{
        catDispatch({type: actions.DELETE,payload: {id}})
    }

    const deleteDog=(id)=>{
        dogDispatch({type: actions.DELETE,payload: {id}})
    }


  return (
    <div className="App">
        <div style={{height:'100px',display:'flex',justifyContent:'center'}}>

                <label>
                    Add Cat: <input type="text" ref={catRef}/>
                    <button onClick={addCat}>Send</button>
                </label>
                <label>
                    Add Dog: <input type="text" ref={dogRef}/>
                    <button onClick={addDog}>Send</button>
                </label>

        </div>
        <div style={{display:'flex', justifyContent:"space-evenly"}}>
            <div>
                <h1>Cats</h1>
                {catState.map(cat=><div key={cat.id}>
                    {cat.name}
                    <button onClick={()=>deleteCat(cat.id)}>delete caty</button>
                </div>)}
            </div>
            <div>
                <h1>Dogs</h1>
                {dogState.map(dog=><div key={dog.id}>
                    {dog.name}
                    <button onClick={()=>deleteDog(dog.id)}>delete caty</button>
                </div>)}
            </div>
        </div>
        <div>

        </div>




    </div>
  );
}

export default App;
