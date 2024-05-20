import { Link } from "react-router-dom";
import style from "../styles/footer.module.scss";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.footercontent}>
          <div className={style.boxes}>
            <h2>Company</h2>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Services</Link>
            <Link to={"/"}>Pricing</Link>
          </div>
          <div className={style.boxes}>
            <h2>Usefull Links</h2>
            <Link to={"/"}>Private Policy</Link>
            <Link to={"/"}>Terms and Conditions</Link>
            <Link to={"/"}>Disclaimer</Link>
            <Link to={"/"}>FAQ</Link>
          </div>
          <div className={style.boxes1}>
            <h2>Contact</h2>
            <div className={style.icons}>
              <FaInstagram />
              <FaWhatsapp />
              <FaTwitter />
              <CiPhone />
            </div>
            <div className={style.mail}>
              <CiMail />
              <a href="mailto:mailhere@gmail.com">mailhere@gmail.com</a>
            </div>
            <div className={style.number}>
              <CiPhone />
              <span>0045 26 71 99 53</span>
            </div>
          </div>
        </div>
        <div className={style.footerfooter}>
          Copyright &copy; 2024 All Rights Reserved TelegramHolder
        </div>
      </div>

      {/* mobile Footer */}

      <div className={style.footerMob}>
        <div className={style.footercontent}>
          <h3 className={style.header}>Telegram Placeholder</h3>
          <div className={style.icons2}>
            <FaInstagram />
            <FaWhatsapp />
            <FaTwitter />
            <CiPhone />
          </div>
          <div className={style.accordions}>
            <Accordion className={style.accordian2}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h2>Company</h2>
              </AccordionSummary>
              <AccordionDetails className={style.accordiancontent}>
                <Link to={"/"}>About Us</Link>
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Services</Link>
                <Link to={"/"}>Pricing</Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordian2}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h2>Usefull Links</h2>
              </AccordionSummary>
              <AccordionDetails className={style.accordiancontent}>
                <Link to={"/"}>Private Policy</Link>
                <Link to={"/"}>Terms and Conditions</Link>
                <Link to={"/"}>Disclaimer</Link>
                <Link to={"/"}>FAQ</Link>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded className={style.accordian2}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h2>Contact</h2>
              </AccordionSummary>
              <AccordionDetails className={style.accordiancontent}>
                <div className={style.mail}>
                  <CiMail />
                  <a href="mailto:mailhere@gmail.com">mailhere@gmail.com</a>
                </div>
                <div className={style.number}>
                  <CiPhone />
                  <span>0045 26 71 99 53</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <div className={style.boxes}>
          </div> */}
          {/* <div className={style.boxes}>
          </div> */}
          {/* <div className={style.boxes1}>
            <div className={style.icons}>
              <FaInstagram />
              <FaWhatsapp />
              <FaTwitter />
              <CiPhone />
            </div> */}
          {/* </div> */}
        </div>
        <div className={style.footerfooter}>
          Copyright &copy; 2024 All Rights Reserved TelegramHolder
        </div>
      </div>
    </section>
  );
};

export default Footer;
/*
 <Accordion key={i} className={style.accordian}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  {data.title}
                </AccordionSummary>
                <AccordionDetails>{data.content}</AccordionDetails>
              </Accordion>
*/
