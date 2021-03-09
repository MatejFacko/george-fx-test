import React from "react";
import {Layout, Row, Col, message} from "antd";
import {useGetSortedCurrency} from "../hooks";
import {PageMenu} from "../components/page-menu";
import {CurrencyPalette} from "../components/currency-palette";

const {Content} = Layout;

export const HomePage = () => {
  const {data, error, isLoading} = useGetSortedCurrency();

  if (error) {
    message.error("Failed to load data");
  }

  return (
    <Layout style={{minHeight: "100vh"}}>
      <PageMenu />
      <Content style={{margin: 10}}>
        <Row>
          <Col span={16} offset={4}>
            <CurrencyPalette currencies={data ?? []} isLoading={isLoading} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
