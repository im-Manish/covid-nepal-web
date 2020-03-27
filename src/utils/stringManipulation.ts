import { getlocalStorage } from "./storage";
import { ILanguage } from "src/interface/common";

export const setCommas = (input: number) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const pluralize = (count: number, text: string) => {
  if (count === 1) {
    return text;
  } else {
    return text + 's';
  }
};

export const selectLanguage = (item: ILanguage) => {
  const getLanguage = getlocalStorage('i18nextLng');
  if (getLanguage === 'ne' && item.np) {
    return item.np
  } else return item.en
}
