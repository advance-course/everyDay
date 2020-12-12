import map from 'src/components/element/Icon/map';
export interface Iproview {
  iconName:keyof typeof map,
  title:string,
  description:string,
  to:string,

}