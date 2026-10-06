function Login({ bp, onLogin }) {
  const { Input, Button, Checkbox, Icon } = window.AKP3DDesignSystem_42d958;
  const mobile = bp === 'mobile' || bp === 'tablet';
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = (e) => {
    e.preventDefault();
    const em = e.target.email.value;
    if (!em.includes('@')) { setErr('Informe um e-mail válido'); return; }
    setErr(''); setLoading(true); setTimeout(onLogin, 800);
  };
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)', background: 'var(--bg-app)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: mobile ? '24px 20px' : '40px 56px' }}>
        <Wordmark />
        <form onSubmit={submit} style={{ margin: 'auto 0', width: '100%', maxWidth: 380, alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 16, padding: '40px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 8 }}>
            <h1 style={{ margin: 0, font: '600 28px/1.2 var(--font-sans)', letterSpacing: '-0.02em' }}>Acesse o painel</h1>
            <span style={{ font: 'var(--type-body)', color: 'var(--text-secondary)' }}>Entre com a conta da sua empresa.</span>
          </div>
          <Input name="email" label="E-mail" type="email" placeholder="nome@empresa.com.br" defaultValue="guy@akp3d.com.br" error={err} size="lg" />
          <Input name="password" label="Senha" type="password" defaultValue="senha1234" size="lg" trailing={<a href="#" style={{ font: 'var(--type-caption)', whiteSpace: 'nowrap' }}>Esqueci a senha</a>} />
          <Checkbox label="Manter conectado" defaultChecked />
          <Button type="submit" size="lg" block loading={loading}>{loading ? 'Entrando' : 'Entrar'}</Button>
          <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)', textAlign: 'center' }}>Problemas para entrar? <a href="#">Fale com o suporte</a></span>
        </form>
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-tertiary)' }}>© 2026 AKP3D sistemas</span>
      </div>
      {mobile ? null : (
        <div style={{ margin: 16, borderRadius: 'var(--radius-xl)', background: 'var(--promo-gradient)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 16, color: '#fff' }}>
          <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent)', color: 'var(--text-on-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="chart-column" size={22} /></span>
          <h2 style={{ margin: 0, font: '600 36px/1.15 var(--font-sans)', letterSpacing: '-0.02em', maxWidth: 440, textWrap: 'pretty' }}>Receita, pedidos e clientes em um só lugar.</h2>
          <p style={{ margin: 0, font: '400 16px/1.5 var(--font-sans)', color: 'rgba(255,255,255,.78)', maxWidth: 420 }}>Acompanhe a operação em tempo real, no computador ou no celular.</p>
        </div>
      )}
    </div>
  );
}
window.Login = Login;
