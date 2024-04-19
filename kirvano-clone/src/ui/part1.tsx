export type Props = {
	class?: string,
}

export function Crie(props: Props) {
  return (
    <>
      <section className={`${props.class}`}>
        <p>Crie</p>
      </section>
    </>
  )
}

export function Cadastre(props: Props) {
  return (
    <>
      <section className={`${props.class}`}>
        <p>Cadastre</p>
      </section>
    </>
  )
}

export function Comece(props: Props) {
  return (
    <>
      <section className={`${props.class}`}>
        <p>Comece</p>
      </section>
    </>
  )
}