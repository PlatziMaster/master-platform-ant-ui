import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;


function AppLayout({children}) {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOnCollapse = (state) => {
    setIsCollapsed(state);
  }

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={handleOnCollapse}>
        <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.SubMenu key="menuProfile" icon={<UserOutlined/>} title="Profile">
            <Menu.Item key="profile" >
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="payaments" >
              <Link to="/profile">Pagos</Link>
            </Menu.Item>
            <Menu.Item key="myEvents" >
              <Link to="/profile">My events</Link>
            </Menu.Item>
            <Menu.Item key="form" >
              <Link to="/form">My Form</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="3" icon={<CalendarOutlined/>}>
            <Link to="/calendar">Calendar</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content style={{padding: '0 50px'}}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
