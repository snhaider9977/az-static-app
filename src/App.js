import React from 'react';

export default function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: 24}}>
      <h1>Welcome to Static React App</h1>
      <p>This is a minimal React app intended for deployment to Azure Static Web Apps via Azure DevOps pipelines.</p>
      <p>Build with <strong>npm run build</strong> and deploy using the provided pipeline.</p>
    </div>
  );
}
