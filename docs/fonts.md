# Fonts

Both fonts are SIL Open Font License, self-hosted from `src/app/fonts-files/`.

- Bricolage Grotesque: google/fonts `ofl/bricolagegrotesque/BricolageGrotesque[opsz,wdth,wght].ttf`,
  instanced with fontTools to opsz=96, wdth=88, wght 700..800.
- Schibsted Grotesk (text and UI): google/fonts `ofl/schibstedgrotesk/SchibstedGrotesk[wght].ttf`,
  instanced to wght 400..600.
- Sample-site faces in the demos (Cormorant Garamond, Bodoni Moda, Big Shoulders Display, Archivo)
  come from next/font/google with preload off, so they only download when a demo shows them.

Both subset to the unicode range below, keeping only the layout features in use
(`kern,liga,calt,ccmp,locl,mark,mkmk`, plus `tnum,case` for Schibsted):

```
pyftsubset <font>.ttf --flavor=woff2 --layout-features='kern,liga,calt,ccmp,locl,mark,mkmk' \
  --unicodes="U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+0160-0161,U+0178,U+017D-017E,U+02C6,U+02DA,U+02DC,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122,U+2212"
```
