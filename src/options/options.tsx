import React from 'react'
import ReactDOM  from 'react-dom/client';

import './options.css'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

ReactDOM.createRoot(root).render(
    <h1>Options Page</h1>
);