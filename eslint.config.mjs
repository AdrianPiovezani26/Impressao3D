// Lint do projeto. Hoje aplica apenas a aderência ao design system (design-system/lint/).
// Rodar a partir da raiz:  npx eslint . --no-error-on-unmatched-pattern
// (a flag é necessária enquanto não houver código novo: sem ela o ESLint 9 sai com erro quando tudo está ignorado)
import adherence from './design-system/lint/eslint.adherence.mjs';

export default [
  {
    // Código legado (JS puro, sem design system) e arquivos que não são código de produto.
    ignores: [
      'eslint.config.mjs',
      'akp3d-import-ui.js',
      'akp3d-slicer-import.js',
      'restaurar_akp3d.js',
      'design-system/components/**',
      'design-system/index.js',
      'design-system/reference/**',
      'design-system/ui_kits/**',   // implementação de referência do kit: gera avisos contra as próprias regras (ver README)
      'design-system/lint/**',
    ],
  },
  ...adherence,
];
