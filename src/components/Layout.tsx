import React from 'react'
import {
  Affix,
  Layout as AntdLayout,
  Menu,
  Radio
} from 'antd'
import {
  ShoppingCartOutlined,
  AppstoreOutlined,
  MenuOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = AntdLayout

type Layout = 'grid' | 'rows'
type Props = {
  children: React.ReactNode
  onItemLayoutChange: (layout: Layout) => void
  itemLayout: Layout
}

const Layout = ({
  children,
  itemLayout,
  onItemLayoutChange
}: Props) => {
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
