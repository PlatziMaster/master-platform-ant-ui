import { Button } from 'antd';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="LoginPage">
      <Link to="/calendar">
        <Button type="primary">Login</Button>
      </Link>
    </div>
  );
}

export default LoginPage;
