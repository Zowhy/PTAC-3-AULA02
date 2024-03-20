export default async function Home() {
  const resposta = await fetch("http://back-end-ifms.vercel.app/campi",{
    next:{
    revalidate: 1
  }
});
const campus = await resposta.json();
    return (
      <main>
        <h1>Home</h1>
        {
          campus.map((campi) =>
            <div>
              <p>{campi.nome_campi}</p>
            </div>


          )
      }
      </main>
    )
}