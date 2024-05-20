// import styles from "../styles/header.module.scss";

// const Header = () => {
//   return <div className={styles.header}>Header</div>;
// };

// export default Header;
import style from "../styles/header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.logo}>TelegramHolder</div>
          <div className={style.links}>
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">Faq</Link>
          </div>
          <button className={style.btn}>Get Started</button>
          <div className={style.hamburger}>
            <Button onClick={handleOpenModal}>
              <RxHamburgerMenu className={style.open} />
            </Button>
          </div>
        </nav>
      </header>
      <Modal
        open={isModalOpen}
        className={style.modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.mobile}>
          <Button onClick={handleCloseModal}>
            <IoMdClose className={style.open} />
          </Button>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/features">Features</Link>
          </span>
          <span>
            <Link to="/testimonials">Testimonials</Link>
          </span>
          <span>
            <Link to="/pricing">Pricing</Link>
          </span>
          <span>
            <Link to="/faq">Faq</Link>
          </span>
        </div>
      </Modal>
    </>
  );
};

export default Header;
