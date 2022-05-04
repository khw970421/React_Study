import Counter from './components/Counter'
import {useState} from "react"

function App(){
  const [totalCount , setTotalCount] = useState(0)

  return (
    <div>
      TotalCount : {totalCount}
      <Counter
        onIncrease={()=>{setTotalCount(totalCount + 1)}}
        onDecrease={()=>{setTotalCount(totalCount - 1)}}>
      </Counter>
      <Counter
        onIncrease={()=>{setTotalCount(totalCount + 1)}}
        onDecrease={()=>{setTotalCount(totalCount - 1)}}>
      </Counter>
      <Counter
        onIncrease={()=>{setTotalCount(totalCount + 1)}}
        onDecrease={()=>{setTotalCount(totalCount - 1)}}>
      </Counter>

    </div>
  )
}

export default App;
