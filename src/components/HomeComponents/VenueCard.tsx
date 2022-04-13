import { Grid } from "@mui/material";
import type { FC } from "react";

interface CityCardProps {
  venue: string;
  img: string;
}

const VenueCard: FC<CityCardProps> = ({ venue, img }): JSX.Element => {
  return (
    <Grid item>
      <div className="flex flex-col cursor-pointer">
        <div className="w-venue-w h-venue-h overflow-hidden">
          <img src={img} alt="city" className="w-full h-full rounded-20" />
        </div>
        <span className="font-regular text-3xl text-black mt-8">{venue}</span>
      </div>
    </Grid>
  );
};

export default VenueCard;
