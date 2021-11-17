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
  const [sortBy, setSortBy] = useState<{key?: string, order?: string}>({})

  useEffect(() => {
    setIsLoading(true)

    const queryParams = new URLSearchParams({
      q: searchTerm,
      limit: '10',
      page: currentPage.toString(),
      sort: sortBy.key || '',
      order: sortBy.order || ''
    })

    fetch(`${LISTINGS_API}?${queryParams}`)
      .then(res => res.json())
      .then((res: ListingApiResult) => {
        if (res.errors.length) {
          throw Error('An error occurred')
        }

        setListings(res.data.listings)
        setTotalListings(res.data.count)
      })
      .catch((error: Error) => {
        message.error(error.message, 3)
      })
      .finally(() => setIsLoading(false))
  }, [searchTerm, currentPage, sortBy])


  return (
    <Layout
      onItemLayoutChange={layout => setIsGridLayout(layout === 'grid')}
      itemLayout={isGridLayout ? 'grid' : 'rows'}
      onSearch={searchTerm => {
        setCurrentPage(1)
        setSearchTerm(searchTerm)
      }}
      onSort={(key, order) => {
        setSortBy({ key: key, order: order })
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
