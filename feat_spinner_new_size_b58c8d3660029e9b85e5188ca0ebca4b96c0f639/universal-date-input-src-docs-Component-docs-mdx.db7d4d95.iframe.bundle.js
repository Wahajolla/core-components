"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7689,7645,1341],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./packages/universal-date-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},universal_date_input:function(){return universal_date_input}});var _universal_date_input,_universal_date_input2,_universal_date_input3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./dist/universal-date-input/modern/index.js")),_alfalab_core_components_calendar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/calendar/modern/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/UniversalDateInput",component:_alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__.UniversalDateInput,id:"UniversalDateInput"},universal_date_input={name:"UniversalDateInput",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_universal_date_input__WEBPACK_IMPORTED_MODULE_1__.UniversalDateInput,{autoCorrection:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("autoCorrection",!0),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("view",["date","date-time","date-range","time"],"date"),picker:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("picker",!1),Calendar:_alfalab_core_components_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar})}};__webpack_exports__.default=meta,universal_date_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},universal_date_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_universal_date_input=universal_date_input.parameters)||void 0===_universal_date_input?void 0:_universal_date_input.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'UniversalDateInput',\n  render: () => {\n    return <UniversalDateInput autoCorrection={boolean('autoCorrection', true)} view={select('view', (['date', 'date-time', 'date-range', 'time'] as any), 'date')} picker={(boolean('picker', false) as true)} Calendar={Calendar} />;\n  }\n}"},null===(_universal_date_input2=universal_date_input.parameters)||void 0===_universal_date_input2||null===(_universal_date_input3=_universal_date_input2.docs)||void 0===_universal_date_input3?void 0:_universal_date_input3.source)})});const __namedExportsOrder=["universal_date_input"]},"./packages/universal-date-input/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/universal-date-input/src/docs/Component.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"дата",children:"Дата"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской. Для ввода значений без клавиатуры можно использовать календарь.\nПри необходимости ввод с клавиатуры можно запретить.\nЕсли предполагаемая дата находится недалеко от текущей, рекомендуется использовать календарь со слайдером месяцев,\nв других случаях, лучше подойдёт календарь с выбором года и месяца."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [radioSelected, setRadioSelected] = React.useState('none');\n    const [disableUserInput, setDisableUserInput] = React.useState(false);\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (_, { value }) => {\n        setValue(value);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date'\n                label='Дата'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size='m'\n                value={value}\n                onChange={handleChange}\n                disableUserInput={disableUserInput}\n                picker={radioSelected !== 'none'}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: radioSelected,\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <RadioGroup\n                label='Календарь'\n                direction='vertical'\n                onChange={(_, { value }) => setRadioSelected(value)}\n                value={radioSelected}\n            >\n                <Radio label='Без календаря' value='none' />\n                <Radio label='Со слайдером месяцев' value='month-only' />\n                <Radio label='С выбором года и месяца' value='full' />\n            </RadioGroup>\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={disableUserInput}\n                label='Запретить ввод с клавиатуры'\n                onChange={() => setDisableUserInput(!disableUserInput)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"диапазон-дат",children:"Диапазон дат"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской. Для ввода без клавиатуры можно использовать календарь. При необходимости ввод с клавиатуры можно запретить."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [radioSelected, setRadioSelected] = React.useState('none');\n    const [disableUserInput, setDisableUserInput] = React.useState(false);\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (_, { value }) => {\n        setValue(value);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date-range'\n                label='Диапазон дат'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                value={value}\n                size='m'\n                disableUserInput={disableUserInput}\n                picker={radioSelected !== 'none'}\n                rangeBehavior={radioSelected}\n                onChange={handleChange}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: 'month-only',\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <RadioGroup\n                label='Календарь'\n                direction='vertical'\n                onChange={(_, { value }) => setRadioSelected(value)}\n                value={radioSelected}\n            >\n                <Radio label='Без календаря' value='none' />\n                <Radio label='С механикой уточнения границ' value='clarification' />\n                <Radio label='С механикой сброса границ' value='reset' />\n            </RadioGroup>\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={disableUserInput}\n                label='Запретить ввод с клавиатуры'\n                onChange={() => setDisableUserInput(!disableUserInput)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"дата-и-время",children:"Дата и время"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:720,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [picker, setPicker] = React.useState(false);\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (_, { value }) => {\n        setValue(value);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 'var(--calendar-width)' }}>\n            <UniversalDateInput\n                breakpoint={BREAKPOINT}\n                block={true}\n                view='date-time'\n                label='Дата и время'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size='m'\n                value={value}\n                onChange={handleChange}\n                picker={picker}\n                Calendar={Calendar}\n                calendarProps={{\n                    selectorView: 'month-only',\n                }}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n\n            <Gap size='xl' />\n\n            <Switch\n                block={true}\n                checked={picker}\n                label='Календарь для ввода даты'\n                onChange={() => setPicker(!picker)}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"время",children:"Время"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Поле ввода с маской."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState('');\n\n    const handleChange = (_, { value }) => {\n        setValue(value);\n    };\n\n    return (\n        <div style={{ width: isMobile() ? '100%' : 320 }}>\n            <UniversalDateInput\n                value={value}\n                onChange={handleChange}\n                view='time'\n                label='Время'\n                labelView={isMobile() ? 'outer' : 'inner'}\n                size='m'\n                breakpoint={BREAKPOINT}\n                block={true}\n                clear={true}\n                onClear={(e) => {\n                    e.stopPropagation();\n                    setValue('');\n                }}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки. Пикер это\n",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/calendar--docs",children:"Calendar"}),"\nв ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/popover--docs",children:"Popover"}),"."]})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component_responsive=__webpack_require__("./packages/universal-date-input/src/Component.responsive.tsx");function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// responsive версия\nimport { UniversalDateInput } from '@alfalab/core-components/universal-date-input';\n\n// desktop версия\nimport { UniversalDateInputDesktop } from '@alfalab/core-components/universal-date-input/desktop';\n\n// mobile версия\nimport { UniversalDateInputMobile } from '@alfalab/core-components/universal-date-input/mobile';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component_responsive.W})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# @alfalab/core-components-universal-date-input\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n\n## 1.3.0\n\n### Minor Changes\n\n### [#992](https://github.com/core-ds/core-components/pull/992)\n\n-   В компонентах BankCard, CodeInput, Comment, Divider, ListHeader, Pagination, Scrollbar, Skeleton, SortableList, Steps, Tabs, Underlay и UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   popover@6.2.0\n    -   input@14.0.0\n\n## 1.2.3\n\n### Patch Changes\n\n### [#987](https://github.com/core-ds/core-components/pull/987)\n\n-   Немного изменена структура файлов в пакетах для корректной сборки в vite\n\n-   Обновлены зависимости\n    -   input@13.0.2\n\n## 1.2.2\n\n### Patch Changes\n\n### [#970](https://github.com/core-ds/core-components/pull/970)\n\n-   Исправлен размер иконки календаря\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n\n## 1.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.0\n    -   shared@0.8.0\n\n## 1.1.0\n\n### Minor Changes\n\n### [#944](https://github.com/core-ds/core-components/pull/944)\n\n-   Добавлен package.json с module полем в mobile, desktop, shared точки входа\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n    -   shared@0.7.0\n\n## 1.0.1\n\n### Patch Changes\n\n### [#884](https://github.com/core-ds/core-components/pull/884)\n\n-   Добавлен атрибут autocomplete='off'\n\n-   Обновлены зависимости\n    -   input@12.2.1\n    -   shared@0.6.0\n\n## 1.0.0\n\n### Major Changes\n\n### [#858](https://github.com/core-ds/core-components/pull/858)\n\n-   Добавлен новый компонент UniversalDateInput\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n";function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"UniversalDateInput",design:"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=93986%3A124024&mode=design&t=Itgzojk9BOtPqYkS-1",children:"Используется для указания даты и времени."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function Component_docs_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent()}}}]);