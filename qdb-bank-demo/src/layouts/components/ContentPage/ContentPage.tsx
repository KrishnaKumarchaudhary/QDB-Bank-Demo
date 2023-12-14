import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { BlogDetailPage } from "../BlogDetailPage/BlogDetailPage";
import { useFetch } from "../../../Hooks/useCallApi";

export const ContentPage: React.FC = () => {
  const envUrl =process.env.REACT_APP_API_ENDPOINT_POST;
  const url = envUrl || "https://jsonplaceholder.typicode.com/users/1/posts";
  const onChange = (key: string) => {
    console.log(key);
  };
  const data1 = [
    {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  ];
  const { data } = useFetch(url, data1);
  const Latestdata = data.slice(0, 4);
  const Archiveddata = data.slice(5, 8);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "ALL POSTS",
      children: <BlogDetailPage data={data} keys={1} />,
    },
    {
      key: "2",
      label: "LATEST POSTS",
      children: <BlogDetailPage data={Latestdata} keys={2} />,
    },
    {
      key: "3",
      label: "ARCHIVED",
      children: <BlogDetailPage data={Archiveddata} keys={3} />,
    },
  ];

  return <Tabs defaultActiveKey={"1"} items={items} onChange={onChange} />;
};
