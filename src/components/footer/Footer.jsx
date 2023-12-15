import * as s from "./styledFooter";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.Content>
        <s.LogoFooter
          src="/static/images/LOGO/logo.jpeg"
          alt="Logo Puro Bolo"
        />
      </s.Content>

      <s.WhatsappContainer>
        <a href="https://web.whatsapp.com/" target="_blank">
          <s.WhatsappButton src="/static/images/whatsapp.png" alt="Whatsapp" />
        </a>
      </s.WhatsappContainer>
    </s.FooterContainer>
  );
};
