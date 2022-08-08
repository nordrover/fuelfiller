import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Grid, Header, InputText } from "../../components";

const Home = ({ t }) => {
  const formData = [
    {
      disabled: false,
      id: "lastOdometer",
      label: t("Last odometer"),
    },
    {
      disabled: false,
      id: "odometer",
      label: t("Odometer"),
    },
    {
      disabled: true,
      id: "road",
      label: t("Distance traveled"),
    },
    {
      disabled: false,
      id: "fuel",
      label: t("Amount of fuel"),
    },
    {
      disabled: true,
      id: "average",
      label: t("Average consumption"),
    },
    {
      disabled: false,
      id: "price",
      label: t("Unit price"),
    },
    {
      disabled: true,
      id: "totalPrice",
      label: t("Total price"),
    },
  ];

  const [data, setData] = useState({
    average: 0,
    fuel: 0,
    lastOdometer: 0,
    odometer: 0,
    price: 0,
    road: 0,
    totalPrice: 0,
  });

  const calcRoad = (lastOdometer, odometer) => {
    return odometer - lastOdometer;
  };

  const calcTotalPrice = (fuel, price) => {
    return Math.round(fuel * price);
  };

  const calcAverage = (fuel, road) => {
    return road !== 0
      ? (fuel / road * 100).toFixed(2)
      : 0;
  };

  const changeData = (id, value) => {
    const restData = {};
    restData[id] = parseFloat(value);

    const tempData = { ...data, ...restData };

    setData({
      ...tempData,
      road: calcRoad(tempData.lastOdometer, tempData.odometer),
      totalPrice: calcTotalPrice(tempData.fuel, tempData.price),
      average: calcAverage(tempData.fuel, tempData.road),
    });
  };

  return (
    <>
      <Header />
      <Grid>
        {formData &&
          formData.map((item) => {
            return (
              <InputText
                disabled={item.disabled}
                id={item.id}
                key={item.id}
                label={item.label}
                onChange={(e) => {
                  changeData(item.id, e.target.value);
                }}
                value={data[item.id]}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default withTranslation()(Home);
