import { useState, useEffect } from "react";

const Content = () => {

  const [counter, setCounter] = useState(0)
  const [content, setContent] = useState([])


  useEffect(() => {
    console.log('counter changed')
  }, [counter])

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => { setCounter(prev => prev + 1) }} >Click Me </button>
        <ul>
          {content.map(item => <li style={{ margin: "10px", border: "2px solid black" }} >{item.title}</li>)}
        </ul>
    </div>);
}

export default Content;