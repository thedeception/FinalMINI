import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme baseColor="#e1eedd" highlightColor="#ffffff">
    <React.StrictMode>
      <App />
      <div className="bg-slate-50"style={{ color: '#e1eedd' }}>
        <Footer />
      </div>
    </React.StrictMode>
  </SkeletonTheme>
);

reportWebVitals();
