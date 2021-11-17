import React from 'react'
import {
  Affix,
  Layout as AntdLayout,
  Menu,
  Radio,
  Input,
  Row,
  Col,
  Select
} from 'antd'
import {
  ShoppingCartOutlined,
  AppstoreOutlined,
  MenuOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = AntdLayout
const { Search } = Input
const { Option } = Select

type Layout = 'grid' | 'rows'
type Props = {
  children: React.ReactNode
  onItemLayoutChange: (layout: Layout) => void
  itemLayout: Layout
  onSearch: (searchTerm: string) => void
  onSort: (sortingKey?: string, order?: string) => void
}

const Layout = ({
  children,
  itemLayout,
  onItemLayoutChange,
  onSearch,
  onSort
}: Props) => {
  const SORTING_VALUES_FOR_API = {
    'revenue-high': {
      key: 'average_monthly_gross_revenue',
      order: 'DESC'
    },
    'revenue-low': {
      key: 'average_monthly_gross_revenue',
      order: 'ASC'
    },
    'profit-high': {
      key: 'average_monthly_net_profit',
      order: 'DESC'
    },
    'profit-low': {
      key: 'average_monthly_net_profit',
      order: 'ASC'
    }
  }

  return (
    <AntdLayout>
      <Affix>
        <Sider style={{ height: '100vh' }}>
          <div style={{ color: 'white', margin: 32, fontWeight: 'bolder', fontSize: 16 }}>Flipper's Empire</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
              Marketplace
            </Menu.Item>
          </Menu>
        </Sider>
      </Affix>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <Affix>
          <Header>
            <Row align='middle' gutter={24}>
              <Col span={8}>
                <Search
                  placeholder="Search Listings"
                  onSearch={onSearch}
                  allowClear
                  style={{ marginTop: 16 }}
                />
              </Col>
              <Col>
                <Radio.Group
                  defaultValue={itemLayout}
                  buttonStyle='solid'
                  onChange={() => {
                    onItemLayoutChange(itemLayout === 'grid' ? 'rows' : 'grid')
                  }}
                >
                  <Radio.Button value="grid"><AppstoreOutlined /></Radio.Button>
                  <Radio.Button value="rows"><MenuOutlined /></Radio.Button>
                </Radio.Group>
              </Col>
              <Col span={8}>
                <Select
                  allowClear
                  placeholder='Sort By:'
                  style={{ width: '100%' }}
                  onSelect={(value: 'revenue-high' | 'revenue-low' | 'profit-high' | 'profit-low') => {
                    const { key, order } = SORTING_VALUES_FOR_API[value]

                    onSort(key, order)
                  }}
                  onClear={() => onSort()}
                >
                  <Option value='revenue-high'>Avg Monthly Revenue (High to Low)</Option>
                  <Option value='revenue-low'>Avg Monthly Revenue (Low to High)</Option>
                  <Option value='profit-high'>Avg Monthly Profit (High to Low)</Option>
                  <Option value='profit-low'>Avg Monthly Profit (Low to High)</Option>
                </Select>
              </Col>
            </Row>
          </Header>
        </Affix>
        <Content>
          <div style={{ margin: 32, padding: 24, background: 'white', minHeight: '90%' }}>
            {children}
          </div>
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
