import React from 'react'
import {
  Affix,
  Layout as AntdLayout,
  Menu
} from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const { Sider, Content } = AntdLayout

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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
