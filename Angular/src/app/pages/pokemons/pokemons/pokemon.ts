export interface Pokemon {
  id?: number;
  name: string;
  game_indices?: [];
  height?: number;
  location_area_encounters?: string;
  sprites?:
  {
    front_default?: string,
    back_default?: string
  };
  stats?: [];
  types?: [];
  weight?: number
}
