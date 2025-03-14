import { useState, useEffect } from 'react';
import Header from "../components/Header"
import { CSSProperties } from 'react';
import { Button } from "@mui/material";
import { colors } from '../assets/colors';
import { Add, Remove } from "@mui/icons-material";
import Alert from '@mui/material/Alert';


// Team members data
const teamMembers = [
  { 
    id: 1, 
    name: 'TOMM JOBIT', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DEV WEB', 
    statusColor: colors.devWebColor,
    image: 'https://i.pravatar.cc/150?img=1',
  },
  { 
    id: 2, 
    name: 'MILHARO M.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'ENCADRANT', 
    statusColor: colors.encadrantColor,
    image: 'https://i.pravatar.cc/150?img=2',
  },
  { 
    id: 3, 
    name: 'AYOUB EL', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'CHEF DE PROJET', 
    statusColor: colors.chefProjetColor,
    image: 'https://i.pravatar.cc/150?img=3', 
  },
  { 
    id: 4, 
    name: 'ASSAIN L.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DATA', 
    statusColor: colors.dataColor,
    image: 'https://i.pravatar.cc/150?img=3', 
  },
  { 
    id: 5, 
    name: 'AXEL DEFO', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DEV WEB', 
    statusColor: colors.devWebColor,
    image: 'https://i.pravatar.cc/150?img=4', 
  },
  { 
    id: 6, 
    name: 'SUZY-LOU G.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'SCRUM MASTER', 
    statusColor: colors.scMasterColor,
    image: 'https://i.pravatar.cc/150?img=5', 
  },
  { 
    id: 7, 
    name: 'BRICE N.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: '3D', 
    statusColor: colors.tdColor,
    image: 'https://i.pravatar.cc/150?img=6', 
  },
  { 
    id: 8, 
    name: 'DAMIEN R.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DEV WEB', 
    statusColor: colors.devWebColor,
    image: 'https://i.pravatar.cc/150?img=7', 
  },
  { 
    id: 9, 
    name: 'MARIE AN.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DEV WEB', 
    statusColor: colors.devWebColor,
    image: 'https://i.pravatar.cc/150?img=8', 
  },
  { 
    id: 10, 
    name: 'SOPHIE T.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DESIGN', 
    statusColor: colors.designColor,
    image: 'https://i.pravatar.cc/150?img=9', 
  },
  { 
    id: 11, 
    name: 'LUCAS B.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DATA', 
    statusColor: colors.dataColor,
    image: 'https://i.pravatar.cc/150?img=10', 
  },
  { 
    id: 12, 
    name: 'EMMA P.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'DEV WEB', 
    statusColor: colors.devWebColor,
    image: 'https://i.pravatar.cc/150?img=11', 
  },
  { 
    id: 13, 
    name: 'THOMAS K.', 
    role: 'Étudiant 5a Info Alt', 
    email: 'tomm.hzgz@univ-lemans.fr', 
    status: 'ENCADRANT', 
    statusColor: colors.encadrantColor,
    image: 'https://i.pravatar.cc/150?img=12', 
  }
];

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh', 
    boxSizing: 'border-box', 
  },
  containerFirst: {
    padding: '0rem 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
  },
  productName: {
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  h1Title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  titleLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  cartButton: {
    backgroundColor: colors.black,
    fontWeight: 'bold',
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.white,
      color: colors.black,
      transform: 'scale(1.1)',
    },
    textTransform: 'none' as const,
  },
  savButton: {
    backgroundColor: colors.yellow,
    fontWeight: 'bold',
    color: colors.black,
    padding: '0.5rem 2rem',
    borderRadius: '5px',
    fontSize: '1.2rem',
    border: `2px solid ${colors.black}`,
  },
  documentationContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  mainImage: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    height: '90%',
    width: '70%',
    border: `2px solid ${colors.black}`,
  },
  leftSection: {
    width: '40%',
  },
  rightSection: {
    width: '55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
  },
  section: {
    borderBottom: `2px solid ${colors.black}`,
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
  customContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '50%',
    margin: '0rem auto',
  },
  colorOptions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '2rem',
    gap: '30px',
  },
  colorCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  selectedColorCircle: {
    boxShadow: `0 0 15px 5px ${colors.black}`,
  },
  productDisplay: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    height: '400px',
    border: `2px solid ${colors.black}`,
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: '1rem',
    padding: '1rem',
    border: `2px solid ${colors.black}`,
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  oldPrice: {
    textDecoration: 'line-through',
    marginLeft: '10px',
    color: colors.gray,
  },
  newPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: colors.red,
  },
  teamContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  teamCarousel: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: '1rem',
  },
  teamCarouselInner: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  teamMemberCard: {
    display: 'flex',
    flexDirection: 'row', // Change from column to row
    alignItems: 'center',
    padding: '0.75rem',
    margin: '0.5rem',
    borderRadius: '15px',
    border: `2px solid ${colors.black}`,
    backgroundColor: colors.white,
    minWidth: '350px', // Increase width
    maxWidth: '400px', // Increase max width
    height: '120px', // Control the height
    justifyContent: 'flex-start', // Align items to the start
  },
  memberImage: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    marginRight: '1rem', // Add margin to the right instead of bottom
    border: `2px solid ${colors.black}`,
    objectFit: 'cover',
  },
  memberInfo: { // New style for the text container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    margin: '0.1rem 0',
    textAlign: 'left', // Change to left alignment
  },
  memberRole: {
    fontSize: '0.85rem',
    margin: '0.1rem 0',
    textAlign: 'left', // Change to left alignment
  },
  memberEmail: {
    fontSize: '0.75rem',
    margin: '0.1rem 0',
    color: colors.gray,
    textAlign: 'left', // Change to left alignment
  },
  memberStatus: {
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    margin: '0.1rem 0',
    marginRight: 'auto', // Push to the right side
    color: colors.white,
  },
  carouselRow: {
    display: 'flex',
    marginBottom: '1rem',
    overflow: 'hidden',
  },
  alertContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
};

