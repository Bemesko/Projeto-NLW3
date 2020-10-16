const database = require("./db");
const saveOrphanage = require("./saveOrphanage");

database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-26.7139725",
    lng: "-49.3743227",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 6 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social",
    whatsapp: "23452345566",
    images: [
      "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1602636403821-e43d50123cb7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir à vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h até 18h.",
    open_on_weekends: "0",
  });
  //   Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  // deletar dado da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
