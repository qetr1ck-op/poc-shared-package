import React from 'react';
import { Button } from 'semantic-ui-react';

import './comp.style.less';

export interface Props {
  fooProp: string;
}
export const FooComp: React.FC<Props> = ({ fooProp }) => (
  <div className="bg">{fooProp.toLocaleUpperCase()}</div>
);

export const ButtonExampleLoading = () => (
  <div>
    <Button loading>Loading</Button>
    <Button basic loading>
      Loading
    </Button>
    <Button loading primary>
      Loading
    </Button>
    <Button loading secondary>
      Loading
    </Button>
  </div>
);
