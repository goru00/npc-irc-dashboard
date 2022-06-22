class Mpe1GemDto {
  id;

  npp;

  r1022;

  naim_org;

  adr_fact;

  inn;

  plazma_max;

  plazma_cena;

  erm_max;

  erm_cena;

  immg_max;

  immg_cena;

  alb_max;

  alb_cena;

  constructor(model) {
    this.id = model.id;
    this.npp = model.npp;
    this.r1022 = model.r1022;
    this.naim_org = model.naim_org;
    this.adr_fact = model.adr_fact;
    this.inn = model.inn;
    this.plazma_max = model.plazma_max;
    this.plazma_cena = model.plazma_cena;
    this.erm_max = model.erm_max;
    this.erm_cena = model.erm_cena;
    this.immg_max = model.immg_max;
    this.immg_cena = model.immg_cena;
    this.alb_max = model.alb_max;
    this.alb_cena = model.alb_cena;
  }
}

module.exports = Mpe1GemDto();
