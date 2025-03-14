import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { CSSProperties } from 'react';
import { Button } from "@mui/material";
import { colors } from '../assets/colors';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

// Photos des membre de l'équipe
import Tomm from '../assets/Images/photos/Tomm.jpg';
import Milharo from '../assets/Images/photos/Milharo.jpg';
import Ayoub from '../assets/Images/photos/Ayoub.jpg';
import Hassan from '../assets/Images/photos/Hassan.jpg';
import Axel from '../assets/Images/photos/Axel.jpg';
import SuzyLou from '../assets/Images/photos/SuzyLou.jpg';
import Brice from '../assets/Images/photos/Brice.jpg';
import MarieAnge from '../assets/Images/photos/MarieAnge.jpg';
import DamienR from '../assets/Images/photos/DamienR.jpg';
import DamienB from '../assets/Images/photos/DamienB.jpg';
import Emma from '../assets/Images/photos/Emma.jpg';
import PJ from '../assets/Images/photos/PJ.jpg';
import Clement from '../assets/Images/photos/Clement.jpg';
import Mathieu from '../assets/Images/photos/Mathieu.jpg';

// Photos de l'enceinte
import face from '../assets/Images/Enceinte/face.png';
import Bowl3D from '../assets/Images/Enceinte/3D.png';
import BowlBleue from '../assets/Images/Enceinte/BowlBleue.png';
import BowlRouge from '../assets/Images/Enceinte/BowlRouge.png';
import BowlVerte from '../assets/Images/Enceinte/BowlVerte.png';
import BowlOrange from '../assets/Images/Enceinte/BowlOrange.png';

//Documents
import userNotice from '../assets/Documents/NoticeUtilisateur.pdf';
import ficheTechnique from '../assets/Documents/FicheTechnique.pdf';
import noticeSAV from '../assets/Documents/NoticeSAV.pdf';



// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'TOMM JOBIT',
    role: 'Étudiant 5a Info Alt',
    email: 'tommjobit@live.fr',
    status: 'DEV WEB',
    statusColor: colors.devWebColor,
    image: Tomm,
  },
  {
    id: 2,
    name: 'AYOUB ERROUICHAQ',
    role: 'Étudiant 5a Info Alt',
    email: 'errouichaqayoub@gmail.com',
    status: 'CHEF DE PROJET',
    statusColor: colors.chefProjetColor,
    image: Ayoub,
  },
  {
    id: 3,
    name: 'AXEL DEFO MBOBDA',
    role: 'Étudiant 5a Info Alt',
    email: 'axeldefo22@gmail.com',
    status: 'DEV WEB',
    statusColor: colors.devWebColor,
    image: Axel,
  },
  {
    id: 4,
    name: 'HASSAN LAFAI',
    role: 'Étudiant 5a Info Alt',
    email: 'Hassan.Lafai.Etu@univ-lemans.fr',
    status: 'DOCUMENTATION',
    statusColor: colors.dataColor,
    image: Hassan,
  },
  {
    id: 5,
    name: 'BRICE NOUMI MIPO',
    role: 'Étudiant 5a Info Alt',
    email: 'Brice.Noumi_Mipo.Etu@univ-lemans.fr',
    status: '3D',
    statusColor: colors.tdColor,
    image: Brice,
  },
  {
    id: 6,
    name: 'DAMIEN RIANDAIRE',
    role: 'Étudiant 5a Info Alt',
    email: 'Damien.Riandiere.Etu@univ-lemans.fr',
    status: 'DEV WEB',
    statusColor: colors.devWebColor,
    image: DamienR,
  },
  {
    id: 7,
    name: 'MARIE ANGE MBALA',
    role: 'Étudiant 5a Info Alt',
    email: 'mbalamarieange@gmail.com',
    status: 'DOCUMENTATION',
    statusColor: colors.devWebColor,
    image: MarieAnge,
  },
  {
    id: 8,
    name: 'CLEMENT CORDIER',
    role: 'Étudiant 5a Info Alt',
    email: 'Clement.Cordier.Etu@univ-lemans.fr',
    status: '3D',
    statusColor: colors.scMasterColor,
    image: Clement,
  },
  {
    id: 9,
    name: 'DAMIEN BOUCHER',
    role: 'Étudiant 5a Info Alt',
    email: 'Damien.Boucher.Etu@univ-lemans.fr',
    status: '3D',
    statusColor: colors.dataColor,
    image: DamienB,
  },
  {
    id: 10,
    name: 'EMMA ROBERT',
    role: 'Étudiant 5a Info Alt',
    email: 'Emma-Robert.Etu@univ-lemans.fr',
    status: '3D',
    statusColor: colors.devWebColor,
    image: Emma,
  },
  {
    id: 11,
    name: 'MATHIEU CHOPLAIN',
    role: 'Étudiant 5a Info Alt',
    email: 'Mathieu.Choplain.Etu@univ-lemans.fr',
    status: 'ELECTRONIQUE',
    statusColor: colors.designColor,
    image: Mathieu,
  },
  {
    id: 12,
    name: 'PIERRE-JEAN LEFORT',
    role: 'Étudiant 5a Info Alt',
    email: 'Pierre-Jean.Lefort.Etu@univ-lemans.fr',
    status: '3D',
    statusColor: colors.encadrantColor,
    image: PJ,
  },
  {
    id: 13,
    name: 'SUZY-LOU GERVOT',
    role: 'Étudiant 5a Info Alt',
    email: 'suzylou.g@gmail.com',
    status: 'FABLAB',
    statusColor: colors.encadrantColor,
    image: SuzyLou,
  },
  {
    id: 14,
    name: 'MATTHIEU MILHARO',
    role: 'Directeur des etudes',
    email: 'Matthieu.Milharo@univ-lemans.fr',
    status: 'ENCADRANT',
    statusColor: colors.encadrantColor,
    image: Milharo,
  }
];

