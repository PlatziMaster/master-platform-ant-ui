import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Avatar,
  Row,
  Col,
  Divider,
  Typography,
  Card,
  Space,
  Upload,
  Button,
} from 'antd';
import {
  GithubOutlined,
  UploadOutlined,
  LinkedinFilled,
  CloudDownloadOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
function Profile(props) {
  const { t } = useTranslation();
  const { Title, Text } = Typography;

  return (
    <Row gutter={[0, 16]} style={{ padding: '8px' }}>
      <Col span={24} lg={7} style={{ paddingLeft: '8px', paddingRight: '8px' }}>
        <Card bordered={false}>
          <div style={{ textAlign: 'center' }}>
            <Space>
              <Avatar size={120} src={props.avatarImg} alt={props.name} />
            </Space>
            <Title level={3}>{props.name}</Title>
            <Space>
              <a
                href={'https://platzi.com/p/' + props.platziUser}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img
                    style={{ width: '25px' }}
                    src={
                      'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                    }
                    alt="logo platzi"
                  />
                </span>
              </a>
              <a href={props.website} target="_blank" rel="noreferrer">
                <LaptopOutlined
                  style={{
                    fontSize: '25px',
                    color: '#000',
                  }}
                  src={
                    'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                  }
                  alt="logo platzi"
                />
              </a>
              <a
                href={'https://github.com/' + props.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined
                  style={{
                    fontSize: '25px',
                    color: '#000',
                  }}
                  src={
                    'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                  }
                  alt="logo platzi"
                />
              </a>

              <a
                href={'https://linkedin.com/in/' + props.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinFilled
                  style={{
                    fontSize: '25px',
                    color: '#000',
                  }}
                  src={
                    'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                  }
                  alt="logo platzi"
                />
              </a>
              <a href={props.cv} target="_blank" rel="noreferrer">
                <CloudDownloadOutlined
                  style={{
                    fontSize: '25px',
                    color: '#000',
                  }}
                  src={
                    'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                  }
                  alt="logo platzi"
                />
              </a>
            </Space>
          </div>
          <Divider orientation="left">
            {t('master.Profile.labelPersonal')}
          </Divider>
          <Space direction="vertical">
            <Space>
              <Text strong>RFC/CEDULA:</Text>
              <Text editable>{props.idNumber}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.address')}: </Text>
              <Text editable>{props.address}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.phone')}: </Text>
              <Text editable>{props.phone}</Text>
            </Space>
            <Space>
              <Upload>
                <Button icon={<UploadOutlined />}>
                  {t('master.Profile.btnUpload')}
                </Button>
              </Upload>
            </Space>
          </Space>
        </Card>
      </Col>
      <Col
        span={24}
        lg={17}
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <Card bordered={false}>
          <Divider orientation="left">
            {t('master.Profile.labelGeneral')}
          </Divider>
          <Space direction="vertical">
            <Space>
              <Text strong>{t('master.Profile.labelActive')}:</Text>
              <Text>
                {props.isActive
                  ? t('master.Profile.active')
                  : t('master.Profile.inactive')}
              </Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.labelCohort')}:</Text>
              <Text>{props.cohort}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.labelCountry')}:</Text>
              <Text>{props.country}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.labelPhase')}: </Text>
              <Text>{props.phase}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.labelStatus')}: </Text>
              <Text>{props.status}</Text>
            </Space>
            <Space>
              <Text strong>{t('master.Profile.labelSlack')}: </Text>
              <Text>{props.slack}</Text>
            </Space>
          </Space>
          <Divider orientation="left">
            {t('master.Profile.labelCoaches')}
          </Divider>
          <Row gutter={[16, 16]}>
            {props.coaches.map((item, i) => (
              <Col key={i}>
                <Space align="end">
                  <Avatar size={55} src={item.avatarImg}>
                    alt={item.name}
                  </Avatar>
                  <div style={{ margin: '12px' }}>
                    <div>{item.name}</div>
                    <Text type="secondary">{item.type}</Text>
                  </div>
                </Space>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

Profile.propTypes = {
  avatarImg: PropTypes.string,
  name: PropTypes.string,
  platziUser: PropTypes.string,
  website: PropTypes.string,
  gitHub: PropTypes.string,
  linkedin: PropTypes.string,
  cv: PropTypes.string,
  isActive: PropTypes.bool,
  idNumber: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  cohort: PropTypes.string,
  status: PropTypes.string,
  slack: PropTypes.string,
  focus: PropTypes.string,
  coaches: PropTypes.array,
};

export default Profile;
