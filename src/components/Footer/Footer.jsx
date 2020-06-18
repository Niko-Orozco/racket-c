import React from 'react';
import { FooterWrapper} from './styles';
import MonacoEditor from "@etclabscore/react-monaco-editor";

const Footer = () => (
  <FooterWrapper>
    <footer class="page-footer bg-light mt-5">
       <div class="footer-copyright text-center py-3">© 2020 Copyright:
         <a href="https://www.utp.edu.co/" target="_blank"> Universidad Tecnologica Pereira</a>
       </div>
    </footer>
  </FooterWrapper>
);

export default Footer;
