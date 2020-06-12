import { Types } from './types';
import { Stats } from './stats';


export interface Pokemon {
  id?: number;
  name: string;
  game_indices?: [];
  height?: number;
  location_area_encounters?: string;
  sprites?:
  {
    front_default?: string;
    back_default?: string;
    front_shiny?: string;
    back_shiny?: string;
  };
  stats?: [Stats];
  types?: [Types];
  weight?: number;
}
