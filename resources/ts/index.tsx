import React, {ReactElement} from 'react';
import {createRoot, Root} from 'react-dom/client';
import App from "./app";

const container: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(container as HTMLElement);

root.render(<App />);
