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
  SlackOutlined,
  GithubOutlined,
  UploadOutlined,
} from '@ant-design/icons';

function Profile(props) {
  const { t } = useTranslation();
  const { Title, Text } = Typography;

  return (
    <Row gutter={[0, 16]} style={{ padding: '8px' }}>
      <Col span={24} lg={7} style={{ paddingLeft: '8px', paddingRight: '8px' }}>
        <Card bordered={false}>
          <div style={{ textAlign: 'center' }}>
            <Avatar size={150} src={props.avatarImg} alt={props.name}></Avatar>
            <Title level={3}>{props.name}</Title>
            <div>
              <span>
                <img
                  style={{ width: '24px' }}
                  src={
                    'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
                  }
                  alt="logo platzi"
                />
              </span>
              {props.platziUser}
            </div>
            <div>
              {props.isActive
                ? t('master.Profile.active') + ' ✅'
                : t('master.Profile.inactive') + ' ☑️'}
            </div>
          </div>
          <Divider orientation="left">
            {t('master.Profile.labelPersonal')}
          </Divider>
          <Space direction="vertical">
            <div>
              <Text strong>RFC/CEDULA: </Text>
              {props.idNumber}
            </div>
            <div>
              <Text strong>{t('master.Profile.address')}: </Text>
              {props.address}
            </div>
            <div>
              <Text strong>{t('master.Profile.phone')}: </Text>
              {props.phone}
            </div>
            <Upload>
              <Button>
                <UploadOutlined /> {t('master.Profile.btnUpload')}
              </Button>
            </Upload>
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
            <div>
              <Text strong>{t('master.Profile.labelCohort')}:</Text>{' '}
              {props.cohort}
            </div>
            <div>
              <Text strong>{t('master.Profile.labelCountry')}:</Text>{' '}
              {props.country}
            </div>
            <div>
              <Text strong>{t('master.Profile.labelPhase')}: </Text>
              {props.phase}
            </div>
            <div>
              <Text strong>{t('master.Profile.labelStatus')}: </Text>
              {props.status}
            </div>
            <div>
              <SlackOutlined style={{ marginRight: '8px', fontSize: '20px' }} />
              {props.slack}
            </div>
            <div>
              <GithubOutlined
                style={{ marginRight: '8px', fontSize: '20px' }}
              />
              {props.gitHub}
            </div>
          </Space>
          <Divider orientation="left">
            {t('master.Profile.labelCoaches')}
          </Divider>
          <Row gutter={[16, 16]}>
            {Object.entries(props.coaches).map((item, i) => (
              <Col key={i}>
                <Space align="end">
                  <Avatar size={55} src={item[1].avatarImg}>
                    alt={item[1].name}
                  </Avatar>
                  <div style={{ margin: '12px' }}>
                    <div>{item[1].name}</div>
                    <Text type="secondary">{item[1].role}</Text>
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
  isActive: PropTypes.bool,
  idNumber: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  cohort: PropTypes.string,
  status: PropTypes.string,
  slack: PropTypes.string,
  gitHub: PropTypes.string,
  coaches: PropTypes.object,
};

export default Profile;
