# VanillaSuper

Самостоятельный статический сайт: HTML, CSS, JavaScript, Vite для локальной разработки и сборки.

```sh
npm install
npm run dev
npm run build
```

Публиковать содержимое `dist/`. Для проверки запустить dev-сервер, затем `npm test` (предварительно `npx playwright install chromium`). Проверки: 320, 390, 768, 1024, 1440 px, клавиатура, ссылки хедера, буфер обмена, reduced motion, axe WCAG A/AA. `TEST_URL` позволяет проверить собранный сайт через preview.

Сохранены действующие Telegram/wiki-ссылки, логотип и три исходных видео с vanillasuper.xyz. Эти видео — ролики с котами, а не записи игрового мира. JPEG-постеры извлечены из соответствующих роликов. Шрифты Unbounded и Golos Text загружаются из Google Fonts; предусмотрены системные fallback-шрифты.

## Дизайн

Нейтральная тёмная палитра: графит #161719 (фон), уголь #252729 (секции), светлый серый #E6E6E3 (текст), приглушённый зелёный #A3BE91 (кнопка, фокус), холодный графит #22262B (переход секции). Unbounded для заголовков, Golos Text для интерфейса. Декоративные иконки, слоганы и лирические подписи удалены. Сохранён значок копирования. FAQ оформлен отдельными записями со смещениями, SVG-стрелкой компаса и янтарным маркером #E8A33D слева у открытого вопроса. Ссылка поддержки выделена янтарным цветом. Тексты вопросов и ответов сохранены; анимация высоты дополнена плавной прозрачностью ответа. Бургер и кнопка управления видео удалены. Ссылки хедера доступны на всех ширинах. Асимметричная панорама и три разных наблюдения. Смягчены углы изображений и кнопок и открытого FAQ; размеры и межстрочные интервалы адаптированы под широкий Unbounded. FAQ открывает только один вопрос за раз. Открытие и закрытие плавно анимируются за 420 мс; повторные нажатия меняют направление с текущей высоты. При reduced motion переключение происходит сразу. Проверены Enter, Space и быстрые повторные нажатия. Видео автоматически останавливаются вне экрана; reduced motion отключает автоматическое воспроизведение и переход.

Самокритика: удалена лишняя звёздочка у логотипа. Топографический узор не добавлен: рельеф уже присутствует в панораме. Дата сезона не выдумана. На первом экране используется предоставленный пользователем скриншот: public/assets/hero-player.png.

## Предыдущая иллюстрация (не используется)

Итоговый файл: `public/assets/landscape.jpg`. Создан встроенным imagegen, затем экспортирован в JPEG для сайта.

Полный промпт:

> Use case: stylized-concept. Asset type: wide website hero landscape for a vanilla Minecraft survival community. Create a beautiful panoramic Minecraft landscape, actual 3D voxel game world aesthetic with natural soft shader lighting, NOT flat pixel art. A winding blue river through lush green terraced hills, dense oak and birch forests, distant misty mountains, small modest wooden survival house beside river with warm lantern windows, tiny wheat patch. View from hillside across valley. Peaceful late afternoon exploring a new world, atmospheric muted moss green and blue, warm sun gently touching treetops, cloudy pale sky. Rich detailed terrain, restrained cinematic color grading, no exaggerated fantasy structures. Landscape 1536x864. No text, logos, UI, people, watermark. Image only.

Световая иерархия: широкий приглушённый зелёный свет #3FB74D привязан к скриншоту hero и плавно растворяется к краям, хедеру и низу. У скриншота мягкий зелёный bloom (blur 130 px, opacity 0.09) без светлого контура и глубокая тень; CTA светлее с рассеянным зелёным свечением (opacity 0.10). IP и бейдж имеют среднюю светлоту, FAQ отделён от самого тёмного фона. Hero-заголовок одноцветный. На мобильных радиус и интенсивность свечения уменьшены.

Общий фон страницы: единый зелёный радиальный свет у hero, затухающий к футеру поверх непрерывного тёмного градиента. Hero, секция предложений и футер прозрачные; отдельный переход цвета секции при скролле удалён. Все медиа фич используют brightness(.7) saturate(.7), слабый тёмный overlay, единое скругление 22 px и тонкую рамку. Правило распространяется и на будущие изображения внутри .video-frame.
