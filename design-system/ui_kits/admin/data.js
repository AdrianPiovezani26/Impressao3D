window.AKP_DATA = {
  user: { name: 'Guy Hawkins', email: 'guy@akp3d.com.br', role: 'Administrador' },
  kpis: [
    { label: 'Receita líquida', value: 'R$ 3.131.021', delta: '0,4%', comparison: 'vs mês anterior' },
    { label: 'Receita recorrente', value: 'R$ 1.511.121', delta: '32%', comparison: 'vs trimestre anterior' },
    { label: 'Meta trimestral', value: '71%', caption: 'Meta: R$ 1,1 mi', progress: 71 },
    { label: 'Novos pedidos', value: '18.221', delta: '11%', comparison: 'vs trimestre anterior' },
  ],
  categories: [
    { label: 'Eletrônicos', value: 55640, display: 'R$ 55.640' },
    { label: 'Móveis', value: 11420, display: 'R$ 11.420' },
    { label: 'Vestuário', value: 1840, display: 'R$ 1.840' },
    { label: 'Calçados', value: 2120, display: 'R$ 2.120' },
  ],
  profit: [42, 48, 44, 61, 55, 70, 64, 88, 79, 96, 90, 118, 109, 136],
  profitLabels: ['1 fev', '2 fev', '3 fev', '4 fev', '5 fev', '6 fev', '7 fev', '8 fev', '9 fev', '10 fev', '11 fev', '12 fev', '13 fev', '14 fev'],
  customers: [
    { id: 1, name: 'Danny Liu', email: 'danny@gmail.com', city: 'São Paulo, SP', deals: 1023, total: 37431, status: 'Ativo' },
    { id: 2, name: 'Bella Deviant', email: 'bella@gmail.com', city: 'Curitiba, PR', deals: 963, total: 30423, status: 'Ativo' },
    { id: 3, name: 'Darrell Steward', email: 'darrell@gmail.com', city: 'Belo Horizonte, MG', deals: 843, total: 28549, status: 'Ativo' },
    { id: 4, name: 'Marina Costa', email: 'marina.costa@outlook.com', city: 'Porto Alegre, RS', deals: 712, total: 24120, status: 'Pausado' },
    { id: 5, name: 'Rafael Nunes', email: 'rafael@nunes.com.br', city: 'Recife, PE', deals: 655, total: 21877, status: 'Ativo' },
    { id: 6, name: 'Júlia Andrade', email: 'julia.andrade@gmail.com', city: 'Florianópolis, SC', deals: 498, total: 16302, status: 'Novo' },
  ],
  orders: [
    { id: '4821', customer: 'Danny Liu', date: '14/02/2026', items: 3, total: 1289.9, status: 'Pago' },
    { id: '4820', customer: 'Bella Deviant', date: '14/02/2026', items: 1, total: 349.0, status: 'Pendente' },
    { id: '4819', customer: 'Marina Costa', date: '13/02/2026', items: 5, total: 2740.5, status: 'Enviado' },
    { id: '4818', customer: 'Rafael Nunes', date: '13/02/2026', items: 2, total: 818.0, status: 'Pago' },
    { id: '4817', customer: 'Júlia Andrade', date: '12/02/2026', items: 1, total: 129.9, status: 'Cancelado' },
    { id: '4816', customer: 'Darrell Steward', date: '12/02/2026', items: 4, total: 1960.0, status: 'Enviado' },
    { id: '4815', customer: 'Danny Liu', date: '11/02/2026', items: 2, total: 560.0, status: 'Pendente' },
    { id: '4814', customer: 'Bella Deviant', date: '11/02/2026', items: 6, total: 3312.4, status: 'Pago' },
  ],
  notifications: [
    { icon: 'user-plus', title: '56 novos usuários cadastrados', time: 'Agora mesmo' },
    { icon: 'shopping-bag', title: '132 pedidos realizados', time: 'Há 59 minutos' },
    { icon: 'wallet', title: 'Saque de fundos concluído', time: 'Há 12 horas' },
    { icon: 'message-square', title: '5 mensagens não lidas', time: 'Hoje, 11:59' },
  ],
  activities: [
    { who: 'Kate Morrison', title: 'Alterou o tema do painel', time: 'Agora mesmo' },
    { who: 'Daniel Craig', title: '177 novos produtos adicionados', time: 'Há 47 minutos' },
    { who: 'Elisabeth Wayne', title: '11 produtos arquivados', time: 'Há 1 dia' },
    { who: 'Felicia Raspet', title: 'Página "Brinquedos" removida', time: '2 fev 2026' },
  ],
  managers: [
    { name: 'Daniel Craig', status: 'online' },
    { name: 'Kate Morrison', status: 'away' },
    { name: 'Nataniel Donowan', status: 'online' },
    { name: 'Elisabeth Wayne', status: 'offline' },
    { name: 'Felicia Raspet', status: 'busy' },
  ],
};
window.AKP_FMT = {
  brl: (v) => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  int: (v) => v.toLocaleString('pt-BR'),
  tone: { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'danger', Ativo: 'success', Pausado: 'neutral', Novo: 'accent' },
};
