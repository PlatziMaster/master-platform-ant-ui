import {
  Layout,
  Menu,
  Space,
  Tooltip,
  Button,
  Avatar,
  Dropdown,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  AppstoreOutlined,
  AimOutlined,
  SearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import './layout.container.css';

const { Header, Content, Sider } = Layout;

function AppLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOnCollapse = (state) => {
    setIsCollapsed(state);
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Mi perfil
        </a>
      </Menu.Item>
      <Menu.Item danger icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="Header">
        <img className="logo" src="/logo.png" />
        <span className="example-spacer"></span>
        <Space>
          <Tooltip title="search">
            <Button size="small" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Dropdown overlay={menu} trigger={['click']}>
            <Space>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Typography.Text>Nicolas Molina</Typography.Text>
            </Space>
          </Dropdown>
        </Space>
      </Header>
      <Layout>
        <Sider
          breakpoint="xs"
          collapsible
          collapsed={isCollapsed}
          onCollapse={handleOnCollapse}
        >
          <Menu theme="dark" mode="inline">
            <Menu.SubMenu
              key="menuElements"
              icon={<AimOutlined />}
              title="Elements"
            >
              <Menu.Item key="buttons">
                <Link to="/buttons">Buttons</Link>
              </Menu.Item>
              <Menu.Item key="inputs">
                <Link to="/inputs">Inputs</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="users" icon={<TeamOutlined />}>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="products" icon={<AppstoreOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.SubMenu
              key="menuProfile"
              icon={<UserOutlined />}
              title="Profile"
            >
              <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="payaments">
                <Link to="/profile">Pagos</Link>
              </Menu.Item>
              <Menu.Item key="myEvents">
                <Link to="/profile">My events</Link>
              </Menu.Item>
              <Menu.Item key="form">
                <Link to="/form">My Form</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="3" icon={<CalendarOutlined />}>
              <Link to="/calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PlusCircleOutlined />}>
              <Link to="/events/create">New event</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout mode="dark">
          <Content style={{ padding: '0 30px' }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
