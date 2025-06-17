import React from 'react'
import { decrement, increment } from '../redux/action/Counter.action'

export const Counter = () => {
   const count =useSelector((state)=>state.counter.count)
  const dispatch=  useDispatch();
  return (
    <div>
<div>
    counter{count}
</div>

<button onClick={increment}></button>
<button onClick={decrement}></button>
    </div>
  )
}
