import { Box } from '@mui/material';
import Footer from '../../molecules/Footer';
import NavBar from '../../organisms/NavBar';

export default function Layout({ children }) {
  return (
    <Box sx={{
      minHeight: '100vh',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <main style={{
        minHeight: '100%',
        flex: '1',
      }}
      >
        <NavBar />
        { children }
      </main>
      <Footer style={{
        marginTop: '1rem',
        minHeight: '70px',
      }}
      />
    </Box>
  );
}
