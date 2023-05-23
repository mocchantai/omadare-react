import React, {ReactElement} from 'react';
// import ReactDOM from 'react-dom';
import {createRoot, Root} from 'react-dom/client';


const container: HTMLElement | null = document.getElementById('app');
const root: Root = createRoot(container as HTMLElement);

const App = (): ReactElement => {
    return (
        <h1>テストです!!</h1>
    )
}

root.render(<App />);