function Homepage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [carouselPosition1, setCarouselPosition1] = useState(0);
  const [carouselPosition2, setCarouselPosition2] = useState(0);
  const [carouselPosition3, setCarouselPosition3] = useState(0);

  const sections = [
    { title: 'DESCRIPTION', content: 'Le Bowl Box 3000 est un bol connecté qui vous permet de manger en toute sécurité. Il est équipé de capteurs qui analysent votre nourriture et vous alertent en cas de danger.', key: 'desc' },
    { title: '3D', content: 'Voici une vue 3D du produit, vous pouvez le manipuler pour voir tous les détails.', key: '3d' },
    { title: 'ÉLECTRONIQUE', content: 'Voici le schéma électronique du produit, vous pouvez le télécharger pour le consulter.', key: 'electro' },
    { title: 'PLUS', content: 'Voici le code source du produit, vous pouvez le télécharger pour le consulter.', key: 'plus' },
  ];
  
  const products = [
    { id: 1, name: "La Bowl Bleue", color: colors.blue, price: 200, oldPrice: 1000, image: "https://via.placeholder.com/50x30/87CEFA/000000?text=+" },
    { id: 2, name: "La Bowl Rouge", color: colors.red, price: 250, oldPrice: 1100, image: "https://via.placeholder.com/50x30/FF0000/000000?text=+" },
    { id: 3, name: "La Bowl Verte", color: colors.green, price: 180, oldPrice: 900, image: "https://via.placeholder.com/50x30/00CC00/000000?text=+" },
    { id: 4, name: "La Bowl Orange", color: colors.orange, price: 230, oldPrice: 950, image: "https://via.placeholder.com/50x30/FFAA00/000000?text=+" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState<{ id: number, name: string, price: number, oldPrice: number, color: string, image: string, quantity: number }[]>(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });
  const [isProductAdded, setIsProductAdded] = useState(false)
  
  

  const handleAddToCart = (product: typeof products[0]) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
  setIsProductAdded(true)
  // Hide the alert after 3 seconds
  setTimeout(() => {
    setIsProductAdded(false);
  }, 3000);
};


  // Split team members into three rows for the carousel
  const teamRow1 = teamMembers.slice(0, 4);
  const teamRow2 = teamMembers.slice(4, 9);
  const teamRow3 = teamMembers.slice(9);

  useEffect(() => {
    console.log("Mise à jour du localStorage avec le panier:", cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  

  // Animation effect for the carousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselPosition1((prev) => (prev - 1) % 2000);
      setCarouselPosition2((prev) => (prev - 1.5) % 2000);
      setCarouselPosition3((prev) => (prev - 2) % 2000);
    }, 30);

    return () => clearInterval(carouselInterval);
  }, []);

  const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div style={styles.teamMemberCard}>
      <img 
        src={member.image} 
        alt={member.name} 
        style={styles.memberImage}
      />
      <div style={styles.memberInfo}>
        <h3 style={styles.memberName}>{member.name}</h3>
        <p style={styles.memberRole}>{member.role}</p>
        <p style={styles.memberEmail}>{member.email}</p>
        <div style={{ 
        ...styles.memberStatus, 
        backgroundColor: member.statusColor 
      }}>
        {member.status}
      </div>
      </div>
      
    </div>
  );

  return (
    <div>
      <Header></Header>
       <section id="home" style={styles.containerFirst}>
        <h1 style={styles.productName}>Bowl Box 3000</h1>
        <div className="mainImage" style={styles.mainImage}>
          <img src="https://via.placeholder.com/800" alt="Bowl Box 3000" />
        </div>
      </section>
      <section id="documentation" style={styles.container}>
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
            <img src="https://via.placeholder.com/400" alt="3D" />
          </div>
        </div>
      </section>

      <section id="customisation" style={styles.container}>
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
                style={{ ...styles.colorCircle, backgroundColor: product.color, ...(selectedProduct.name === product.name ? { boxShadow: `0 0 15px 5px ${product.color}` } : {}) }}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          <div style={styles.productDisplay}>
            <img src="https://via.placeholder.com/400" alt={selectedProduct.name} />
          </div>
        </div>
        <div style={styles.detailsContainer}>
          <p><strong>MODEL :</strong> {selectedProduct.name}</p>
          <div style={styles.priceContainer}>
            <span style={styles.newPrice}>{selectedProduct.price}€</span>
            {selectedProduct.oldPrice !=0 &&
            <span style={styles.oldPrice}>{selectedProduct.oldPrice}€</span>
            }
          </div>
          <Button variant="contained" sx={styles.cartButton} onClick={() => handleAddToCart(selectedProduct)}>
            Panier +
          </Button>
          {isProductAdded && (
        <div style={styles.alertContainer}>
        <Alert severity="success">
          Le produit a été ajouté au panier
        </Alert>
      </div>
      )}
        </div>
      </section>
      <section id="contact" style={styles.container}>
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

        <div style={styles.teamContainer}>
          {/* First row of team members */}
          <div style={styles.carouselRow}>
            <div style={{
              ...styles.teamCarouselInner, 
              transform: `translateX(${carouselPosition1}px)`
            }}>
              {/* Duplicate members for infinite scrolling */}
              {[...teamRow1, ...teamRow1, ...teamRow1].map((member, index) => (
                <TeamMemberCard key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
          </div>
          
          {/* Second row of team members */}
          <div style={styles.carouselRow}>
            <div style={{
              ...styles.teamCarouselInner, 
              transform: `translateX(${carouselPosition2}px)`
            }}>
              {/* Duplicate members for infinite scrolling */}
              {[...teamRow2, ...teamRow2, ...teamRow2].map((member, index) => (
                <TeamMemberCard key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
          </div>
          
          {/* Third row of team members */}
          <div style={styles.carouselRow}>
            <div style={{
              ...styles.teamCarouselInner, 
              transform: `translateX(${carouselPosition3}px)`
            }}>
              {/* Duplicate members for infinite scrolling */}
              {[...teamRow3, ...teamRow3, ...teamRow3].map((member, index) => (
                <TeamMemberCard key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
