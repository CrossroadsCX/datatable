import React from 'react'
import { StarIcon } from '@heroicons/react/outline'

export type StarsProps = {
  stars: number
}

export const Stars: React.FC<StarsProps> = ({ stars }) => {
  return (
    <>
      <div style={{ maxWidth: '6rem', display: 'flex' }}>
        {Array.from({ length: stars }, (_, i) => (<StarIcon key={i} />))}
      </div>
    </>
  )
}
