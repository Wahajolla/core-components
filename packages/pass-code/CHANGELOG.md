# @alfalab/core-components-pass-code

## 2.0.1

### Patch Changes

-   Обновлены зависимости
    -   button@11.5.2

## 2.0.0

### Major Changes

<sup><time>28.06.2024</time></sup>

### [#1233](https://github.com/core-ds/core-components/pull/1233)

Редизайн компонентов PassCode и PatternLock

-   Внесены изменения в адаптивность
-   Удалены пропсы для вывода кастомных сообщений и ошибок
    Эти исправления уменьшили габариты компонентов, что позволит упростить работу с их размещением на странице

## Обновление

Для упрощенного перехода между версиями библиотеки, после обновления вам необходимо исправить импорты.

До

```js
import { PassCode } from '@alfalab/core-components/pass-code';
import { PatternLock } from '@alfalab/core-components/pattern-lock';
```

После

```js
import { PassCodeV1 } from '@alfalab/core-components/pass-code-v1';
import { PatternLockV1 } from '@alfalab/core-components/pattern-lock-v1';
```

Таким образом, в вашем приложении продолжат работу старые версии компонентов.
В дальнейшем поддержка `v1` версий будет прекращена.

### Patch Changes

-   Обновлены зависимости
    -   gap@1.3.1

## 1.5.9

### Patch Changes

-   Обновлены зависимости
    -   shared@0.11.0
    -   button@11.5.1

## 1.5.8

### Patch Changes

-   Обновлены зависимости
    -   button@11.5.0

## 1.5.7

### Patch Changes

<sup><time>14.06.2024</time></sup>

### [#1235](https://github.com/core-ds/core-components/pull/1235)

-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools

-   Обновлены зависимости
    -   button@11.4.5

## 1.5.6

### Patch Changes

<sup><time>13.06.2024</time></sup>

### [#1229](https://github.com/core-ds/core-components/pull/1229)

-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted

-   Обновлены зависимости
    -   button@11.4.4

## 1.5.5

### Patch Changes

-   Обновлены зависимости
    -   shared@0.10.0
    -   button@11.4.3

## 1.5.4

### Patch Changes

-   Обновлены зависимости
    -   button@11.4.2

## 1.5.3

### Patch Changes

-   Обновлены зависимости
    -   button@11.4.1

## 1.5.2

### Patch Changes

-   Обновлены зависимости
    -   button@11.4.0

## 1.5.1

### Patch Changes

-   Обновлены зависимости
    -   gap@1.3.0
    -   button@11.3.0

## 1.5.0

### Minor Changes

### [#1049](https://github.com/core-ds/core-components/pull/1049)

-   Добавлена функция get{ComponentName}TestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId

### Patch Changes

-   Обновлены зависимости
    -   button@11.2.0

## 1.4.1

### Patch Changes

-   Обновлены зависимости
    -   shared@0.9.1
    -   button@11.1.1

## 1.4.0

### Minor Changes

### [#1007](https://github.com/core-ds/core-components/pull/1007)

-   Обновлена зависимость @alfalab/icons-glyph

### Patch Changes

-   Обновлены зависимости
    -   button@11.1.0
    -   shared@0.9.0

## 1.3.0

### Minor Changes

### [#982](https://github.com/core-ds/core-components/pull/982)

-   В компонентах CalendarInput, CalendarRange, CalendarWithSkeleton, Calendar, Confirmation, DateRangeInput, DateTimeInput, PassCode и Plate цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)

### Patch Changes

-   Обновлены зависимости
    -   button@11.0.0

## 1.2.7

### Patch Changes

-   Обновлены зависимости
    -   button@10.0.2

## 1.2.6

### Patch Changes

-   Обновлены зависимости
    -   button@10.0.1

## 1.2.5

### Patch Changes

-   Обновлены зависимости
    -   button@10.0.0
    -   shared@0.8.0

## 1.2.4

### Patch Changes

-   Обновлены зависимости
    -   button@9.1.0
    -   shared@0.7.0

## 1.2.3

