import React, { Fragment, ReactNode } from 'react';

type BaseLayoutProps = {
    children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <header>
                Header
            </header>

            <main>
                {children}
            </main>

            <footer>
                footer
            </footer>
        </Fragment>
    );
};

export default BaseLayout;