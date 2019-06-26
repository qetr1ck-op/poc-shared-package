import React from 'react';
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
