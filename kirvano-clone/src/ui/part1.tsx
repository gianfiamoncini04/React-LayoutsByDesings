import info1 from "../assets/Item-4.png"
import info2 from "../assets/Item-3.svg"
import info3 from "../assets/Item-4.svg"

export function Crie() {
  return (
    <>
      <section className="flex flex-col gap-8 max-w-96">
        <div>
          <h1 className="font-black text-xl">Cadastro de conta</h1>
          <p>Clique no botão "Cadastre-se". Insira as informações solicitadas e siga o fluxo de boas-vindas.</p>
        </div>
        <div>
          <h1 className="font-black text-xl">Confirmação de e-mail</h1>
          <p>Acesse sua caixa de entrada e clique no link de confirmação para validar seu cadastro.</p>
        </div>
        <div>
          <h1 className="font-black text-xl">Informações complementares</h1>
          <p>Complete seu perfil adicionando informações complementares.</p>
        </div>
      </section>
      <img src={info1} alt="Criar sua conta" className="pl-14"/>
    </>
  )
}

export function Cadastre() {
  return (
    <>
      <section className="flex flex-col gap-8 max-w-96">
        <div>
          <h1 className="font-black text-xl">Painel do produtor</h1>
          <p>Uma vez logado e com os dados cadastrados, você já pode criar um <strong>novo produto.</strong></p>
        </div>
        <div>
          <h1 className="font-black text-xl">Preencha as informções básicas</h1>
          <p>Preencha as informações básicas sobre o seu produto, como o nome, descrição, categoria, e etc.</p>
        </div>
      </section>
      <img src={info2} alt="Cadastre seu produto" className="pl-14"/>
    </>
  )
}

export function Comece() {
  return (
    <>
      <section className="flex flex-col gap-8 max-w-96">
        <div>
          <h1 className="font-black text-xl">Link de vendas</h1>
          <p>Agora você pode usar o link de checkout em suas estratégias de marketing, incorporando em sites, ou utilizando em campanhas de e-mail e redes sociais.' '</p>
        </div>
      </section>
      <img src={info3} alt="Comece a vender" className="pl-14"/>
    </>
  )
}