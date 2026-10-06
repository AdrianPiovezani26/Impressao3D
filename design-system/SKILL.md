---
name: akp3d-design
description: Use this skill to generate well-branded interfaces and assets for AKP3D sistemas, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick facts:
- Link `styles.css`; tokens are CSS custom properties (`--accent`, `--surface-card`, `--text-secondary`, …). Dark is default; add `data-theme="light"` for light.
- Components: `components/**` (React). Class styles live in `components/components.css` (`.akp-*`).
- Icons: Lucide outline, 1.75 stroke, via `https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`.
- Copy is pt-BR, sentence case, no emoji; numbers in pt-BR format (R$ 1.289,90).
- Reference implementation: `ui_kits/admin/`.