const sections = [
  {
    title: 'DESCRIPTION',
    content: 'La BowlBox 3000 est une enceinte Bluetooth portable stéréo dotée de haut-parleurs de 50 W pour un son équilibré et immersif. Son design compact en bois de bambou la rend légère et robuste, idéale pour votre intérieur.',
    key: 'desc'
  },
  {
    title: '3D',
    content: 'Le design de la BowlBox 3000 a été modélisé sur SolidWorks, avec un rendu final correspondant aux aperçus à droite, alliant performance et esthétisme.',
    key: '3d'
  },
  {
    title: 'CARACTERISTIQUES',
    content: (
      <>
        Enceinte stéréo de 100W, avec radiateurs passifs pour des basses profondes. Connectivité Bluetooth 5.0 et port AUX 3.5mm. Portée Bluetooth de 10 mètres. Plus de détails dans la fiche technique disponible &nbsp;
        <a href={ficheTechnique} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: colors.blue, fontWeight: 'bold', }}>
          ici
        </a>.
      </>
    ),
    key: 'electro'
  },
  {
    title: 'PLUS',
    content: (
      <>
        Conçue par les étudiants en alternance de l’ENSIM, la BowlBox 3000 allie design, performance et simplicité.
        Découvrez l'espace GitHub qui a servi pour la gestion du projet &nbsp;
        <a href="https://github.com/usine-du-futur-enceinte" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: colors.blue, fontWeight: 'bold', }}>
          ici
        </a>.
      </>
    ),
    key: 'plus'
  }
];

