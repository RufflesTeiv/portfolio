declare module '*.svg' {
  import * as React from 'react';

  // This allows you to import { ReactComponent as Icon } from './file.svg'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // This allows you to import url from './file.svg'
  const src: string;
  export default src;
}