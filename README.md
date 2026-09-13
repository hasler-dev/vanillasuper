# VanillaSuper — деплой на Cloudflare Workers (static assets)

Сайт полностью статичный — HTML/CSS/JS без сборки, никакого фреймворка/бандлера не нужно.
Это специально сделано максимально просто, чтобы не повторить прошлые ошибки со сборкой (Vite/ESM/node_modules).

## Структура

```
public/           ← весь сайт (то, что реально деплоится)
  index.html
  style.css
  script.js
  assets/         ← сюда положи свои картинки: favicon.png, hero-player.png, feature-1.png, feature-2.png, feature-3.png
wrangler.jsonc    ← конфиг Cloudflare, assets.directory указывает на public/
package.json      ← только скрипты деплоя, реальных зависимостей нет
```

## Перед первым деплоем

Добавь в `public/assets/` свои реальные картинки (сейчас их нет):
- `favicon.png`
- `hero-player.png`
- `feature-1.png`, `feature-2.png`, `feature-3.png`

Без них соответствующие блоки будут пустыми.

## Деплой

```bash
npm install
npm run deploy
```

Никакого `npm run build` не требуется — `assets.directory: "public"` сразу указывает Wrangler,
что раздавать как есть. Это исключает весь класс ошибок, с которыми мы сталкивались раньше
(Vite entry module, ESM-only плагины, `node_modules` в ассетах — при такой структуре они просто
не могут повториться, потому что `public/` не содержит ничего лишнего).

## Домен

После первого успешного деплоя: Cloudflare Dashboard → Workers & Pages → `vanillasuper` →
Settings → Domains & Routes → Add → Custom Domain → `vanillasuper.xyz`.
