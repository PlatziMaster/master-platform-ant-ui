import { Button, Breadcrumb, Space, Typography, Card, Col, Row } from 'antd';
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

function ButtonsPage() {
  return (
    <div className="ButtonsPage">
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Elements</Breadcrumb.Item>
        <Breadcrumb.Item>Buttons</Breadcrumb.Item>
      </Breadcrumb>
      <Typography.Title>Buttons</Typography.Title>
      <Row gutter={10}>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Basic buttons">
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button danger type="primary">
                Danger
              </Button>
              <Button>Simple</Button>
              <Button type="text">Text Button</Button>
              <Button type="link">Link Button</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Buttons with icons">
            <Space wrap>
              <Button type="primary" icon={<PlusOutlined />}>
                Add new
              </Button>
              <Button danger type="primary" icon={<DeleteOutlined />}>
                Remove
              </Button>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Button icon={<SearchOutlined />} type="text">
                Text Button
              </Button>
              <Button icon={<SearchOutlined />} type="link">
                Link Button
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Buttons with loading">
            <Space wrap>
              <Button type="primary" loading>
                Primary
              </Button>
              <Button danger type="primary" loading>
                Danger
              </Button>
              <Button loading>Simple</Button>
              <Button loading type="text">
                Text Button
              </Button>
              <Button loading type="link">
                Link Button
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ButtonsPage;
