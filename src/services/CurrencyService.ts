import axios from "axios";

type Rate = Readonly<{
  buy: number;
  middle: number;
  sell: number;
  indicator: number;
  lastModified: Date;
}>;

export type Currency = Readonly<{
  currency: string;
  precision: number;
  nameI18N: string;
  exchangeRate: Rate;
  banknoteRate: Rate;
  flags: ReadonlyArray<string>;
  denominations: ReadonlyArray<number>;
}>;

type CurrencyRoot = Readonly<{
  institute: number;
  lastUpdated: Date;
  comparisonDate: Date;
  baseCurrency: string;
  fx: ReadonlyArray<Currency>;
}>;

export type CurrencyWithCountry = Currency & {
  countryName?: string;
  countryCode?: string;
};

export const CurrencyService = {
  getAll: async () => {
    return await axios.get<CurrencyRoot>(
      `https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343`,
    );
  },
};
