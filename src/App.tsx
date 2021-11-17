import React, { useState, useEffect } from 'react'
import {
  List,
  message
} from 'antd'
import Layout from './components/Layout'
import './App.css'
import ListingCard from './components/ListingCard'
import { Listing, ListingApiResult } from './types'

const LISTINGS_API = 'https://api.empireflippers.com/api/v1/listings/list'

const App = () => {
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    fetch(LISTINGS_API)
      .then(res => res.json())
      .then((res: ListingApiResult) => {
        if (res.errors.length) {
          throw Error('An error occurred')
        }

        setListings(res.data.listings)
      })
      .catch((error: Error) => {
        message.error(error.message, 3)
      })
  }, [])

  return (
    <Layout>
      <List
        dataSource={listings}
        grid={{ gutter: 14, column: 2 }}
        renderItem={listing => (
          <List.Item>
            <ListingCard data={listing} />
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default App
