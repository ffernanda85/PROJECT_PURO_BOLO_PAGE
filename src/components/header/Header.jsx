import { useNavigate } from "react-router-dom";
import { goToAbout, goToHome, goToProducts } from "../../routes/coordinator";
import * as s from "./styleHeader";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <s.ContainerHeader>
      <s.MenuContainer>
        <s.LogoContainer onClick={() => goToHome(navigate)}>
                  <img src="/static/images/LOGO/logo.jpeg" alt="Logo Puro Bolo" />
                  <s.Title>Puro Bolo Doces Artesanais</s.Title>
        </s.LogoContainer>
        <s.NavMenu>
          <s.ItemContainer>
            <s.Item onClick={() => goToHome(navigate)} >Home</s.Item>
            <s.Item onClick={() => goToProducts(navigate)} >Produtos</s.Item>
            <s.Item onClick={() => goToAbout(navigate)}>Nossa História</s.Item>
          </s.ItemContainer>
        </s.NavMenu>
      </s.MenuContainer>
    </s.ContainerHeader>
  );
};
