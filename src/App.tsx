import {useState, useEffect} from "react";

export default function App() {
  const [visible, setVisible] = useState(true)
  function handleRemoveClick(){
    setVisible(!visible)
  }
  return <>
  <button onClick={handleRemoveClick}>REMOVE</button>
  { visible ? <Child /> : null }
  </>
}
function Child (){
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //       e.preventDefault()
  //       console.log("page scrolled");
  //   });
  // });
  useEffect(()=>{
    const intervolID = setInterval(()=>setCount((prevCount) => prevCount + 1 ), 1000)
    console.log("set intervol")
    return () => {clearInterval(intervolID); console.log("cleared intervol")}
  }, [])
  useEffect(() => {return () => console.log("unmouted")}, [])

  return (<>
    <h2>{count}</h2>
    <p>Lorem ipsum...</p>
    {console.log("rendered")}
    </>);
}