import { Button, Typography, Avatar, List } from "antd";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function CalendarListItem({
  title,
  date,
  avatarImg,
  startTime,
  endTime,
  timeZone,
}) {
  const { t } = useTranslation();
  const { Text, Paragraph } = Typography;

  const getShortTime = (time) =>
    new Date(time).toLocaleTimeString([], {
      timeStyle: "short",
    });

  const getScheduleTime = () => {
    const start = getShortTime(startTime);
    const end = getShortTime(endTime);
    return `${start} - ${end} ${timeZone}`;
  };

  return (
    <List.Item
      actions={[
        <Button type="primary">{t("master.Calendar.joinbtn")}</Button>,
        <Button type="secondary">{t("master.Calendar.addbtn")}</Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatarImg} />}
        title={title}
        description={
          <>
            <Paragraph style={{ margin: 0 }}>
              <Text>{date}</Text>
            </Paragraph>
            <Paragraph style={{ margin: 0 }}>
              <Text>{getScheduleTime()}</Text>
            </Paragraph>
          </>
        }
      />
    </List.Item>
  );
}

CalendarListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
};

export default CalendarListItem;
