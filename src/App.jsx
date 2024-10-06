
import { useState } from "react";
function App() {
  const [Color, setColor] = useState('White');

  return (
    <div className=" w-full h-screen duration-200"
      style={{ backgroundColor: Color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg- bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'yellow' }}
          >yellow</button>


          <button onClick={() => setColor("Green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'Green' }}
          >Green</button>

          <button onClick={() => setColor("Black")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'Black' }}
          >Black</button>

          <button onClick={() => setColor("olive")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'olive' }}
          >olive</button>

          <button onClick={() => setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }}
          >Red</button>

          <button onClick={() => setColor("purple")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'purple' }}
          >purple</button>

          <button onClick={() => setColor("Blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'Blue' }}
          >Blue</button>

          <button onClick={() => setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'pink' }}
          >pink</button>

          <button onClick={() => setColor("Gray")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'Gray' }}
          >Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
