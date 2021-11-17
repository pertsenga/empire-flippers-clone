import React from 'react'
import {
  Card,
  Image
} from 'antd'
import { Listing } from '../types'

type Props = {
  data: Listing
}

const ListingCard = ({
  data: {
    niches,
    niche_image
  }
}: Props) => {
  return (
    <Card>
      <Image
        style={{ borderRadius: '0.25rem' }}
        width={100}
        height={100}
        src={`https://api.empireflippers.com/niches/${niche_image}`}
      />
      {niches.map(niche => niche.niche).join(', ')}
    </Card>
  )
}

export default ListingCard
