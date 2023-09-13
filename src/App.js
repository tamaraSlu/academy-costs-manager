import './App.css';
import { HitButton } from './components/base-controls/hit-button/hit-button';
import { theme } from './themes/default-theme';
import { ThemeProvider } from '@mui/material/styles';

/**
 * Main application component.
 * @returns Application component element.
 */
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HitButton type="contained">Lol</HitButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
