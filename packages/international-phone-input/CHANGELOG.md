# @alfalab/core-components-international-phone-input

## 2.0.21

### Patch Changes

-   Обновлены зависимости
    -   select@17.8.1
    -   input-autocomplete@12.1.13
    -   input@15.0.1

## 2.0.20

### Patch Changes

<sup><time>04.07.2024</time></sup>

### [#1226](https://github.com/core-ds/core-components/pull/1226)

-   SVG флагов оптимизированны по размеру, с сохранением качества графики.

## 2.0.19

### Patch Changes

-   Обновлены зависимости
    -   select@17.8.0
    -   input-autocomplete@12.1.12

## 2.0.18

### Patch Changes

-   Обновлены зависимости
    -   input@15.0.0
    -   input-autocomplete@12.1.11
    -   select@17.7.2

## 2.0.17

### Patch Changes

-   Обновлены зависимости
    -   shared@0.11.0
    -   input@14.4.7
    -   input-autocomplete@12.1.10
    -   select@17.7.1

## 2.0.16

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@12.1.9
    -   select@17.7.0
    -   input@14.4.6

## 2.0.15

### Patch Changes

-   Обновлены зависимости
    -   select@17.6.1
    -   input-autocomplete@12.1.8

## 2.0.14

### Patch Changes

-   Обновлены зависимости
    -   select@17.6.0
    -   input-autocomplete@12.1.7

## 2.0.13

### Patch Changes

-   Обновлены зависимости
    -   select@17.5.1
    -   input-autocomplete@12.1.6

## 2.0.12

### Patch Changes

<sup><time>14.06.2024</time></sup>

### [#1235](https://github.com/core-ds/core-components/pull/1235)

-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools

-   Обновлены зависимости
    -   input@14.4.5
    -   input-autocomplete@12.1.5
    -   select@17.5.0

## 2.0.11

### Patch Changes

-   Обновлены зависимости
    -   input@14.4.4
    -   select@17.4.5
    -   input-autocomplete@12.1.4

## 2.0.10

### Patch Changes

-   Обновлены зависимости
    -   shared@0.10.0
    -   select@17.4.4
    -   input@14.4.3
    -   input-autocomplete@12.1.3

## 2.0.9

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@12.1.2
    -   input@14.4.2
    -   select@17.4.3

## 2.0.8

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@12.1.1
    -   input@14.4.1
    -   select@17.4.2

## 2.0.7

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@12.1.0
    -   input@14.4.0
    -   select@17.4.1

## 2.0.6

### Patch Changes

<sup><time>19.04.2024</time></sup>

### [#1151](https://github.com/core-ds/core-components/pull/1151)

-   Исправлена логика закрытия селекта с номерами телефонов при включенном автокомплите. Теперь при переключении между селектами выбора страны и выбора номера телефона, селекты закрываются, а не перекрывают друг друга

-   Обновлены зависимости
    -   select@17.4.0
    -   input-autocomplete@12.0.6
    -   input@14.3.3

## 2.0.5

### Patch Changes

-   Обновлены зависимости
    -   select@17.3.5
    -   input-autocomplete@12.0.5

## 2.0.4

### Patch Changes

<sup><time>22.03.2024</time></sup>

### [#1142](https://github.com/core-ds/core-components/pull/1142)

-   Изменили название стран с английского на русский язык

-   Обновлены зависимости
    -   select@17.3.4
    -   input-autocomplete@12.0.4
    -   input@14.3.2

## 2.0.3

### Patch Changes

<sup><time>15.03.2024</time></sup>

### [#1126](https://github.com/core-ds/core-components/pull/1126)

-   Добавлены флаги для следующих стран: Caribbean Netherlands, Cyprus, French Guiana, Guadeloupe, Guyana, Kuwait, Malaysia, New Caledonia, Réunion, São Tomé and Príncipe

-   Обновлены зависимости
    -   input@14.3.1
    -   input-autocomplete@12.0.3
    -   select@17.3.3

## 2.0.2

### Patch Changes

-   Обновлены зависимости
    -   select@17.3.2
    -   input-autocomplete@12.0.2

## 2.0.1

### Patch Changes

<sup><time>04.03.2024</time></sup>

### [#1092](https://github.com/core-ds/core-components/pull/1092)

-   Теперь, если пользователь удаляет номер телефона с помощью кнопки "очистить" (крестика), то выбранный флаг сбрасывается на флаг страны по умолчанию (если задан defaultIso2) или на заглушку - флаг страны не выбран. Ранее, после удаления номера с помощью кнопки "очистить", оставался последний выбранный флаг
-   Если код страны не найден и установлено свойство defaultIso2, то теперь будет отображаться заглушка - флаг страны не выбран. Раньше оставался дефолтный флаг

-   Обновлены зависимости
    -   select@17.3.1
    -   input-autocomplete@12.0.1

