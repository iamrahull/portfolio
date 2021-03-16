import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  & p {
    margin: auto 0;
  }

  & div {
    display: flex;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;

  & li {
    padding: 15px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <StyledFooter>
      <div>
        <p>&copy; {currentYear} rahul kumar</p>
      </div>
      <SocialIcons>
        <li>
          <a
            href="https://github.com/iamrahull"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/iamrahull/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="mailto:rahulasr101@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </SocialIcons>
    </StyledFooter>
  );
};

export default Footer;
