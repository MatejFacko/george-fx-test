import React from "react";
import {List} from "antd";

import {CurrencyWithCountry} from "../../services";
import {CurrencyItem} from "../currency-item";

type Props = Readonly<{
  items: ReadonlyArray<CurrencyWithCountry>;
  loading: boolean;
}>;

export const CurrencyList = ({items, loading}: Props) => (
  <List
    itemLayout="horizontal"
    dataSource={items.slice()}
    renderItem={(currency, index) => (
      <CurrencyItem currency={currency} key={index} />
    )}
    loading={loading}
  />
);
