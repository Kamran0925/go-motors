import { mockCars } from "@constants/mockCars";
import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 25;
  const mileageFactor = 0.5;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, fuel } = filters;

  const filteredCars = mockCars.filter((car) => {
    const matchMake = manufacturer
      ? car.make.toLowerCase().includes(manufacturer.toLowerCase())
      : true;
    const matchYear = year ? car.year === year : true;
    const matchModel = model
      ? car.model.toLowerCase().includes(model.toLowerCase())
      : true;
    const matchFuel = fuel
      ? car.fuel_type.toLowerCase() === fuel.toLowerCase()
      : true;
    return matchMake && matchYear && matchModel && matchFuel;
  });

  return filteredCars;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("model", model);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
