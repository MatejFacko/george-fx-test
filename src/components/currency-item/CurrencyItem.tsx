import React from "react";
import {Avatar, List, Space, Typography} from "antd";
import {FlagOutlined} from "@ant-design/icons";

import {CurrencyWithCountry} from "../../services";

type Props = Readonly<{
  currency: CurrencyWithCountry;
}>;

const {Text} = Typography;

export const CurrencyItem = ({currency}: Props) => (
  <List.Item id={currency.countryName ?? currency.currency}>
    <List.Item.Meta
      avatar={
        <Avatar
          src={
            currency.countryCode
              ? `flags/${currency.countryCode}.png`
              : undefined
          }
          icon={!currency.countryCode ? <FlagOutlined /> : undefined}
        />
      }
      title={`${currency.countryName ?? "Unkown country"}, Currency: ${
        currency.nameI18N ?? currency.currency
      }`}
      description={
        <Space direction="vertical">
          <Text>
            {`Exchange rate: ${
              currency.exchangeRate
                ? currency.exchangeRate.buy
                : `No information available`
            }`}
          </Text>
          <Text>
            {`Banknote rate: ${
              currency.banknoteRate
                ? currency.banknoteRate.buy
                : `No information available`
            }`}
          </Text>
        </Space>
      }
    />
  </List.Item>
);
