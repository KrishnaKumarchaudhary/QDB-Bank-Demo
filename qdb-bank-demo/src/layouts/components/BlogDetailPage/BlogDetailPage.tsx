import React, { useEffect, useState } from "react";
import {
  MainSection,
  LeftMainSection,
  RightMainSection,
  LeftHeadingSection,
  MainHeadingSection,
  ReadMoreSection,
  RightHeadingSection,
  TextSection,
  PaginationSection,
} from "./styled.component";
import profilePic from "./../../../Images/krishnaIdPic.jpg";
import { Pagination } from "antd";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const BlogDetailPage = (props: any) => {
  const { data,keys } = props;
  console.log("blogoage", data);
  const [pageNo, setPageNo] = useState(1);
  const [pageDataValue, setPageDataValue] = useState(data);
  const PageChangeHandle = (data: any) => {
    setPageNo(data);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let newData = [{}];
    if (data.length > pageNo + 4) {
      for (let i = (pageNo - 1) * 4; i < pageNo * 4; ++i) {
        console.log(i, data[i]);
        if (data[i] !== undefined) {
          newData.push(data[i]);
        }
      }
      newData.shift();
      setPageDataValue(newData);
    } else {
      setPageDataValue(data);
    }
  }, [pageNo, data, keys]);

  console.log("data blog", pageDataValue);
  return (
    <>
      {pageDataValue.map((e: any, index: number) => (
        <MainSection key={index}>
          <LeftMainSection>
            <img
              src={profilePic}
              alt="pic"
              style={{ width: "120px", height: "100px" }}
            />
          </LeftMainSection>
          <RightMainSection>
            <MainHeadingSection>
              <LeftHeadingSection>{e?.title}</LeftHeadingSection>
              <RightHeadingSection>12-feb-2022</RightHeadingSection>
            </MainHeadingSection>
            <TextSection>{e?.body}</TextSection>
            <ReadMoreSection>Read More</ReadMoreSection>
          </RightMainSection>
        </MainSection>
      ))}
      <PaginationSection>
        <Pagination
          defaultCurrent={1}
          total={data.length}
          style={{ alignContent: "center" }}
          pageSize={4}
          onChange={(e) => PageChangeHandle(e)}
        />
      </PaginationSection>
    </>
  );
};
