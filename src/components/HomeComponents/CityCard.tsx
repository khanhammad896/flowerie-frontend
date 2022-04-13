import { Grid } from "@mui/material";
import type { FC } from "react";

interface CityCardProps {
  city: string;
  distance: string;
  img: string;
}

const CityCard: FC<CityCardProps> = ({ city, distance, img }): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="w-city-w h-city-h overflow-hidden">
          <img src={img} alt="city" className="w-full h-full rounded-20" />
        </div>
        <div className="ml-4 flex flex-col ">
          <span className="font-regular text-20 text-black">{city}</span>
          <span className="font-regular text-sm text-light mt-0.5">
            {distance}
          </span>
        </div>
      </div>
    </Grid>
  );
};

export default CityCard;
