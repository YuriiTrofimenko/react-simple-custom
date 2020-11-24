import React, {useState} from 'react'
function Home(props) {
  /*return (
    <div>
      <h1>Home</h1>
    </div>
  );*/
    /*return <div>
            <h1>Home</h1>
        </div>*/
    const [isShown, setShown] = useState(false)
    const divView = isShown && <div>{props.message}</div>
    return (
        <>
            <h1>Home</h1>
            <h2>Test text</h2>
            <button onClick={() => {setShown(!isShown)}}>Toggle</button>
            {divView}
        </>
    )
}

export default Home