### Patch Changes

-   Обновлены зависимости
    -   button@9.0.6
    -   shared@0.6.0

## 1.2.2

### Patch Changes

-   Обновлены зависимости
    -   shared@0.5.0
    -   button@9.0.5

## 1.2.1

### Patch Changes

-   Обновлены зависимости
    -   shared@0.4.0
    -   button@9.0.4

## 1.2.0

### Minor Changes

### [#830](https://github.com/core-ds/core-components/pull/830)

-   Добавлен message prop

## 1.1.3

### Patch Changes

-   Обновлены зависимости
    -   shared@0.3.0
    -   button@9.0.3

## 1.1.2

### Patch Changes

-   Обновлены зависимости
    -   button@9.0.2

## 1.1.1

### Patch Changes

-   Обновлены зависимости
    -   shared@0.2.0
    -   button@9.0.1

## 1.1.0

### Minor Changes

### [#687](https://github.com/core-ds/core-components/pull/687)

-   Компонент Button заменен на mobile/desktop версии для мобильных и десктопных версий компонентов

### [#713](https://github.com/core-ds/core-components/pull/713)

-   Теперь каждый пакет публикуется с исходниками

### Patch Changes

-   Обновлены зависимости
    -   shared@0.1.0
    -   button@9.0.0
    -   gap@1.2.0

## 1.0.18

### Patch Changes

### [#766](https://github.com/core-ds/core-components/pull/766)

-   Удален скрипт отправки статистики (send-stats)

-   Обновлены зависимости
    -   button@8.5.1
    -   gap@1.1.3

## 1.0.17

### Patch Changes

-   Обновлены зависимости
    -   button@8.5.0

## 1.0.16

### Patch Changes

-   Обновлены зависимости
    -   button@8.4.0

## 1.0.15

### Patch Changes

### [#635](https://github.com/core-ds/core-components/pull/635)

-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях

## 1.0.14

### Patch Changes

-   Обновлены зависимости
    -   button@8.3.0

## 1.0.13

### Patch Changes

-   Обновлены зависимости
    -   button@8.2.0

## 1.0.12

### Patch Changes

-   Обновлены зависимости
    -   button@8.1.0

## 1.0.11

### Patch Changes

### [#624](https://github.com/core-ds/core-components/pull/624)

-   Исправлена ошибка, из-за которой не исчезали точки при стирании кода на старых iPhone

## 1.0.10

### Patch Changes

### [#588](https://github.com/core-ds/core-components/pull/588)

-   Добавлен \_\_esModule в cjs экспорт

-   Обновлены зависимости
    -   button@8.0.0
    -   gap@1.1.2

## 1.0.9

### Patch Changes

-   Обновлены зависимости
    -   button@7.1.1

## 1.0.8

### Patch Changes

### [#526](https://github.com/core-ds/core-components/pull/526)

-   В зависимости добавлена библиотека tslib

-   Обновлены зависимости
    -   button@7.1.0
    -   gap@1.1.1

## 1.0.7

### Patch Changes

-   Обновлены зависимости
    -   button@7.0.5

## 1.0.6

### Patch Changes

-   Обновлены зависимости
    -   button@7.0.4

## 1.0.5

### Patch Changes

### [#470](https://github.com/core-ds/core-components/pull/470)

-   Обновлена версия react-transition-group

## 1.0.4

### Patch Changes

-   Обновлены зависимости
    -   button@7.0.3

## 1.0.3

### Patch Changes

-   Обновлены зависимости
    -   gap@1.1.0

## 1.0.2

### Patch Changes

### [#396](https://github.com/core-ds/core-components/pull/396)

-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях

## 1.0.1

### Patch Changes

### [#418](https://github.com/core-ds/core-components/pull/418)

-   Исправлена проблема с default-импортом в cjs форматах

-   Обновлены зависимости
    -   button@7.0.2
    -   gap@1.0.1

## 1.0.0

### Major Changes

### [#383](https://github.com/core-ds/core-components/pull/383)

-   Добавлен новый компонент PassCode
