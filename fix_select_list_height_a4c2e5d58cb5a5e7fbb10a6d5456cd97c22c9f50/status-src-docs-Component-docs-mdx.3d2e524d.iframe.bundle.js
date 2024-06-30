"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[8437,7747,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/status/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},status:function(){return status}});var _status$parameters,_status$parameters2,_status$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_status__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/status/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Status",component:_alfalab_core_components_status__WEBPACK_IMPORTED_MODULE_2__.Status,id:"Status"},status={name:"Status",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_status__WEBPACK_IMPORTED_MODULE_2__.Status,{color:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("color",_alfalab_core_components_status__WEBPACK_IMPORTED_MODULE_2__.colors,"green"),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["muted-alt","contrast","muted"],"muted-alt"),children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","Label")})}};__webpack_exports__.default=meta,status.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},status.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_status$parameters=status.parameters)||void 0===_status$parameters?void 0:_status$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'Status',\n  render: () => <Status color={select('color', colors, 'green')} view={select('view', ['muted-alt', 'contrast', 'muted'], 'muted-alt')}>\n            {text('children', 'Label')}\n        </Status>\n}"},null===(_status$parameters2=status.parameters)||void 0===_status$parameters2?void 0:null===(_status$parameters2$d=_status$parameters2.docs)||void 0===_status$parameters2$d?void 0:_status$parameters2$d.source)})});let __namedExportsOrder=["status"]},"./packages/status/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/status/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Container>\n    <div>\n        {colors.map((color) => (\n            <>\n                <Status view='contrast' color={color} key={color}>\n                    Label\n                </Status>\n                <Gap size='l' direction='horizontal' />\n            </>\n        ))}\n    </div>\n    <Gap size='l' />\n    <div>\n        {colors.map((color) => (\n            <>\n                <Status view='muted-alt' color={color} key={color}>\n                    Label\n                </Status>\n                <Gap size='l' direction='horizontal' />\n            </>\n        ))}\n    </div>\n    <Gap size='l' />\n    <div>\n        {colors.map((color) => (\n            <>\n                <Status view='muted' color={color} key={color}>\n                    Label\n                </Status>\n                <Gap size='l' direction='horizontal' />\n            </>\n        ))}\n    </div>\n</Container>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/status/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Status } from '@alfalab/core-components/status';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Status})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Status",children:"Используется для цветового кодирования статусов."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 3.4.0\n\n### Minor Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1223](https://github.com/core-ds/core-components/pull/1223)\n\n-   Добавлены новые значения для свойства view: 'muted-alt' и 'muted'. Значение 'soft' для view теперь deprecated, используйте вместо него 'muted-alt'\n-   Также добавлен кодмод, который изменяет значение view компонента Status с 'soft' на 'muted-alt'\n\n## 3.3.0\n\n### Minor Changes\n\n<sup><time>24.05.2024</time></sup>\n\n### [#1205](https://github.com/core-ds/core-components/pull/1205)\n\n-   Для компонента Status было добавлено многоточие для обработки сценариев переполнения\n\n## 3.2.0\n\n### Minor Changes\n\n### [#973](https://github.com/core-ds/core-components/pull/973)\n\n-   В компонентах Badge,CircularProgressBar,Dropzone,FileUploadItem,HatchingProgressBar,Indicator,IconView,Status,ProgressBar и SteppedProgressBar цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.8\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.7\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.6\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.5\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n## 3.0.4\n\n### Patch Changes\n\n### [#319](https://github.com/core-ds/core-components/pull/319)\n\n-   Добавлен текстовый стиль letter-spacing для компонента Status\n\n## 3.0.3\n\n-   В этом выпуске не было значимых изменений.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@3.0.0...@alfalab/core-components-status@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.4.1...@alfalab/core-components-status@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.4.0...@alfalab/core-components-status@2.4.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.3.3...@alfalab/core-components-status@2.4.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.3.2...@alfalab/core-components-status@2.3.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n## [2.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.3.1...@alfalab/core-components-status@2.3.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.3.0...@alfalab/core-components-status@2.3.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.2.2...@alfalab/core-components-status@2.3.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.1.0...@alfalab/core-components-status@2.2.0) (2021-12-09)\n\n### Features\n\n-   **status:** добавлено 10% прозрачности в цвет фона ([#896](https://github.com/core-ds/core-components/issues/896)) ([b55c62b](https://github.com/core-ds/core-components/commit/b55c62b49cc52a15ff7497b9ad329773fba15959))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.0.1...@alfalab/core-components-status@2.1.0) (2021-08-04)\n\n### Features\n\n-   add mods colors ([#770](https://github.com/core-ds/core-components/issues/770)) ([fe985f4](https://github.com/core-ds/core-components/commit/fe985f467b4d47a5152e168d2ab3846872d1a574))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@2.0.0...@alfalab/core-components-status@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.2.6...@alfalab/core-components-status@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.2.5...@alfalab/core-components-status@1.2.6) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n## [1.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.2.4...@alfalab/core-components-status@1.2.5) (2021-03-30)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n## [1.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.2.2...@alfalab/core-components-status@1.2.4) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.2.0...@alfalab/core-components-status@1.2.2) (2021-03-16)\n\n### Bug Fixes\n\n-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.1.3...@alfalab/core-components-status@1.2.0) (2021-03-15)\n\n### Features\n\n-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.1.2...@alfalab/core-components-status@1.1.3) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.1.1...@alfalab/core-components-status@1.1.2) (2021-03-11)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-status@1.1.0...@alfalab/core-components-status@1.1.1) (2021-03-10)\n\n**Note:** Version bump only for package @alfalab/core-components-status\n\n# 1.1.0 (2021-03-05)\n\n### Features\n\n-   **status:** add component ([#546](https://github.com/core-ds/core-components/issues/546)) ([52a1f0b](https://github.com/core-ds/core-components/commit/52a1f0bd8578fe34d1c214b93a363e7b76621c17))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/status/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Status:function(){return Status},colors:function(){return colors}}),__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={component:"component_RyTHC",ellipsis:"ellipsis__p137","muted-alt":"muted-alt_mvxiK",green:"green_L09lA",orange:"orange_RtKwL",red:"red_XlhtJ",blue:"blue_Qb3GK",teal:"teal_boKsi",grey:"grey_se5hC",purple:"purple_vSlBN",contrast:"contrast__wmqE",muted:"muted_Xp1VN"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colors=["green","orange","red","blue","grey","teal","purple"],Status=function(_ref){var className=_ref.className,_ref$view=_ref.view,_ref$color=_ref.color,children=_ref.children,dataTestId=_ref.dataTestId;return(0,jsx_runtime.jsx)("span",{className:classnames_default()("component_RyTHC",index_module[void 0===_ref$color?"green":_ref$color],index_module[void 0===_ref$view?"muted-alt":_ref$view],className),"data-test-id":dataTestId,children:(0,jsx_runtime.jsx)("span",{className:"ellipsis__p137",children:children})})};try{Status.displayName="Status",Status.__docgenInfo={description:"",displayName:"Status",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},view:{defaultValue:{value:"muted-alt"},description:"Вид компонента\n@description soft deprecated, используйте вместо него muted-alt",name:"view",required:!1,type:{name:"enum",value:[{value:'"contrast"'},{value:'"soft"'},{value:'"muted"'},{value:'"muted-alt"'}]}},color:{defaultValue:{value:"green"},description:"Цветовое оформление иконки",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"orange"'},{value:'"red"'},{value:'"blue"'},{value:'"grey"'},{value:'"teal"'},{value:'"purple"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/status/src/Component.tsx#Status"]={docgenInfo:Status.__docgenInfo,name:"Status",path:"packages/status/src/Component.tsx#Status"})}catch(__react_docgen_typescript_loader_error){}}}]);