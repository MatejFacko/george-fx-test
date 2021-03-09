import {sortBy} from "lodash";
import {useQuery} from "react-query";
import {CurrencyService} from "../services";
import {CurrencyCountryMap, isoCountries} from "../utils";

export const useGetSortedCurrency = () =>
  useQuery(["currencyQuery"], async () => {
    const {data} = await CurrencyService.getAll();

    const updatedData = data.fx?.map(currencyItem => {
      const countryCode = CurrencyCountryMap.find(
        item => item.currency === currencyItem.currency,
      )?.country;
      const countryName = countryCode && isoCountries[countryCode];

      return {
        ...currencyItem,
        countryCode: countryCode,
        countryName,
      };
    });

    return sortBy(updatedData, currency => currency.countryName);
  });
