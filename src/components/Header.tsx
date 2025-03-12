// Header.tsx
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {colors} from '../assets/colors';
import { Link } from 'react-router-dom';

// Définition des styles
const styles = {
  navbar: {
    position: "relative" as const,
    width: "100%",
    padding: "1rem 0",
    margin: "0 auto",
  },
  container: {
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1300px",
    width: "90%",
  },
  menuButton: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    "@media (max-width: 768px)": {
      display: "none",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "#ffffff",
      padding: "1rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
  },
  navLinksOpen: {
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  cartButton: {
    backgroundColor: "#000",
    fontWeight: "bold",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      transform: "scale(1.1)",
    },
    textTransform: "none" as const,
  },

  buttonGroup: {
    maxWidth: "600px", // Limite la largeur du groupe de boutons
    margin: "0 auto",
  },

  button: {
    color: colors.realDark,
    fontWeight: 'semibold',
    '&:hover': {
      backgroundColor: colors.lighttBlue,
      transform: 'scale(1.1)',
    },
    textTransform: "none" as const,
  },
  badge: {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  }
  

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
      height: 50vh;
      padding: 4rem;
      background-color: #ffffff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      z-index: 1;  
      gap: '20px',    
    }
    
    .nav-links.open .MuiButton-root {
      margin: 0.5rem 0;
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
      // Get the element's position relative to the top of the page
      const elementPosition = element.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset;
      // Subtract 20vh from the scroll target position
      const offset = window.innerHeight * -0.1; // 20vh
      
      // Scroll to the adjusted position
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

          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Stack
              spacing={10}
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              sx={styles.buttonGroup}
            >
              <Button style={styles.button} component={Link} to="/" >Accueil</Button>
              <Button style={styles.button} onClick={() => scrollToSection('documentation')}>Documentation</Button>
              <Button style={styles.button} onClick={() => scrollToSection('contact')}>Contact</Button>
              <Button style={styles.button} onClick={() => scrollToSection('customisation')}>Customisation</Button>
              <Button sx ={styles.button} component={Link} to="/auth">Connexion</Button>
            </Stack>
          </div>

          <Badge badgeContent={cartCount > 0 ? cartCount : null} color="error" sx={styles.badge}>
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
    </>
  );
}

export default Header;