import React from 'react'
import ReactDOM  from 'react-dom/client';

import './popup.css'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

ReactDOM.createRoot(root).render(
    <h1>Popup Page</h1>
);