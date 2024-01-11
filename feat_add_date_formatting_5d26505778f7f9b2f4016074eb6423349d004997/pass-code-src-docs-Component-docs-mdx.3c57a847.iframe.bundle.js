"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[8757,2749,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");const MDXContext=react.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=(mod=mdx_react_shim_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod)),((target,mod,secondTarget)=>{__copyProps(target,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")})(mdx_react_shim_exports,__webpack_require__("./node_modules/@mdx-js/react/index.js"),module.exports)},"./packages/pass-code/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pass_code:function(){return pass_code}});var _pass_code$parameters,_pass_code$parameters2,_pass_code$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js")),_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/pass-code/modern/index.js"),_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/SfFaceIdXxlIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),meta={title:"Components/PassCode",component:_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.PassCode,id:"PassCode"},pass_code={name:"PassCode",render:function render(){var codeLength=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("codeLength",0,{min:0,max:12,range:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.PassCode,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("value",""),onChange:function onChange(){},maxCodeLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxCodeLength",8,{min:0,max:12,range:!0}),codeLength:0===codeLength?void 0:codeLength,message:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("message",""),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"ghost",children:"Забыли код?"},"left-addon"),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"ghost",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__.SfFaceIdXxlIcon,{})},"right-addon")})}};__webpack_exports__.default=meta,pass_code.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},pass_code.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_pass_code$parameters=pass_code.parameters)||void 0===_pass_code$parameters?void 0:_pass_code$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'PassCode',\n  render: () => {\n    const codeLength = number('codeLength', 0, {\n      min: 0,\n      max: 12,\n      range: true\n    });\n    return <PassCode value={text('value', '')} onChange={() => {}} maxCodeLength={number('maxCodeLength', 8, {\n      min: 0,\n      max: 12,\n      range: true\n    })} codeLength={codeLength === 0 ? undefined : codeLength} message={text('message', '')} error={text('error', '')} leftAddons={boolean('leftAddons', false) && <KeyPadButton view='ghost' key='left-addon'>\n                            Забыли код?\n                        </KeyPadButton>} rightAddons={boolean('rightAddons', false) && <KeyPadButton view='ghost' key='right-addon'>\n                            <SfFaceIdXxlIcon />\n                        </KeyPadButton>} />;\n  }\n}"},null===(_pass_code$parameters2=pass_code.parameters)||void 0===_pass_code$parameters2||null===(_pass_code$parameters3=_pass_code$parameters2.docs)||void 0===_pass_code$parameters3?void 0:_pass_code$parameters3.source)})});const __namedExportsOrder=["pass_code"]},"./packages/pass-code/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/pass-code/src/docs/Component.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компоненту можно передать длину кода, в этом случае он сразу отобразит нужное количество точек над пин-падом.\nЕсли длина неизвестна, после каждого нажатия на пин-пад будет добавляться новая точка.\nКнопка удаления появляется после ввода первого символа.\nПосле валидации компонент может отобразить состоянии ошибки и вывести сообщение.\nСостояния успеха для цифрового кода не предусмотренно, пользователь просто пойдёт дальше по сценарию.\nКорректная комбинация для примера ",(0,jsx_runtime.jsx)(_components.code,{children:"0451"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,mobileHeight:640,mobileOnly:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const VALID_CODE = '0451';\nconst MAX_LENGTH = VALID_CODE.length;\nconst SCREENS = {\n    INITIAL: 'initial',\n    ENTER_CODE: 'ENTER_CODE',\n    SUCCESS: 'success',\n};\n\nrender(() => {\n    const [screen, setScreen] = React.useState(SCREENS.INITIAL);\n    const [error, setError] = React.useState(false);\n    const [code, setCode] = React.useState('');\n    const [passCodeParams, setPassCodeParams] = React.useState();\n\n    const validate = (codeToValidate) => {\n        if (codeToValidate !== VALID_CODE) {\n            setTimeout(() => setError('Error message'), 300);\n            setTimeout(() => {\n                setError((prev) => {\n                    if (prev) {\n                        setCode('');\n                        return false;\n                    }\n\n                    return prev;\n                });\n            }, 1300);\n\n            return;\n        }\n\n        setTimeout(() => setScreen(SCREENS.SUCCESS), 500);\n    };\n\n    const handleChange = (value) => {\n        setCode(value);\n        setError(false);\n\n        if (passCodeParams.codeLength > 0 && value.length === MAX_LENGTH) {\n            validate(value);\n        }\n    };\n\n    if (screen === SCREENS.INITIAL) {\n        return (\n            <>\n                <Button\n                    block\n                    onClick={() => {\n                        setPassCodeParams({\n                            codeLength: MAX_LENGTH,\n                            message: 'Введите код из четырёх цифр',\n                        });\n                        setScreen(SCREENS.ENTER_CODE);\n                    }}\n                >\n                    Код из четырех цифр\n                </Button>\n                <Gap size='m' />\n                <Button\n                    block\n                    onClick={() => {\n                        setPassCodeParams({ maxCodeLength: 12 });\n                        setScreen(SCREENS.ENTER_CODE);\n                    }}\n                >\n                    Длина кода неизвестна заранее\n                </Button>\n            </>\n        );\n    }\n\n    if (screen === SCREENS.SUCCESS) {\n        return (\n            <div style={{ display: 'flex', flexFlow: 'column nowrap', height: 600 }}>\n                <Gap size='xl' />\n                <Gap size='8xl' />\n                <div\n                    style={{\n                        display: 'flex',\n                        flexFlow: 'column nowrap',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flex: 1,\n                    }}\n                >\n                    <div style={{ textAlign: 'center' }}>\n                        <SuperEllipse\n                            size={80}\n                            backgroundColor='var(--color-light-graphic-positive)'\n                        >\n                            <CheckmarkMIcon style={{ fill: '#fff' }} />\n                        </SuperEllipse>\n\n                        <Gap size='m' />\n\n                        <Typography.Text view='primary-medium' weight='bold'>\n                            Введён корректный код\n                        </Typography.Text>\n                    </div>\n\n                    <Button\n                        block\n                        onClick={() => {\n                            setScreen(SCREENS.INITIAL);\n                            setError(false);\n                            setCode('');\n                        }}\n                    >\n                        Попробовать ещё раз\n                    </Button>\n                </div>\n            </div>\n        );\n    }\n\n    return (\n        <div\n            style={{\n                display: 'flex',\n                flexFlow: 'column nowrap',\n                justifyContent: 'space-between',\n                height: 600,\n            }}\n        >\n            <PassCode {...passCodeParams} value={code} onChange={handleChange} error={error} />\n\n            {passCodeParams.maxCodeLength > 0 && (\n                <Button block view='primary' onClick={() => validate(code)}>\n                    Продолжить\n                </Button>\n            )}\n        </div>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"адаптивность",children:"Адаптивность"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Размер контролов компонента подстраивается под ширину мобильного экрана.\nКомпонент не предназначен для использования на десктопных устройствах и не имеет соответствующих состояний."})]})}var description=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/pass-code/src/Component.tsx"),vars=":root {\n    --pass-code-max-width: 500px;\n    --button-bg-color: var(--color-light-neutral-translucent-200);\n    --button-bg-color-active: var(--color-light-neutral-translucent-200-press);\n}\n";function development_createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { PassCode } from '@alfalab/core-components/pass-code';\n\n// Если добавляете аддон, то можно обернуть его в KeyPadButton. Так не понадобится подгонять стили под другие кнопки.\nimport { KeyPadButton } from '@alfalab/core-components/pass-code';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.U}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:vars})]})}var development=function development_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)},CHANGELOGraw_namespaceObject="# @alfalab/core-components-pass-code\n\n## 1.4.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.9.1\n    -   button@11.1.1\n\n## 1.4.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.1.0\n    -   shared@0.9.0\n\n## 1.3.0\n\n### Minor Changes\n\n### [#982](https://github.com/core-ds/core-components/pull/982)\n\n-   В компонентах CalendarInput, CalendarRange, CalendarWithSkeleton, Calendar, Confirmation, DateRangeInput, DateTimeInput, PassCode и Plate цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@11.0.0\n\n## 1.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.2\n\n## 1.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.1\n\n## 1.2.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@10.0.0\n    -   shared@0.8.0\n\n## 1.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.1.0\n    -   shared@0.7.0\n\n## 1.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.6\n    -   shared@0.6.0\n\n## 1.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.5.0\n    -   button@9.0.5\n\n## 1.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.4.0\n    -   button@9.0.4\n\n## 1.2.0\n\n### Minor Changes\n\n### [#830](https://github.com/core-ds/core-components/pull/830)\n\n-   Добавлен message prop\n\n## 1.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.3.0\n    -   button@9.0.3\n\n## 1.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@9.0.2\n\n## 1.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.2.0\n    -   button@9.0.1\n\n## 1.1.0\n\n### Minor Changes\n\n### [#687](https://github.com/core-ds/core-components/pull/687)\n\n-   Компонент Button заменен на mobile/desktop версии для мобильных и десктопных версий компонентов\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.1.0\n    -   button@9.0.0\n    -   gap@1.2.0\n\n## 1.0.18\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   button@8.5.1\n    -   gap@1.1.3\n\n## 1.0.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.5.0\n\n## 1.0.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.4.0\n\n## 1.0.15\n\n### Patch Changes\n\n### [#635](https://github.com/core-ds/core-components/pull/635)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 1.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.3.0\n\n## 1.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.2.0\n\n## 1.0.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@8.1.0\n\n## 1.0.11\n\n### Patch Changes\n\n### [#624](https://github.com/core-ds/core-components/pull/624)\n\n-   Исправлена ошибка, из-за которой не исчезали точки при стирании кода на старых iPhone\n\n## 1.0.10\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   button@8.0.0\n    -   gap@1.1.2\n\n## 1.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.1.1\n\n## 1.0.8\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   button@7.1.0\n    -   gap@1.1.1\n\n## 1.0.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.5\n\n## 1.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.4\n\n## 1.0.5\n\n### Patch Changes\n\n### [#470](https://github.com/core-ds/core-components/pull/470)\n\n-   Обновлена версия react-transition-group\n\n## 1.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   button@7.0.3\n\n## 1.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   gap@1.1.0\n\n## 1.0.2\n\n### Patch Changes\n\n### [#396](https://github.com/core-ds/core-components/pull/396)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 1.0.1\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   button@7.0.2\n    -   gap@1.0.1\n\n## 1.0.0\n\n### Major Changes\n\n### [#383](https://github.com/core-ds/core-components/pull/383)\n\n-   Добавлен новый компонент PassCode\n";function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/PassCode",of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"PassCode",children:"Компонент для авторизации пользователя с помощью цифрового ключа."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function Component_docs_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent()}},"./packages/pass-code/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return PassCode}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/gap/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),index_module_component="component_Xynz_",index_module_dot="dot_q9_sK",index_module_error="error__Hxqe",index_module_filled="filled_PSH3n",transitions_module={enter:"enter_sncMw",enterActive:"enterActive_opHHL",exit:"exit_qKSS2",exitActive:"exitActive_BVFXm",shake:"shake_BlLy2"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputProgress=function InputProgress(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,maxCodeLength=_ref.maxCodeLength,codeLength=_ref.codeLength,error=_ref.error,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module_component,(0,defineProperty.Z)({},transitions_module.shake,error)),"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"input-progress"),children:codeLength?new Array(codeLength).fill(null).map((function(_,i){var filled=Boolean(value[i]);return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module_dot,(0,defineProperty.Z)((0,defineProperty.Z)({},index_module_error,filled&&error),index_module_filled,filled))},i)})):new Array(maxCodeLength).fill(null).map((function(_,i){return(0,jsx_runtime.jsx)(CSSTransition.Z,{in:Boolean(value[i]),timeout:150,classNames:transitions_module,unmountOnExit:!0,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module_dot,index_module_filled,(0,defineProperty.Z)({},index_module_error,error))})},i)}))})};try{InputProgress.displayName="InputProgress",InputProgress.__docgenInfo={description:"",displayName:"InputProgress",props:{maxCodeLength:{defaultValue:null,description:"",name:"maxCodeLength",required:!0,type:{name:"number"}},codeLength:{defaultValue:null,description:"",name:"codeLength",required:!1,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code/src/components/InputProgress/Component.tsx#InputProgress"]={docgenInfo:InputProgress.__docgenInfo,name:"InputProgress",path:"packages/pass-code/src/components/InputProgress/Component.tsx#InputProgress"})}catch(__react_docgen_typescript_loader_error){}var BackspaceXxlIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/BackspaceXxlIcon.js"),KeyPadButton=__webpack_require__("./packages/pass-code/src/components/KeyPadButton/index.ts"),KeyPad_index_module_component="component_ct2WI",KeyPad_index_module_digit="digit_b1jTn",CELLS=new Array(12).fill(null).map((function(_,i){return 10===i?0:i+1})),KeyPad=function KeyPad(_ref){var leftAddons=_ref.leftAddons,rightAddons=_ref.rightAddons,onClick=_ref.onClick,onClear=_ref.onClear,showClear=_ref.showClear,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("div",{className:KeyPad_index_module_component,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"keypad"),children:CELLS.map((function(digit,i){return 9===i?leftAddons||(0,jsx_runtime.jsx)("div",{},"left-addons-empty"):11===i?showClear?(0,jsx_runtime.jsx)(KeyPadButton.d,{onClick:onClear,view:"ghost",children:(0,jsx_runtime.jsx)(BackspaceXxlIcon.BackspaceXxlIcon,{})},"clear-btn"):rightAddons||(0,jsx_runtime.jsx)("div",{},"right-addon-empty"):(0,jsx_runtime.jsx)(KeyPadButton.d,{onClick:onClick,view:"secondary",buttonClassName:KeyPad_index_module_digit,children:digit},digit)}))})};try{KeyPad.displayName="KeyPad",KeyPad.__docgenInfo={description:"",displayName:"KeyPad",props:{showClear:{defaultValue:null,description:'Показать кнопку "очистить".',name:"showClear",required:!0,type:{name:"boolean"}},leftAddons:{defaultValue:null,description:"Слот слева.",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа.",name:"rightAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для автоматизированного тестирования.",name:"dataTestId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Коллбэк нажатия на кнопку.",name:"onClick",required:!0,type:{name:"(digit: number) => void"}},onClear:{defaultValue:null,description:"Коллбэк очистки кода.",name:"onClear",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code/src/components/KeyPad/Component.tsx#KeyPad"]={docgenInfo:KeyPad.__docgenInfo,name:"KeyPad",path:"packages/pass-code/src/components/KeyPad/Component.tsx#KeyPad"})}catch(__react_docgen_typescript_loader_error){}var src_index_module_component="component_Je1G5",src_index_module_message="message_fnEoN",src_index_module_error="error_MEBxn",PassCode=(0,react.forwardRef)((function(_ref,ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,dataTestId=_ref.dataTestId,className=_ref.className,leftAddons=_ref.leftAddons,rightAddons=_ref.rightAddons,error=_ref.error,message=_ref.message,onChange=_ref.onChange,_ref$maxCodeLength=_ref.maxCodeLength,maxCodeLength=void 0===_ref$maxCodeLength?10:_ref$maxCodeLength,codeLength=_ref.codeLength,passwordLen=codeLength||maxCodeLength;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(src_index_module_component,className),ref:ref,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"wrapper"),children:[error?function renderError(){return(0,jsx_runtime.jsx)("div",{className:classnames_default()(src_index_module_message,src_index_module_error),"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"error"),children:error})}():function renderMessage(){return(0,jsx_runtime.jsx)("div",{className:src_index_module_message,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId,"message"),children:message})}(),(0,jsx_runtime.jsx)(modern.Gap,{size:"m"}),(0,jsx_runtime.jsx)(InputProgress,{dataTestId:dataTestId,value:value,maxCodeLength:maxCodeLength,codeLength:codeLength,error:Boolean(error)}),(0,jsx_runtime.jsx)(modern.Gap,{size:"4xl"}),(0,jsx_runtime.jsx)(KeyPad,{dataTestId:dataTestId,leftAddons:leftAddons,rightAddons:rightAddons,onClick:function handleChange(digit){var newValue=value.concat(digit.toString());newValue.length<=passwordLen&&(null==onChange||onChange(newValue))},onClear:function handleClear(){value.length>0&&(null==onChange||onChange(null==value?void 0:value.slice(0,-1)))},showClear:Boolean(value)})]})}));try{PassCode.displayName="PassCode",PassCode.__docgenInfo={description:"",displayName:"PassCode",props:{value:{defaultValue:{value:""},description:"Код.",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Обработчик изменения кода.",name:"onChange",required:!0,type:{name:"(code: string) => void"}},className:{defaultValue:null,description:"Дополнительный класс.",name:"className",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Отображение ошибки",name:"error",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"Сообщение над клавиатурой",name:"message",required:!1,type:{name:"ReactNode"}},leftAddons:{defaultValue:null,description:"Слот слева.",name:"leftAddons",required:!1,type:{name:"ReactNode"}},rightAddons:{defaultValue:null,description:"Слот справа.",name:"rightAddons",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.\nДля враппера используется модификатор -wrapper, ошибки -error,\nсообщения над клавиатурой -message, блока с кодом -input-progress,\nблока с цифрами -keypad",name:"dataTestId",required:!1,type:{name:"string"}},maxCodeLength:{defaultValue:{value:"10"},description:"Максимально возможная длина кода.",name:"maxCodeLength",required:!1,type:{name:"number"}},codeLength:{defaultValue:null,description:"Длина кода.",name:"codeLength",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code/src/Component.tsx#PassCode"]={docgenInfo:PassCode.__docgenInfo,name:"PassCode",path:"packages/pass-code/src/Component.tsx#PassCode"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pass-code/src/components/KeyPadButton/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return KeyPadButton}});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mobile=__webpack_require__("./dist/button/modern/mobile/index.js"),index_module={component:"component_vOeR7",button:"button_n1HgJ",secondary:"secondary_klg7r",ghost:"ghost_vxRt8"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function KeyPadButton(_ref){var children=_ref.children,_onClick=_ref.onClick,className=_ref.className,_ref$view=_ref.view,view=void 0===_ref$view?"secondary":_ref$view,buttonClassName=_ref.buttonClassName;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.component,className),children:(0,jsx_runtime.jsx)(mobile.ButtonMobile,{className:classnames_default()(index_module.button,index_module[view],buttonClassName),view:view,onClick:function onClick(){return null==_onClick?void 0:_onClick(children)},children:children})})}try{KeyPadButton.displayName="KeyPadButton",KeyPadButton.__docgenInfo={description:"",displayName:"KeyPadButton",props:{view:{defaultValue:{value:"secondary"},description:"Вид кнопки.",name:"view",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"outlined"'},{value:'"filled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"accent"'},{value:'"transparent"'},{value:'"ghost"'}]}},children:{defaultValue:null,description:"Значение.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Дополнительный класс.",name:"className",required:!1,type:{name:"string"}},buttonClassName:{defaultValue:null,description:"Дополнительный класс кнопки.",name:"buttonClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Коллбэк нажатия на кнопку.",name:"onClick",required:!1,type:{name:"((payload: T) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pass-code/src/components/KeyPadButton/Component.tsx#KeyPadButton"]={docgenInfo:KeyPadButton.__docgenInfo,name:"KeyPadButton",path:"packages/pass-code/src/components/KeyPadButton/Component.tsx#KeyPadButton"})}catch(__react_docgen_typescript_loader_error){}}}]);