import React from 'react';

import { Header, RoutesApp } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <>
            <Header />
            <RoutesApp />
        </>
    );
};

export default App;
