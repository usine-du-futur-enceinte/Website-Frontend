import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { colors } from '../assets/colors';
import logo from '../assets/Images/Logo/Logo-Final.png';
import { Link } from 'react-router-dom';

// Définition des styles
const styles = {
  navbar: {
    position: 'relative' as const,
    width: '100%',
    padding: '1rem 0',
    margin: '0 auto',
  },
  container: {
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1300px',
    width: '90%',
  },
  logo: {
    marginRight: 'auto',
  },
  menuButton: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    '@media (max-width: 768px)': {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      padding: '1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
  },
  navLinksOpen: {
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  cartButton: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      transform: 'scale(1.1)',
    },
    textTransform: 'none' as const,
  },
  buttonGroup: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  button: {
    color: colors.realDark,
    fontWeight: 'semibold',
    '&:hover': {
      backgroundColor: colors.lighttBlue,
      transform: 'scale(1.1)',
    },
    textTransform: 'none' as const,
  },
  badge: {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  mobileBadge: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      margin: '1rem 0',
    },
  },
  desktopBadge: {
    display: 'block',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
};

const cssStyles = `
  @media (max-width: 768px) {
    .menu-button {
      display: block !important;
    }
    .nav-links {
      display: none;
    }
    .MuiButton-root {
      text-transform: none !important;
      font-weight: bold !important;
    }
    .nav-links.open {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: auto;
      padding: 2rem;
      background-color: #ffffff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      z-index: 1;
      align-items: center;
    }
    .nav-links.open .MuiButton-root {
      margin: 0.5rem 0;
    }
    .mobile-cart {
      display: flex !important;
      margin-top: 1rem;
    }
    .desktop-cart {
      display: none !important;
    }
  }
  @media (min-width: 769px) {
    .menu-button {
      display: none !important;
    }
    .nav-links {
      display: flex !important;
      justify-content: center;
      flex: 1;
    }
    .mobile-cart {
      display: none !important;
    }
    .desktop-cart {
      display: flex !important;
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const count = cart.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
      setCartCount(count);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      const offset = window.innerHeight * -0.1;

      window.scrollTo({
        top: offsetPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{cssStyles}</style>
      <div style={styles.navbar}>
        <div style={styles.container}>
          {/* Logo */}
          <div style={styles.logo}>
            <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
          </div>

          <IconButton
            className="menu-button"
            onClick={toggleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Stack
              spacing={10}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              sx={styles.buttonGroup}
            >
              <Button style={styles.button} component={Link} to="/">Accueil</Button>
              <Button style={styles.button} onClick={() => scrollToSection('documentation')}>Documentation</Button>
              <Button style={styles.button} onClick={() => scrollToSection('contact')}>Contact</Button>
              <Button style={styles.button} onClick={() => scrollToSection('customisation')}>Customisation</Button>
              <Button style={styles.button} component={Link} to="/auth">Connexion</Button>
            </Stack>
            
            {/* Mobile cart button - this appears below the navigation links on mobile */}
            <Badge className="mobile-cart" badgeContent={cartCount > 0 ? cartCount : null} color="error" sx={styles.badge}>
              <Button
                className='panier-button'
                variant="contained"
                sx={styles.cartButton}
                component={Link}
                to="/cart"
              >
                Panier
              </Button>
            </Badge>

            {/* Desktop cart button */}
          <Badge className="desktop-cart" badgeContent={cartCount > 0 ? cartCount : null} color="error" sx={styles.badge}>
            <Button
              className='panier-button'
              variant="contained"
              sx={styles.cartButton}
              component={Link}
              to="/cart"
            >
              Panier
            </Button>
          </Badge>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;