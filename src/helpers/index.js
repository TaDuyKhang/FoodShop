
// export  function Increase(setCount){
//     setCount(c=>c-1);
// }

export  function reduce(setCount){
    setCount(c => Math.max(c-1,0));
}

