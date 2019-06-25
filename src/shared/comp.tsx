import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

import './breadcrumbs.style.less';

interface SectionProps {
  to?: string;
  active?: boolean;
}

export class TSCBreadcrumbs extends React.PureComponent {
  static Section: React.FC<SectionProps> = ({ to, active, children }) => {
    if (active) {
      return <Breadcrumb.Section active>{children}</Breadcrumb.Section>;
    }

    return (
      <Breadcrumb.Section link as={Link} to={to}>
        {children}
      </Breadcrumb.Section>
    );
  };

  static Divider = () => <Breadcrumb.Divider icon="right chevron" />;

  render() {
    return <Breadcrumb size="small">{this.props.children}</Breadcrumb>;
  }
}
