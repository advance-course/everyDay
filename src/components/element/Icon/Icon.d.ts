import map from 'src/components/element/Icon/map';
import {TextStyle} from 'react-native'
export interface IIcon {
  color?:string,
  fontSize?:number,
  type:keyof typeof map,
  style?:TextStyle,
  spin?:boolean
}