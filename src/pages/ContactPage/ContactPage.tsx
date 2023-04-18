import React from "react";
import * as C from "./styles";
import ContactItems from "./ContactItems";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <C.Container fluid>
      <C.AreaTitle>
        <C.Title>Entre em contato</C.Title>
        <C.Title>
          Nosso time de atendimento está disponível de segunda a sábado das 08h
          às 20h, exceto feriados.
        </C.Title>
        <C.SubTitle>
          Desculpe-nos, nosso tempo de resposta está acima do esperado.
        </C.SubTitle>
      </C.AreaTitle>
      <C.ContactArea>
        <ContactItems
          image="chat-de-video.png"
          text="Tire dúvidas,
consulte seus pedidos e
veja o status do atendimento."
          title="Assistente Virtual"
        />
        <ContactItems
          title="E-mail"
          text="Faça sua solicitação com os nossos atletas de atendimento"
          image="o-email.png"
        />
        <ContactItems
          title="(00) 9999-9999"
          text="Acompanhe suas solicitações com os nossos atles de atendimento"
          image="telephone-call.png"
        />
      </C.ContactArea>
    </C.Container>
  );
};

export default ContactPage;
