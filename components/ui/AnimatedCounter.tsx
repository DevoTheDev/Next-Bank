"use client"
import * as React from 'react'
import CountUp from 'react-countup';

type Props = {

}

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp
            decimal=','
            decimals={2}
            prefix='$'
            end={amount} />
    </div>
  )
}

export default AnimatedCounter