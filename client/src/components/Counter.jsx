import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/features/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(3))}
                >
                    Increment By Any Amount
                </button>
            </div>
        </div>
    )
}