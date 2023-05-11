/**
 * This module consists of all the type defination
 * for Work Screen Component.
 */
export interface IWorkProps {
  props?: any;
}

export type IWorkObjectTypes = {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: Array<string>;
};
