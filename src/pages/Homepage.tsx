import React, { useState } from 'react';
import Header from "../components/Header"
import { CSSProperties } from 'react';
import { Button } from "@mui/material";
import { colors } from '../assets/colors';
import { Add, Remove, ArrowDropDownCircle } from "@mui/icons-material";

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  productName: {
    fontSize: '8rem',
    margin: '1rem',
    fontWeight: 'bold',
  },
  h1Title: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  titleLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
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
  },  documentationContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  leftSection: {
    width: '40%',
  },
  rightSection: {
    width: '55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    borderBottom: '2px solid black',
    padding: '1rem 0',
    cursor: 'pointer',
  },
  sectionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  sectionContent: {
    marginTop: '0.5rem',
    fontSize: '1rem',
  },

  passer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, color 0.3s ease, border 0.3s ease',
    position: 'relative',
    bottom: '10%',
    right: '-40%',
    padding: '10px',
    borderRadius: '5px',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#fff',
      backgroundColor: 'black',
      border: '2px solid white',
    },
  },
  icon : {
    '&:hover': {
      transform: 'scale(1.1)',
      border: '2px solid white',
    },
  },
  customContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: '2rem auto',
  },
  colorOptions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '2rem',
  },
  colorCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginBottom: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  selectedColorCircle: {
    boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.5)', // Effet de glow
  },
  productDisplay: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: '400px',
    border: '2px solid black',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: '1rem',
    padding: '1rem',
    border: '2px solid black',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  oldPrice: {
    textDecoration: 'line-through',
    marginLeft: '10px',
    color: 'gray',
  },
  newPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'red',
  },

};

function Homepage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { title: 'DESCRIPTION', content: 'Le Bowl Box 3000 est un bol connecté qui vous permet de manger en toute sécurité. Il est équipé de capteurs qui analysent votre nourriture et vous alertent en cas de danger.', key: 'desc' },
    { title: '3D', content: 'Voici une vue 3D du produit, vous pouvez le manipuler pour voir tous les détails.', key: '3d' },
    { title: 'ÉLECTRONIQUE', content: 'Voici le schéma électronique du produit, vous pouvez le télécharger pour le consulter.', key: 'electro' },
    { title: 'PLUS', content: 'Voici le code source du produit, vous pouvez le télécharger pour le consulter.', key: 'plus' },
  ];
  const products = [
    { name: "La Bowl Bleue", color: "#00aaff", price: 200, oldPrice: 1000 },
    { name: "La Bowl Rouge", color: "#ff0000", price: 250, oldPrice: 1100 },
    { name: "La Bowl Verte", color: "#00cc00", price: 180, oldPrice: 900 },
    { name: "La Bowl Orange", color: "#ffaa00", price: 230, oldPrice: 950 },
  ];
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div>
      <div style={styles.container}>
        <Header></Header>
        <h1 style={styles.productName}>Bowl Box 3000</h1>
      </div>
      <div className="documentation" style={styles.container}>
        <div style={styles.titleLine}>
          <h1 style={styles.h1Title}>
            Documentation
          </h1>
          <Button
            className='panier-button'
            variant="contained"
            sx={styles.cartButton}
          >
            User Notice
          </Button>
        </div>
        
        <div style={styles.documentationContent}>
          <div style={styles.leftSection}>
            {sections.map((section) => (
              <div key={section.key} style={styles.section} onClick={() => setOpenSection(openSection === section.key ? null : section.key)}>
                <div style={styles.sectionTitle}>
                  {section.title}
                  {openSection === section.key ? <Remove /> : <Add />}
                </div>
                {openSection === section.key && <p style={styles.sectionContent}>{section.content}</p>}
              </div>
            ))}
          </div>
          
          <div style={styles.rightSection}>
            <p>Image Placeholder</p>
            <div style={{...styles.passer, fontSize:'14px'}} >
              <ArrowDropDownCircle sx={styles.icon}/>
              Passer
            </div>
          </div>
        </div>
      </div>

        <div className="customisation" style={styles.container}>
          <div style={styles.titleLine}>
            <h1 style={styles.h1Title}>
              Customisation
            </h1>
          </div>
          <div style={styles.customContainer}>
        <div style={styles.colorOptions}>
          {products.map((product) => (
            <div
              key={product.name}
              style={{ ...styles.colorCircle, backgroundColor: product.color }}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
        <div style={styles.productDisplay}>
          <p>Image Placeholder ({selectedProduct.name})</p>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <p><strong>MODEL :</strong> {selectedProduct.name}</p>
        <div style={styles.priceContainer}>
          <span style={styles.newPrice}>{selectedProduct.price}€</span>
          <span style={styles.oldPrice}>{selectedProduct.oldPrice}€</span>
        </div>
        <Button variant="contained" style={{ backgroundColor: '#000', color: '#fff', fontWeight: 'bold' }}>
          Panier +
        </Button>
      </div>
        </div>
        <div className="contact" style={styles.container}>
          <div style={styles.titleLine}>
            <h1 style={styles.h1Title}>
              Contact & SAV
            </h1>
            <Button
              className='panier-button'
              variant="contained"
              sx={styles.cartButton}
            >
              Le SAV
            </Button>
          </div>
        </div>
      </div>
      )
}

      export default Homepage
