import React, {useState} from "react";
import {Affix, Card, Input} from "antd";
import {CurrencyList} from "../currency-list";
import {CurrencyWithCountry} from "../../services";

const {Search} = Input;

type Props = Readonly<{
  currencies: ReadonlyArray<CurrencyWithCountry>;
  isLoading: boolean;
}>;

export const CurrencyPalette = ({currencies, isLoading}: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const filterCurrency = (currency: CurrencyWithCountry) => {
    return (
      currency.countryName
        ?.toLocaleLowerCase()
        ?.includes(searchValue.toLocaleLowerCase()) ||
      currency.countryName
        ?.toLocaleLowerCase()
        ?.includes(searchValue.toLocaleLowerCase())
    );
  };
  const filteredData = currencies?.filter(filterCurrency);

  return (
    <Card
      title={
        <Affix offsetTop={20}>
          <Search
            placeholder="Search by country name..."
            enterButton
            onChange={event => setSearchValue(event.target.value)}
            allowClear
          />
        </Affix>
      }
    >
      <CurrencyList loading={isLoading} items={filteredData ?? []} />
    </Card>
  );
};
