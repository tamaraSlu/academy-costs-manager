import './App.css';
import { HitButton } from './components/base-controls/hit-button/hit-button';
import { HitIcon } from './components/base-controls/hit-icon/hit-icon';
import { theme } from './themes/default-theme';
import { ThemeProvider } from '@mui/material/styles';

/**
 * Main application component.
 * @returns Application component element.
 */
function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <HitButton icon='filter' type='contained'>Lol</HitButton>
        <HitIcon>filter</HitIcon>
      </ThemeProvider>
    </div>
  );
}

export default App;
