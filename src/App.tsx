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

const App = () => {
  let cislo: number = 34;
  cislo -= 1;
  return(
    <>
     <PercentView value={cislo + 1} max={100} makeColor={(p) => `rgb(0,${p*100*20},0)`} />
     <PercentView value={cislo + 1} max={200} makeColor={(p) => `rgb(0,0,${p*100*20})`} />
     <PercentView value={30} max={300} makeColor={(p) => `rgb(${p*100*20},0,0)`} />
    </>
  )
}

export default App