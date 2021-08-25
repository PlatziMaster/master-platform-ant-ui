import { Button, Spin, Checkbox, Divider } from "antd";

import { GetTodos } from "./../../services/todos.service";
import './demo.css';

function DemoPage() {
  const { status, data } = GetTodos({
    initData: [],
  });
  return (
    <div className="DemoPage">
      <Button type="primary">Button</Button>
      <Divider />
      {status === "loading" ? (
        <Spin />
      ) : (
        data.map((todo) => (
          <>
            <p>
              <Checkbox checked={todo.completed}>{todo.title}</Checkbox>
            </p>
            <Divider />
          </>
        ))
      )}
    </div>
  );
}

export default DemoPage;
