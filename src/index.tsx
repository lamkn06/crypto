import * as React from 'react';
import { render } from 'react-dom';
import { pdfjs } from 'react-pdf';

import App from './App';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
render(<App />, document.getElementById('root'));
