import { useState } from "react";

function IndexCSS() {
  const [color, setColor] = useState("Olive")
  return (
    <div className="w-full h-screen duratioin-200"  // state 
    style ={{backgroundColor: color}}  /* ----> to implement state
                              --|--
           ---------|-----------|----
                    |           |
      inlineCSS <---|           |---> variable injector (#000 : black ==> HexCode)              */
    >
      Nothing
    </div>
  );
}

export default IndexCSS;