## 2.0.0

### Major Changes

<sup><time>12.02.2024</time></sup>

### [#1043](https://github.com/core-ds/core-components/pull/1043)

-   Тип onChange коллбэка заменен на (value: string) => void

### Minor Changes

<sup><time>12.02.2024</time></sup>

### [#1021](https://github.com/core-ds/core-components/pull/1021)

-   Добавлены новые способы указать размеры - 48, 56, 64, 72. Буквенные значения размеров s, m, l, xl теперь deprecated, используйте вместо них 48, 56, 64, 72 соответственно

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@12.0.0
    -   input@14.3.0
    -   select@17.3.0

## 1.4.0

### Minor Changes

### [#1083](https://github.com/core-ds/core-components/pull/1083)

-   Добавлен вызов функции onClear из inputProps

### Patch Changes

-   Обновлены зависимости
    -   select@17.2.1
    -   input-autocomplete@11.4.1

## 1.3.3

### Patch Changes

### [#1049](https://github.com/core-ds/core-components/pull/1049)

-   Добавили возможность передавать dataTestId в компонент выбора страны и props в input (error, rightAddons).
-   Добавлены функции getInternationalPhoneInputDesktopTestIds и getInternationalPhoneInputMobileTestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId.

-   Обновлены зависимости
    -   input@14.2.0
    -   select@17.2.0
    -   input-autocomplete@11.4.0

## 1.3.2

### Patch Changes

-   Обновлены зависимости
    -   input@14.1.2
    -   select@17.1.2
    -   input-autocomplete@11.3.4

## 1.3.1

### Patch Changes

-   Обновлены зависимости
    -   shared@0.9.1
    -   select@17.1.1
    -   input@14.1.1
    -   input-autocomplete@11.3.3

## 1.3.0

### Minor Changes

### [#1007](https://github.com/core-ds/core-components/pull/1007)

-   Обновлена зависимость @alfalab/icons-glyph

### Patch Changes

-   Обновлены зависимости
    -   select@17.1.0
    -   input@14.1.0
    -   shared@0.9.0
    -   input-autocomplete@11.3.2

## 1.2.7

### Patch Changes

-   Обновлены зависимости
    -   input@14.0.1
    -   input-autocomplete@11.3.1
    -   select@17.0.1

## 1.2.6

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@11.3.0

## 1.2.5

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@11.2.0

## 1.2.4

### Patch Changes

-   Обновлены зависимости
    -   select@17.0.0
    -   input@14.0.0
    -   input-autocomplete@11.1.0

## 1.2.3

### Patch Changes

### [#987](https://github.com/core-ds/core-components/pull/987)

-   Немного изменена структура файлов в пакетах для корректной сборки в vite

-   Обновлены зависимости
    -   input@13.0.2
    -   input-autocomplete@11.0.3
    -   select@16.0.3

## 1.2.2

### Patch Changes

-   Обновлены зависимости
    -   select@16.0.2
    -   input-autocomplete@11.0.2

## 1.2.1

### Patch Changes

-   Обновлены зависимости
    -   input@13.0.1
    -   select@16.0.1
    -   input-autocomplete@11.0.1

## 1.2.0

### Minor Changes

### [#931](https://github.com/core-ds/core-components/pull/931)

-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@11.0.0
    -   select@16.0.0
    -   input@13.0.0
    -   shared@0.8.0

## 1.1.0

### Minor Changes

### [#944](https://github.com/core-ds/core-components/pull/944)

-   Добавлен package.json с module полем в mobile, desktop, shared точки входа

### Patch Changes

-   Обновлены зависимости
    -   input@12.3.0
    -   input-autocomplete@10.3.0
    -   select@15.3.0
    -   shared@0.7.0

## 1.0.4

### Patch Changes

-   Обновлены зависимости
    -   select@15.2.3
    -   input-autocomplete@10.2.3

## 1.0.3

### Patch Changes

-   Обновлены зависимости
    -   select@15.2.2
    -   input-autocomplete@10.2.2

## 1.0.2

### Patch Changes

### [#900](https://github.com/core-ds/core-components/pull/900)

-   Исправлен формат номера телефона (удалены скобки и тире)

-   Обновлены зависимости
    -   input-autocomplete@10.2.1
    -   select@15.2.1
    -   input@12.2.1
    -   shared@0.6.0

## 1.0.1

### Patch Changes

-   Обновлены зависимости
    -   input@12.2.0
    -   input-autocomplete@10.2.0
    -   select@15.2.0

## 1.0.0

### Major Changes

### [#825](https://github.com/core-ds/core-components/pull/825)

-   Добавлен новый компонент InternationalPhoneInput

### Patch Changes

-   Обновлены зависимости
    -   input-autocomplete@10.1.6
    -   shared@0.5.0
    -   input@12.1.4
    -   select@15.1.6