const products = [
  { id: 1, name: "La Bowl Bleue", color: colors.blue, price: 200, oldPrice: 1000, image: BowlBleue },
  { id: 2, name: "La Bowl Rouge", color: colors.red, price: 250, oldPrice: 1100, image: BowlRouge },
  { id: 3, name: "La Bowl Verte", color: colors.green, price: 180, oldPrice: 900, image: BowlVerte },
  { id: 4, name: "La Bowl Orange", color: colors.orange, price: 230, oldPrice: 950, image: BowlOrange},
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
    height: '90%',
    width: '70%',
    marginTop: '-1rem',
  },
  imageface: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
  },
  leftSection: {
    width: '40%',
  },
  rightSection: {
    width: '55%',
    display: 'flex',
    flex: '0 0 auto',
    maxHeight: '450px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
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
    fontSize: '0.8rem',
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
    height: '400px',
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.75rem',
    margin: '0.5rem',
    borderRadius: '15px',
    border: `2px solid ${colors.black}`,
    backgroundColor: colors.white,
    minWidth: '350px',
    maxWidth: '500px',
    height: '120px',
    justifyContent: 'flex-start',
  },
  memberImage: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    marginRight: '1rem',
    border: `2px solid ${colors.black}`,
    objectFit: 'cover',
  },
  memberInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: '1rem',
    margin: '0.1rem 0',
    textAlign: 'left',
  },
  memberRole: {
    fontSize: '0.75rem',
    margin: '0.1rem 0',
    textAlign: 'left',
  },
  memberEmail: {
    fontSize: '0.6rem',
    margin: '0.1rem 0',
    color: colors.gray,
    textAlign: 'left',
  },
  memberStatus: {
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    margin: '0.1rem 0',
    marginRight: 'auto',
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
    overflow: 'hidden', // Ajouter cette propriété
    height: 'auto',
  },
  image3D: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  dialogPaper: {
    backgroundColor: colors.white,
    borderRadius: '5px',
    border: `2px solid ${colors.black}`,
  },
  dialogTitle: {
    fontWeight: 'bold',
    borderBottom: `2px solid ${colors.black}`,
  },
  dialogTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
      '& fieldset': {
        borderColor: colors.black,
        borderWidth: '2px',
      },
    },
  },
  dialogLink: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  dialogCancelButton: {
    color: colors.black,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  dialogSendButton: {
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
};

function Homepage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [carouselPosition1, setCarouselPosition1] = useState(0);
  const [carouselPosition2, setCarouselPosition2] = useState(0);
  const [carouselPosition3, setCarouselPosition3] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState<{ id: number, name: string, price: number, oldPrice: number, color: string, image: string, quantity: number }[]>(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    // Construct the mailto URL
    const mailtoUrl = `mailto:a@agmail.com?subject=${encodeURIComponent(formJson.object)}&body=${encodeURIComponent(`${formJson.message}`)}`;

    // Open the mail client
    window.location.href = mailtoUrl;
  };

  // Split team members into three rows for the carousel
  const teamRow1 = teamMembers.slice(0, 4);
  const teamRow2 = teamMembers.slice(4, 9);
  const teamRow3 = teamMembers.slice(9);

  useEffect(() => {
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
          <img src={face} alt="Bowl Box 3000" style={styles.imageface}/>
        </div>
      </section>
      <section id="documentation" style={styles.container}>
        <div style={styles.titleLine}>
          <h1 style={styles.h1Title}>
            Documentation
          </h1>
          <a
            href={userNotice}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button
              className='panier-button'
              variant="contained"
              sx={styles.cartButton}
            >
              User Notice
            </Button>
          </a>
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
            <img src={Bowl3D} style={styles.image3D} alt="3D" />
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
            <img src={selectedProduct.image} alt={selectedProduct.name} style={styles.image3D}/>
          </div>
        </div>
        <div style={styles.detailsContainer}>
          <p><strong>MODEL :</strong> {selectedProduct.name}</p>
          <div style={styles.priceContainer}>
            <span style={styles.newPrice}>{selectedProduct.price}€</span>
            {selectedProduct.oldPrice != 0 &&
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
            onClick={handleClickOpen}
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
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: colors.white,
            borderRadius: '5px',
            border: `2px solid ${colors.black}`,
          },
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle sx={styles.dialogTitle}>
          {"Service Après-Vente"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ my: 2 }}>
            Veuillez remplir le formulaire ci-dessous pour contacter notre service après-vente.
            Vous pouvez par ailleurs retrouver notre notice SAV <a href={noticeSAV} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: colors.blue, fontWeight: 'bold', }}>ici</a>.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            sx={styles.dialogTextField}
          />

          <TextField
            required
            margin="dense"
            id="object"
            name="object"
            label="Objet"
            type="text"
            fullWidth
            variant="outlined"
            sx={styles.dialogTextField}
          />

          <TextField
            required
            margin="dense"
            id="message"
            name="message"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            sx={styles.dialogTextField}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={styles.dialogCancelButton}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            sx={styles.dialogSendButton}
            variant="contained"
          >
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Homepage;
