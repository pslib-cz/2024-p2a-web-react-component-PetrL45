import PercentView from "./components/PercentView";

// type MyType = {
//   name: string,
//   age: number,
//   doIt: (h: number) => number,
//   isActive: boolean,
//   hobbies: Array<string>,
//   address: {
//     street: string,
//     city: string,
//     country: string
//   }
// }

// type ArrowType = (x: number) => number

// const arrow1: ArrowType = (x) => x + 1

// const arrow2:ArrowType = (x) => (
//   x + 1
// )

// const arrow3:ArrowType = (x) => {
//   x = 2;
//   return(
//     x + 1
//   )
// }
import { useState } from "react";

let current: number = 50;
const App = () => {
  const [rangeValue, setRangeValue] = useState(100)
  let cislo: number = 34;
  const initialValue: number = 50;
  return(
    <>
    <div style={{justifySelf: 'center'}}>
      <input type="range" min={0} max={100} onChange={(e) => {setRangeValue(Math.round( parseInt(e.target.value)))}} defaultValue={initialValue} />
    </div>
     <PercentView value={rangeValue} max={200} makeColor={(p) => `hsl(${p*100}, 100%, 50%)`} />
     <PercentView value={cislo} max={200} makeColor={(p) => `rgb(0,0,${p*100*20})`} />
     <PercentView value={30} max={300} makeColor={(p) => `rgb(${p*100*20},0,0)`} />
    </>
  )
}

export default App