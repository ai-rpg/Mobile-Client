/* tslint:disable */
/* eslint-disable */
import { Conversation } from './conversation';
export interface AdventureModel {
  adventure_id: string;
  gamelog?: Array<Conversation>;
  users?: Array<any>;
}
