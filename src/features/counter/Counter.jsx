import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice"



const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()


  return (
    <div className="flex items-center justify-center flex-col gap-[20px] text-2xl h-[80vh]">
      <p className="font-medium text-4xl">{count}</p>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => dispatch(increment())} className="cursor-pointer w-[32px] h-[32px] rounded-3xl shadow-md bg-gray-300 flex items-center justify-center">+</button>
        <button onClick={() => dispatch(decrement())} className="cursor-pointer w-[32px] h-[32px] rounded-3xl shadow-md bg-gray-300 flex items-center justify-center">-</button>
      </div>
    </div>
  )
}

export default Counter