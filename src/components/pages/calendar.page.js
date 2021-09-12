import { Typography, List } from "antd";
import { useTranslation } from "react-i18next";
import CalendarListItem from "../molecules/CalendarListItem.molecule";
import { GetEvents } from "../../services/events.service";
import "./calendar.css";

function CalendarPage() {
  const { data, isLoading } = GetEvents();
  const { Title } = Typography;
  const { t } = useTranslation();

  return (
    <div className="CalendarPage">
      <Title level={3}>{t("master.Calendar.title")}</Title>
      <div className="CalendarContainer">
        <List
          loading={isLoading}
          dataSource={data}
          renderItem={(item) => <CalendarListItem {...item} />}
        />
      </div>
    </div>
  );
}

export default CalendarPage;
