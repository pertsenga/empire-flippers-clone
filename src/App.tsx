import React, { useState, useEffect } from 'react'
import {
  List,
  message,
  Pagination,
  Spin
} from 'antd'
import Layout from './components/Layout'
import './App.css'
import ListingCard from './components/ListingCard'
import { Listing, ListingApiResult } from './types'

const LISTINGS_API = 'https://api.empireflippers.com/api/v1/listings/list'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [listings, setListings] = useState<Listing[]>([])
  const [isGridLayout, setIsGridLayout] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalListings, setTotalListings] = useState<number>(0)

  useEffect(() => {
    setIsLoading(true)

    fetch(`${LISTINGS_API}?${new URLSearchParams({
      q: searchTerm,
      limit: '10',
      page: currentPage.toString()
    })}`)
      .then(res => res.json())
      .then((res: ListingApiResult) => {
        if (res.errors.length) {
          throw Error('An error occurred')
        }

        // console.log(res)
        setListings(res.data.listings)
        setTotalListings(res.data.count)
      })
      .catch((error: Error) => {
        message.error(error.message, 3)
      })
      .finally(() => setIsLoading(false))
  }, [searchTerm, currentPage])


  return (
    <Layout
      onItemLayoutChange={layout => setIsGridLayout(layout === 'grid')}
      itemLayout={isGridLayout ? 'grid' : 'rows'}
      onSearch={searchTerm => {
        setCurrentPage(1)
        setSearchTerm(searchTerm)
      }}
    >
      <Spin spinning={isLoading}>
        <List
          dataSource={listings}
          grid={isGridLayout ? { gutter: 14, column: 2 } : undefined}
          renderItem={listing => (
            <List.Item>
              <ListingCard data={listing} />
            </List.Item>
          )}
        />
        <Pagination
          current={currentPage}
          total={totalListings}
          showSizeChanger={false}
          onChange={page => setCurrentPage(page)}
        />
      </Spin>
    </Layout>
  )
}

export default App
