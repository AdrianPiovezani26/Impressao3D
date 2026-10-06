function SettingsRow({ title, desc, children, mobile }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: mobile ? 'flex-start' : 'center', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--border-subtle)', flexDirection: mobile ? 'column' : 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
        <span style={{ font: 'var(--type-label)', fontSize: 14 }}>{title}</span>
        {desc ? <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>{desc}</span> : null}
      </div>
      {children}
    </div>
  );
}

function Settings({ bp, toast, dark, onTheme }) {
  const { Card, Tabs, Input, Select, Switch, Checkbox, Radio, Button, Avatar, Alert } = window.AKP3DDesignSystem_42d958;
  const u = window.AKP_DATA.user;
  const mobile = bp === 'mobile';
  const [tab, setTab] = React.useState('profile');
  const [saving, setSaving] = React.useState(false);
  const save = () => { setSaving(true); setTimeout(() => { setSaving(false); toast('Alterações salvas', 'Seu perfil foi atualizado.'); }, 900); };
  const grid2 = { display: 'grid', gridTemplateColumns: mobile ? 'minmax(0,1fr)' : 'repeat(2,minmax(0,1fr))', gap: 16 };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 12 : 16, maxWidth: 880 }}>
      <PageHeader bp={bp} title="Configurações" subtitle={mobile ? null : 'Gerencie seu perfil, alertas e segurança'} />
      <Tabs value={tab} onChange={setTab} items={[{ value: 'profile', label: 'Perfil', icon: 'user' }, { value: 'notif', label: 'Notificações', icon: 'bell' }, { value: 'security', label: 'Segurança', icon: 'shield' }]} />
      {tab === 'profile' ? (
        <Card title="Dados pessoais" subtitle="Visível para a sua equipe">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Avatar name={u.name} size={64} ring />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><Button size="sm" variant="secondary" icon="upload">Enviar foto</Button><Button size="sm" variant="ghost">Remover</Button></div>
          </div>
          <div style={grid2}>
            <Input label="Nome completo" defaultValue={u.name} />
            <Input label="E-mail" type="email" defaultValue={u.email} hint="Usado para login e alertas" />
            <Input label="Telefone" defaultValue="(11) 98765-4321" />
            <Select label="Cargo" options={['Administrador', 'Gerente', 'Analista', 'Leitura']} defaultValue={u.role} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SettingsRow mobile={mobile} title="Tema escuro" desc="Recomendado para uso prolongado"><Switch checked={dark} onChange={onTheme} aria-label="Tema escuro" /></SettingsRow>
            <SettingsRow mobile={mobile} title="Moeda padrão" desc="Usada em relatórios e KPIs">
              <div style={{ display: 'flex', gap: 20 }}><Radio name="cur" label="BRL" defaultChecked /><Radio name="cur" label="USD" /></div>
            </SettingsRow>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, flexDirection: mobile ? 'column-reverse' : 'row' }}>
            <Button variant="ghost" size={mobile ? 'lg' : 'md'}>Cancelar</Button>
            <Button loading={saving} onClick={save} size={mobile ? 'lg' : 'md'}>{saving ? 'Salvando' : 'Salvar alterações'}</Button>
          </div>
        </Card>
      ) : tab === 'notif' ? (
        <Card title="Alertas" subtitle="Escolha o que chega até você">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SettingsRow mobile={mobile} title="Novos pedidos" desc="Aviso a cada pedido confirmado"><Switch defaultChecked aria-label="Novos pedidos" /></SettingsRow>
            <SettingsRow mobile={mobile} title="Estoque baixo" desc="Quando um produto ficar abaixo de 10 unidades"><Switch defaultChecked aria-label="Estoque baixo" /></SettingsRow>
            <SettingsRow mobile={mobile} title="Mensagens de clientes"><Switch aria-label="Mensagens" /></SettingsRow>
            <SettingsRow mobile={mobile} title="Canais">
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}><Checkbox label="E-mail" defaultChecked /><Checkbox label="Push" defaultChecked /><Checkbox label="WhatsApp" /></div>
            </SettingsRow>
          </div>
        </Card>
      ) : (
        <Card title="Segurança" subtitle="Último acesso: hoje, 09:14 · São Paulo">
          <Alert tone="warning" title="Autenticação em duas etapas desativada">Ative para proteger o acesso ao painel administrativo.</Alert>
          <div style={grid2}>
            <Input label="Senha atual" type="password" placeholder="••••••••" />
            <Input label="Nova senha" type="password" placeholder="Mínimo de 8 caracteres" />
          </div>
          <SettingsRow mobile={mobile} title="Autenticação em duas etapas" desc="Código por aplicativo autenticador"><Switch aria-label="2FA" /></SettingsRow>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button onClick={() => toast('Senha atualizada', null)} size={mobile ? 'lg' : 'md'} block={mobile}>Atualizar senha</Button></div>
        </Card>
      )}
    </div>
  );
}
window.Settings = Settings;
