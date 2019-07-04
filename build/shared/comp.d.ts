import React from 'react';
import './comp.style.less';
interface SectionProps {
    to?: string;
    active?: boolean;
}
export declare class TSCBreadcrumbs extends React.PureComponent {
    static Section: React.FC<SectionProps>;
    static Divider: () => JSX.Element;
    render(): JSX.Element;
}
export {};
