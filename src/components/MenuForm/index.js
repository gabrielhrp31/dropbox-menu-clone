import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

function MenuForm() {

    function handleToggle() {
        if (window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return <Container >
        <Navigation>
            <h1>
                <DropboxLogo />
                <span>Dropbox</span>
            </h1>
            <button className="action-close" onClick={handleToggle}>✕</button>
        </Navigation>

        <Form>
            <span className="title" >Registre-se</span>
            <span className="subtitle" >Preencha o formulário</span>

            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Prosseguir</button>

            <span className="terms">
                Está pagina está sujeita á política de privacidade e aos Termos de
                Serviço.
            </span>
        </Form>
    </Container>;
}

export default MenuForm;