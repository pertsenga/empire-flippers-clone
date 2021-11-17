import React from 'react'
import {
  Card,
  Image,
  Row,
  Col,
  Space,
  Tag,
  Typography
} from 'antd'
import styled from 'styled-components'
import { Listing } from '../types'

const { Paragraph } = Typography

type Props = {
  data: Listing
}

const Niches = styled.span`
  font-weight: bolder;
  font-size: large;
`

const ListingCard = ({
  data: {
    niches,
    niche_image,
    new_listing,
    monetizations,
    summary
  }
}: Props) => {
  const NEW_LISTING_TAG = <Tag color='#87d068'>New Listing</Tag>
  const FOR_SALE_TAG = <Tag color='#2db7f5'>For Sale</Tag>

  return (
    <Card>
      <Row gutter={[38, 24]} align='middle'>
        <Col span={8} >
          <Image
            style={{ borderRadius: '0.25rem' }}
            width={150}
            height={150}
            src={`https://api.empireflippers.com/niches/${niche_image}`}
          />
        </Col>
        <Col span={16}>
          <Space direction='vertical'>
            <Row>
              <Niches>{niches.map(niche => niche.niche).join(', ')}</Niches>
            </Row>
            <Row>
              {new_listing ? NEW_LISTING_TAG : FOR_SALE_TAG}
            </Row>
            <Row>
              {monetizations.map(monetization => <Tag>{monetization.monetization}</Tag>)}
            </Row>
            <Row>
              <Paragraph ellipsis={{ rows: 3 }}>{summary}</Paragraph>
            </Row>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default ListingCard
