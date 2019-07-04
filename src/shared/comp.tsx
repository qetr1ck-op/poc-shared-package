import React from "react";

import "./comp.style.less";

export interface Props {
  fooProp: string;
}
export const FooComp: React.FC<Props> = ({ fooProp }) => (
  <div className="bg">{fooProp.toLocaleUpperCase()}</div>
);
