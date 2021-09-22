import Profile from '../molecules/profile.molecule';
import { GetInfoUser } from '../../services/profile.services';
import { Layout, Spin } from 'antd';
const { Content } = Layout;

function ProfileView() {
  const { data, status } = GetInfoUser();

  return (
    <Layout>
      <Content>
        {status === 'loading' ? (
          <div className="SpinContainer">
            <Spin
              size="large"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        ) : (
          <Profile key={data.id} {...data} />
        )}
      </Content>
    </Layout>
  );
}

export default ProfileView;
