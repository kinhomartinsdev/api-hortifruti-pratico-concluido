import { faker } from "@faker-js/faker";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cidade from "App/Models/Cidade";
import CidadesEstabelecimento from "App/Models/CidadesEstabelecimento";
import Estabelecimento from "App/Models/Estabelecimento";
import Estado from "App/Models/Estado";
import User from "App/Models/User";

export default class EstabelecimentoSeeder extends BaseSeeder {
  public async run() {
    const user = await User.create({
      email: "webevolui@email.com",
      password: "123456",
      tipo: "estabelecimentos",
    });

    await Estabelecimento.create({
      nome: "Estabelecimento",
      logo: "https://webevolui.com.br/principal/images/web-evolui-logo.png",
      online: true,
      bloqueado: false,
      user_id: user.id,
    });

    for (let i = 2; i <= 20; i++) {
      await User.create({
        email: `estabelecimento${i}@email.com`,
        password: "12345678",
        tipo: "estabelecimentos",
      });
    }

    for (let i = 2; i <= 20; i++) {
      await Estabelecimento.create({
        nome: `Estabelecimento ${i}`,
        logo: `https://picsum.photos/id/${i}/200/200`,
        online: true,
        bloqueado: false,
        user_id: i,
      });
    }

    await Estado.createMany([
      {
        nome: "Minas Gerais",
        uf: "MG",
      },

      {
        nome: "Espírito Santo",
        uf: "ES",
      },

    ]);

    await Cidade.createMany([
      {
        nome: "Aimorés",
        estado_id: 1,
      },
      {
        nome: "Colatina",
        estado_id: 2,
      },
    ]);
     for (let i = 1; i <= 20; i++){

      await CidadesEstabelecimento.create({
        cidade_id: faker.number.float({
          min:1,
          max:2,
        }),
        estabelecimento_id: i,
        custo_entrega: faker.number.float({
          max:3,
          min: 0,
          precision: 0.5,
        })

      })
    


     }

    
  
  }
  };