import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator"
import * as s from "./styleHeader"

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header>
            <div>
                <div>
                    <img src="/static/images/LOGO/logo.jpeg" alt="Logo Puro Bolo" />
                </div>
                <nav>
                    <ul>
                        <li onClick={() => goToHome(navigate)}>Home</li>
                        <li>Produtos</li>
                        <li>Nossa História</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}