"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[5709,2281,1341],{"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _nonIterableSpread(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||(0,unsupportedIterableToArray.Z)(arr)||_nonIterableSpread()}},"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/international-phone-input/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},international_phone_input:function(){return international_phone_input}});var _international_phone_,_international_phone_2,_international_phone_3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/international-phone-input/modern/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/InternationalPhoneInput",component:_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__.InternationalPhoneInput,id:"InternationalPhoneInput"},OPTIONS=[{key:"+7 921 681 53 98"},{key:"+7 921 681 52 97"},{key:"+7 921 681 52 96"},{key:"+7 921 681 52 95"},{key:"8 921 681 52 94"}],international_phone_input={name:"InternationalPhoneInput",render:function render(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"320px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_international_phone_input__WEBPACK_IMPORTED_MODULE_1__.InternationalPhoneInput,{label:"Номер телефона",placeholder:"Введите номер телефона",value:value,onChange:function(phone){return setValue(phone)},defaultIso2:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("defaultIso2","ru"),options:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("options",!1)?OPTIONS:void 0,block:!0,clearableCountryCode:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("clearableCountryCode",!0),clear:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("clear",!1)})})}};__webpack_exports__.default=meta,international_phone_input.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},international_phone_input.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_international_phone_=international_phone_input.parameters)||void 0===_international_phone_?void 0:_international_phone_.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'InternationalPhoneInput',\n  render: () => {\n    const [value, setValue] = useState('');\n    const handleChange: InternationalPhoneInputProps['onChange'] = phone => setValue(phone);\n    return <div style={{\n      width: '320px'\n    }}>\n                <InternationalPhoneInput label='Номер телефона' placeholder='Введите номер телефона' value={value} onChange={handleChange} defaultIso2={text('defaultIso2', 'ru')} options={boolean('options', false) ? OPTIONS : undefined} block={true} clearableCountryCode={boolean('clearableCountryCode', true)} clear={boolean('clear', false)} />\n            </div>;\n  }\n}"},null===(_international_phone_2=international_phone_input.parameters)||void 0===_international_phone_2?void 0:null===(_international_phone_3=_international_phone_2.docs)||void 0===_international_phone_3?void 0:_international_phone_3.source)})});let __namedExportsOrder=["international_phone_input"]},"./packages/international-phone-input/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/international-phone-input/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Стандартный вид компонента — поле с пикером страны и предопределённым кодом страны.\nДля упрощения ввода номера можно включить режим автокомплита."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const OPTIONS = [\n    { key: '+7 921 681 53 98' },\n    { key: '+7 921 681 52 97' },\n    { key: '+7 921 681 52 96' },\n    { key: '+7 921 681 52 95' },\n    { key: '8 921 681 52 94' },\n];\n\nrender(() => {\n    const [value, setValue] = React.useState('');\n    const [selectedCountry, setSelectedCountry] = React.useState();\n    const [clearableCountryCode, setClearableCountryCode] = React.useState(false);\n    const [autocomplete, setAutocomplete] = React.useState(false);\n\n    const handleChange = (phone) => setValue(phone);\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <InternationalPhoneInput\n                breakpoint={BREAKPOINT}\n                label='Номер телефона'\n                placeholder='Введите номер телефона'\n                value={value}\n                onChange={handleChange}\n                onCountryChange={setSelectedCountry}\n                options={autocomplete ? OPTIONS : undefined}\n                block={true}\n                clearableCountryCode={clearableCountryCode}\n            />\n            <Gap size='m' />\n            <Typography.Text color='secondary'>\n                Код выбранной страны: {selectedCountry && selectedCountry.iso2}\n            </Typography.Text>\n            <Gap size='xl' />\n            <Switch\n                checked={clearableCountryCode}\n                label='Разрешить удаление кода страны'\n                onChange={() => setClearableCountryCode((prevState) => !prevState)}\n            />\n            <Gap size='m' />\n            <Switch\n                checked={autocomplete}\n                label='Режим автокомплита'\n                onChange={() => {\n                    setAutocomplete((prevState) => !prevState);\n                }}\n            />\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"инпут-без-пикера-страны",children:"Инпут без пикера страны"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"При необходимости можно отключить возможность явно выбирать код страны через селект. Инпут сам определит страну после ввода её кода."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [value, setValue] = React.useState('');\n    const [selectedCountry, setSelectedCountry] = React.useState();\n\n    const handleChange = (phone) => setValue(phone);\n\n    return (\n        <div style={{ width: document.body.clientWidth < 450 ? '100%' : 320 }}>\n            <InternationalPhoneInput\n                breakpoint={BREAKPOINT}\n                label='Номер телефона'\n                placeholder='Введите номер телефона'\n                value={value}\n                onChange={handleChange}\n                onCountryChange={setSelectedCountry}\n                block={true}\n                countrySelectProps={{ hideCountrySelect: true }}\n            />\n            <Gap size='m' />\n            <Typography.Text color='secondary'>\n                Код выбранной страны: {selectedCountry && selectedCountry.iso2}\n            </Typography.Text>\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"морфология",children:"Морфология"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Поле ввода является оберткой над ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/formcontrol--docs",children:"FormControl"}),",\nпоэтому наследует все доступные для него настройки."]})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},desktop=__webpack_require__("./packages/international-phone-input/src/desktop/index.ts"),mobile=__webpack_require__("./packages/international-phone-input/src/mobile/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",br:"br"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// responsive версия\nimport { InternationalPhoneInput } from '@alfalab/core-components/international-phone-input';\n\n// desktop версия\nimport { InternationalPhoneInputDesktop } from '@alfalab/core-components/international-phone-input/desktop';\n\n// mobile версия\nimport { InternationalPhoneInputMobile } from '@alfalab/core-components/international-phone-input/mobile';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-datatestid",children:"Использование dataTestId"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В компоненте используются модификаторы для ",(0,jsx_runtime.jsx)(_components.code,{children:"dataTestId"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Для удобного поиска элементов можно воспользоваться функциями ",(0,jsx_runtime.jsx)(_components.code,{children:"getInternationalPhoneInputDesktopTestIds"})," и ",(0,jsx_runtime.jsx)(_components.code,{children:"getInternationalPhoneInputMobileTestIds"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","Импорт из ",(0,jsx_runtime.jsx)(_components.code,{children:"@alfalab/core-components/international-phone-input/shared"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Функции возвращают объекты:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// desktop\n{\n    // Для инпута при автокомплите\n    fieldAutocompleteWrapper: dataTestId,\n    fieldAutocompleteInner: `${dataTestId}-field-form-control-inner`,\n    fieldAutocompleteFormControl: `${dataTestId}-field-form-control`,\n    fieldAutocompleteLeftAddons: `${dataTestId}-field-form-control-left-addons`,\n    fieldAutocompleteRightAddons: `${dataTestId}-field-form-control-right-addons`,\n    fieldAutocompleteError: `${dataTestId}-field-form-control-error-message`,\n    fieldAutocompleteHint: `${dataTestId}-field-form-control-hint`,\n    option: `${dataTestId}-option`,\n    optionsList: `${dataTestId}-options-list`,\n\n    // Для инпута без автокомплита\n    field: dataTestId,\n    fieldInner: `${dataTestId}-form-control-inner`,\n    fieldFormControl: `${dataTestId}-form-control`,\n    fieldLeftAddons: `${dataTestId}-form-control-left-addons`,\n    fieldRightAddons: `${dataTestId}-form-control-right-addons`,\n    fieldError: `${dataTestId}-form-control-error-message`,\n    fieldHint: `${dataTestId}-form-control-hint`,\n\n    // Для списка стран\n    countryOption: `${dataTestId}-country-select-option`,\n    countryOptionsList: `${dataTestId}-country-select-options-list`,\n};\n\n// mobile\n{\n    // Для инпута при автокомплите\n    fieldAutocompleteWrapper: dataTestId,\n    fieldAutocompleteInner: `${dataTestId}-field-form-control-inner`,\n    fieldAutocompleteFormControl: `${dataTestId}-field-form-control`,\n    fieldAutocompleteLeftAddons: `${dataTestId}-field-form-control-left-addons`,\n    fieldAutocompleteRightAddons: `${dataTestId}-field-form-control-right-addons`,\n    fieldAutocompleteError: `${dataTestId}-field-form-control-error-message`,\n    fieldAutocompleteHint: `${dataTestId}-field-form-control-hint`,\n\n    searchInput: `${dataTestId}-search`,\n    searchFormControl: `${dataTestId}-search-form-control`,\n    searchInner: `${dataTestId}-search-form-control-inner`,\n    searchLeftAddons: `${dataTestId}-search-form-control-left-addons`,\n    searchRightAddons: `${dataTestId}-search-form-control-right-addons`,\n    searchError: `${dataTestId}-search-form-control-error-message`,\n    searchHint: `${dataTestId}-search-form-control-hint`,\n\n    bottomSheet: `${dataTestId}-bottom-sheet`,\n    bottomSheetHeader: `${dataTestId}-bottom-sheet-header`,\n    bottomSheetContent: `${dataTestId}-bottom-sheet-content`,\n    option: `${dataTestId}-option`,\n    optionsList: `${dataTestId}-options-list`,\n\n    clearButton: `${dataTestId}-clear`,\n    applyButton: `${dataTestId}-apply`,\n\n    // Для инпута без автокомплита\n    field: dataTestId,\n    fieldInner: `${dataTestId}-form-control-inner`,\n    fieldFormControl: `${dataTestId}-form-control`,\n    fieldLeftAddons: `${dataTestId}-form-control-left-addons`,\n    fieldRightAddons: `${dataTestId}-form-control-right-addons`,\n    fieldError: `${dataTestId}-form-control-error-message`,\n    fieldHint: `${dataTestId}-form-control-hint`,\n\n    // Для списка стран\n    countryBottomSheet: `${dataTestId}-country-select-bottom-sheet`,\n    countryBottomSheetHeader: `${dataTestId}-country-select-bottom-sheet-header`,\n    countryBottomSheetContent: `${dataTestId}-country-select-bottom-sheet-content`,\n    countryOption: `${dataTestId}-country-select-option`,\n    countryOptionsList: `${dataTestId}-country-select-options-list`,\n};\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{components:{InternationalPhoneInputDesktop:desktop.InternationalPhoneInputDesktop,InternationalPhoneInputMobile:mobile.InternationalPhoneInputMobile}})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories,title:"Components/InternationalPhoneInput"}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"InternationalPhoneInput",children:"Используется для ввода телефонного номера в международном формате."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# @alfalab/core-components-international-phone-input\n\n## 2.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.5.1\n    -   input-autocomplete@12.1.6\n\n## 2.0.12\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n-   Обновлены зависимости\n    -   input@14.4.5\n    -   input-autocomplete@12.1.5\n    -   select@17.5.0\n\n## 2.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.4.4\n    -   select@17.4.5\n    -   input-autocomplete@12.1.4\n\n## 2.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.10.0\n    -   select@17.4.4\n    -   input@14.4.3\n    -   input-autocomplete@12.1.3\n\n## 2.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@12.1.2\n    -   input@14.4.2\n    -   select@17.4.3\n\n## 2.0.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@12.1.1\n    -   input@14.4.1\n    -   select@17.4.2\n\n## 2.0.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@12.1.0\n    -   input@14.4.0\n    -   select@17.4.1\n\n## 2.0.6\n\n### Patch Changes\n\n<sup><time>19.04.2024</time></sup>\n\n### [#1151](https://github.com/core-ds/core-components/pull/1151)\n\n-   Исправлена логика закрытия селекта с номерами телефонов при включенном автокомплите. Теперь при переключении между селектами выбора страны и выбора номера телефона, селекты закрываются, а не перекрывают друг друга\n\n-   Обновлены зависимости\n    -   select@17.4.0\n    -   input-autocomplete@12.0.6\n    -   input@14.3.3\n\n## 2.0.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.3.5\n    -   input-autocomplete@12.0.5\n\n## 2.0.4\n\n### Patch Changes\n\n<sup><time>22.03.2024</time></sup>\n\n### [#1142](https://github.com/core-ds/core-components/pull/1142)\n\n-   Изменили название стран с английского на русский язык\n\n-   Обновлены зависимости\n    -   select@17.3.4\n    -   input-autocomplete@12.0.4\n    -   input@14.3.2\n\n## 2.0.3\n\n### Patch Changes\n\n<sup><time>15.03.2024</time></sup>\n\n### [#1126](https://github.com/core-ds/core-components/pull/1126)\n\n-   Добавлены флаги для следующих стран: Caribbean Netherlands, Cyprus, French Guiana, Guadeloupe, Guyana, Kuwait, Malaysia, New Caledonia, R\xe9union, S\xe3o Tom\xe9 and Pr\xedncipe\n\n-   Обновлены зависимости\n    -   input@14.3.1\n    -   input-autocomplete@12.0.3\n    -   select@17.3.3\n\n## 2.0.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.3.2\n    -   input-autocomplete@12.0.2\n\n## 2.0.1\n\n### Patch Changes\n\n<sup><time>04.03.2024</time></sup>\n\n### [#1092](https://github.com/core-ds/core-components/pull/1092)\n\n-   Теперь, если пользователь удаляет номер телефона с помощью кнопки "очистить" (крестика), то выбранный флаг сбрасывается на флаг страны по умолчанию (если задан defaultIso2) или на заглушку - флаг страны не выбран. Ранее, после удаления номера с помощью кнопки "очистить", оставался последний выбранный флаг\n-   Если код страны не найден и установлено свойство defaultIso2, то теперь будет отображаться заглушка - флаг страны не выбран. Раньше оставался дефолтный флаг\n\n-   Обновлены зависимости\n    -   select@17.3.1\n    -   input-autocomplete@12.0.1\n\n## 2.0.0\n\n### Major Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1043](https://github.com/core-ds/core-components/pull/1043)\n\n-   Тип onChange коллбэка заменен на (value: string) => void\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1021](https://github.com/core-ds/core-components/pull/1021)\n\n-   Добавлены новые способы указать размеры - 48, 56, 64, 72. Буквенные значения размеров s, m, l, xl теперь deprecated, используйте вместо них 48, 56, 64, 72 соответственно\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@12.0.0\n    -   input@14.3.0\n    -   select@17.3.0\n\n## 1.4.0\n\n### Minor Changes\n\n### [#1083](https://github.com/core-ds/core-components/pull/1083)\n\n-   Добавлен вызов функции onClear из inputProps\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.2.1\n    -   input-autocomplete@11.4.1\n\n## 1.3.3\n\n### Patch Changes\n\n### [#1049](https://github.com/core-ds/core-components/pull/1049)\n\n-   Добавили возможность передавать dataTestId в компонент выбора страны и props в input (error, rightAddons).\n-   Добавлены функции getInternationalPhoneInputDesktopTestIds и getInternationalPhoneInputMobileTestIds для поиска элементов. Подробное описание смотрите во вкладке Разработчику -> Использование dataTestId.\n\n-   Обновлены зависимости\n    -   input@14.2.0\n    -   select@17.2.0\n    -   input-autocomplete@11.4.0\n\n## 1.3.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.1.2\n    -   select@17.1.2\n    -   input-autocomplete@11.3.4\n\n## 1.3.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n    -   select@17.1.1\n    -   input@14.1.1\n    -   input-autocomplete@11.3.3\n\n## 1.3.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.1.0\n    -   input@14.1.0\n    -   shared@0.9.0\n    -   input-autocomplete@11.3.2\n\n## 1.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@14.0.1\n    -   input-autocomplete@11.3.1\n    -   select@17.0.1\n\n## 1.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@11.3.0\n\n## 1.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@11.2.0\n\n## 1.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@17.0.0\n    -   input@14.0.0\n    -   input-autocomplete@11.1.0\n\n## 1.2.3\n\n### Patch Changes\n\n### [#987](https://github.com/core-ds/core-components/pull/987)\n\n-   Немного изменена структура файлов в пакетах для корректной сборки в vite\n\n-   Обновлены зависимости\n    -   input@13.0.2\n    -   input-autocomplete@11.0.3\n    -   select@16.0.3\n\n## 1.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@16.0.2\n    -   input-autocomplete@11.0.2\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@13.0.1\n    -   select@16.0.1\n    -   input-autocomplete@11.0.1\n\n## 1.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@11.0.0\n    -   select@16.0.0\n    -   input@13.0.0\n    -   shared@0.8.0\n\n## 1.1.0\n\n### Minor Changes\n\n### [#944](https://github.com/core-ds/core-components/pull/944)\n\n-   Добавлен package.json с module полем в mobile, desktop, shared точки входа\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.3.0\n    -   input-autocomplete@10.3.0\n    -   select@15.3.0\n    -   shared@0.7.0\n\n## 1.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@15.2.3\n    -   input-autocomplete@10.2.3\n\n## 1.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   select@15.2.2\n    -   input-autocomplete@10.2.2\n\n## 1.0.2\n\n### Patch Changes\n\n### [#900](https://github.com/core-ds/core-components/pull/900)\n\n-   Исправлен формат номера телефона (удалены скобки и тире)\n\n-   Обновлены зависимости\n    -   input-autocomplete@10.2.1\n    -   select@15.2.1\n    -   input@12.2.1\n    -   shared@0.6.0\n\n## 1.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input@12.2.0\n    -   input-autocomplete@10.2.0\n    -   select@15.2.0\n\n## 1.0.0\n\n### Major Changes\n\n### [#825](https://github.com/core-ds/core-components/pull/825)\n\n-   Добавлен новый компонент InternationalPhoneInput\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   input-autocomplete@10.1.6\n    -   shared@0.5.0\n    -   input@12.1.4\n    -   select@15.1.6\n'}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}}}]);