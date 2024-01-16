"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[839],{"./.storybook/components/icons/GithubIcon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return GithubIcon}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GithubIcon=function GithubIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?"#24292E":_ref$fill,_ref$width=_ref.width,width=void 0===_ref$width?32:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?32:_ref$height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 32 32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:fill})})};GithubIcon.__docgenInfo={description:"",methods:[],displayName:"GithubIcon",props:{fill:{defaultValue:{value:"'#24292E'",computed:!1},required:!1},width:{defaultValue:{value:"32",computed:!1},required:!1},height:{defaultValue:{value:"32",computed:!1},required:!1}}}},"./.storybook/blocks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ft:function(){return ArgsTabs},Eg:function(){return Changelog},yt:function(){return ComponentHeader},ZV:function(){return CssVars},mQ:function(){return Tabs}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={changelog:"changelog_UmYwo"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Changelog=function Changelog(_ref){var content=_ref.content,_ref$root=_ref.root,root=void 0!==_ref$root&&_ref$root;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.changelog,root&&index_module.root,"sb-unstyled"),children:content})};try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},root:{defaultValue:{value:"false"},description:"",name:"root",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/changelog/changelog.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:".storybook/blocks/changelog/changelog.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),modern=__webpack_require__("./dist/link/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),css_vars_module_cssVars="cssVars_OsBA8",rootBlockRegexp=/:root {([^}]*)}/g,mixinRegexp=/(?:@define-mixin)(.*{[^}]*})/g,CssVars=function CssVars(_ref){var css=_ref.css,title=_ref.title,expandable=_ref.expandable,_ref$type=_ref.type,type=void 0===_ref$type?"vars":_ref$type,_useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),vars=_useState2[0],setVars=_useState2[1],_useState3=(0,react.useState)(!expandable),_useState4=(0,slicedToArray.Z)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],isVars="vars"===type,regexp=isVars?rootBlockRegexp:mixinRegexp;return(0,react.useEffect)((function(){for(var rootBlockMatch=regexp.exec(css),rootBlocks=[];rootBlockMatch;)rootBlocks.push(rootBlockMatch[1]),rootBlockMatch=regexp.exec(css);var result=rootBlocks.reduce((function(acc,item,index){var divider=index===rootBlocks.length-1?"":"\n";return"".concat(acc).concat(item).concat(divider)}),isVars?":root {":"");isVars&&(result+="}"),setVars(result)}),[]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",css_vars_module_cssVars),children:[title&&(0,jsx_runtime.jsx)("h2",{className:classnames_default()("sbdocs","sbdocs-h2"),children:title}),vars&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[expandable&&(0,jsx_runtime.jsx)(modern.Link,{view:"default",onClick:function onClick(){return setOpen(!open)},pseudo:!0,children:open?"Скрыть":"Показать"}),open&&(0,jsx_runtime.jsx)(esm.en,{language:"css",code:vars,live:!1})]})]})};try{CssVars.displayName="CssVars",CssVars.__docgenInfo={description:"",displayName:"CssVars",props:{css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"vars"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vars"'},{value:'"mixins"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/css-vars/css-vars.tsx#CssVars"]={docgenInfo:CssVars.__docgenInfo,name:"CssVars",path:".storybook/blocks/css-vars/css-vars.tsx#CssVars"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),space_modern=__webpack_require__("./dist/space/modern/index.js"),dist_esm=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/index.js"),GithubIcon=__webpack_require__("./.storybook/components/icons/GithubIcon.jsx"),figma_links_namespaceObject=JSON.parse('{"ActionButton":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=603%3A79511&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Amount":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=485%3A67053&mode=design&t=pa1b0UPYsI3eWhOB-1"},"AmountInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=1202%3A39089&mode=design&t=Zpes8Nn256BjZKqE-1"},"Attach":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=95010%3A126580&mode=design&t=Itgzojk9BOtPqYkS-1"},"BankCard":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=101197%3A116070&mode=design&t=Itgzojk9BOtPqYkS-1"},"BottomSheet":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=208%3A78252&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Button":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=26%3A20881&mode=design&t=33iUEWwi2L84rxNg-1"},"Calendar":{"figma":"https://www.figma.com/file/JVZ7gCqW42KnxGsu19aqyF/Web-%3A%3A-Core-Pickers?type=design&node-id=201%3A6376&mode=design&t=G3EPSEiYGVId90JB-1"},"Checkbox":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=104%3A20999&mode=design&t=pa1b0UPYsI3eWhOB-1"},"CheckboxGroup":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=171%3A4368&mode=design&t=pa1b0UPYsI3eWhOB-1"},"CircularProgressBar":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96449%3A122707&mode=design&t=Itgzojk9BOtPqYkS-1"},"CodeInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=777%3A58604&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Comment":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=101197%3A7563&mode=design&t=Itgzojk9BOtPqYkS-1"},"Confirmation":{"figma":"https://www.figma.com/file/jDJxQE1knc3NySMBYYiBYf/Web-%3A%3A-Core-Authentication?type=design&node-id=1%3A3194&mode=design&t=bnoEMKlx7GnSNDxn-1"},"CustomButton":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=49%3A115155&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Dropzone":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=95245%3A122221&mode=design&t=Itgzojk9BOtPqYkS-1"},"FileUploadItem":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=95266%3A126069&mode=design&t=Itgzojk9BOtPqYkS-1"},"FilterTag":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=177%3A59866&mode=design&t=pa1b0UPYsI3eWhOB-1"},"GenericWrapper":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=100652%3A120406&mode=design&t=Itgzojk9BOtPqYkS-1"},"HatchingProgressBar":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96157%3A121692&mode=design&t=Itgzojk9BOtPqYkS-1"},"IconButton":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=603%3A59035&mode=design&t=33iUEWwi2L84rxNg-1"},"IconView":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=448%3A16801&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Indicator":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=383%3A1661&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Input":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=59%3A30014&mode=design&t=pa1b0UPYsI3eWhOB-1"},"InputAutocomplete":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=577%3A83206&mode=design&t=pa1b0UPYsI3eWhOB-1"},"InternationalPhoneInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=569%3A21032&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Link":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=493%3A7757&mode=design&t=pa1b0UPYsI3eWhOB-1"},"List":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=494%3A7506&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Markdown":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=494%3A8245&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Modal":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=208%3A72115&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Notification":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96729%3A114824&mode=design&t=Itgzojk9BOtPqYkS-1"},"NumberInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=160%3A12851&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Pagination":{"figma":"https://www.figma.com/file/GBJfADE8j6Ar17QDEHFYnG/Web-%3A%3A-Core-Navigation?type=design&node-id=57%3A3873&mode=design&t=BNfs4vUcbM7LD6iN-1"},"PassCode":{"figma":"https://www.figma.com/file/jDJxQE1knc3NySMBYYiBYf/Web-%3A%3A-Core-Authentication?type=design&node-id=23%3A2169&mode=design&t=bnoEMKlx7GnSNDxn-1"},"PasswordInput":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=92927%3A121445&mode=design&t=Itgzojk9BOtPqYkS-1"},"PatternLock":{"figma":"https://www.figma.com/file/jDJxQE1knc3NySMBYYiBYf/Web-%3A%3A-Core-Authentication?type=design&node-id=53%3A4604&mode=design&t=bnoEMKlx7GnSNDxn-1"},"PhoneInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=59%3A30014&mode=design&t=pa1b0UPYsI3eWhOB-1"},"PickerButton":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=206%3A63179&mode=design&t=33iUEWwi2L84rxNg-1"},"Plate":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96954%3A116586&mode=design&t=Itgzojk9BOtPqYkS-1"},"PopupSheet":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=373%3A16689&mode=design&t=pa1b0UPYsI3eWhOB-1"},"ProgressBar":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=95706%3A121367&mode=design&t=Itgzojk9BOtPqYkS-1"},"PureCell":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=100611%3A118085&mode=design&t=Itgzojk9BOtPqYkS-1"},"Radio":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=154%3A3194&mode=design&t=pa1b0UPYsI3eWhOB-1"},"RadioGroup":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=175%3A53870&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Scrollbar":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=206%3A69707&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SegmentedControl":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=331%3A18634&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Select":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=320%3A90715&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SelectWithTags":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=585%3A66514&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SidePanel":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=208%3A72557&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Skeleton":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=485%3A57469&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Slider":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=190%3A36111&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SliderInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=201%3A20347&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SortableList":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=101204%3A138780&mode=design&t=Itgzojk9BOtPqYkS-1"},"Spinner":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=373%3A16135&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Status":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=443%3A12743&mode=design&t=pa1b0UPYsI3eWhOB-1"},"StatusBadge":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=460%3A23657&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SteppedProgressBar":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=84762%3A103717&mode=design&t=Itgzojk9BOtPqYkS-1"},"Steps":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=101204%3A117641&mode=design&t=Itgzojk9BOtPqYkS-1"},"Switch":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=167%3A8581&mode=design&t=pa1b0UPYsI3eWhOB-1"},"SystemMessage":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=97264%3A163212&mode=design&t=Itgzojk9BOtPqYkS-1"},"TabBar":{"figma":"https://www.figma.com/file/GBJfADE8j6Ar17QDEHFYnG/Web-%3A%3A-Core-Navigation?type=design&node-id=1%3A12124&mode=design&t=0h3IjfxsbYoUpm02-1"},"Tabs":{"figma":"https://www.figma.com/file/GBJfADE8j6Ar17QDEHFYnG/Web-%3A%3A-Core-Navigation?type=design&node-id=1%3A3099&mode=design&t=iKKRdsdGxyub7Phv-1"},"Tag":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=109%3A22542&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Textarea":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=603%3A36187&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Toast":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=96743%3A116990&mode=design&t=Itgzojk9BOtPqYkS-1"},"Tooltip":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=377%3A1701&mode=design&t=pa1b0UPYsI3eWhOB-1"},"Underlay":{"figma":"https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components?type=design&node-id=100050%3A117140&mode=design&t=Itgzojk9BOtPqYkS-1"},"UniversalDateInput":{"figma":"https://www.figma.com/file/lGWq8DtnUcSkRasagBuwq6/Web-%3A%3A-Core?type=design&node-id=507%3A25759&mode=design&t=pa1b0UPYsI3eWhOB-1"}}'),usages_namespaceObject=JSON.parse('{"updatedAt":1696397264102,"withSuffix":{"projects":0,"imports":0,"search":"withSuffix"},"vars":{"projects":0,"imports":0,"search":"vars"},"UniversalDateInput":{"projects":0,"imports":0,"search":"UniversalDateInput*"},"Underlay":{"projects":16,"imports":38,"search":"Underlay"},"Typography":{"projects":343,"imports":8102,"search":"Typography"},"Tooltip":{"projects":231,"imports":687,"search":"Tooltip*"},"ToastPlate":{"projects":4,"imports":4,"search":"ToastPlate*"},"Toast":{"projects":25,"imports":43,"search":"Toast*"},"TimeInput":{"projects":2,"imports":2,"search":"TimeInput"},"Textarea":{"projects":101,"imports":228,"search":"Textarea"},"Tag":{"projects":161,"imports":454,"search":"Tag*"},"Tabs":{"projects":135,"imports":262,"search":"Tabs*"},"Table":{"projects":98,"imports":443,"search":"Table"},"SystemMessage":{"projects":6,"imports":20,"search":"SystemMessage*"},"Switch":{"projects":92,"imports":230,"search":"Switch"},"Steps":{"projects":18,"imports":24,"search":"Steps"},"StepperInput":{"projects":0,"imports":0,"search":"StepperInput*"},"SteppedProgressBar":{"projects":9,"imports":10,"search":"SteppedProgressBar"},"Status":{"projects":104,"imports":257,"search":"Status"},"Stack":{"projects":3,"imports":3,"search":"Stack"},"Spinner":{"projects":197,"imports":703,"search":"Spinner"},"Space":{"projects":192,"imports":1893,"search":"Space"},"SortableList":{"projects":0,"imports":0,"search":"SortableList"},"SliderInput":{"projects":16,"imports":20,"search":"SliderInput"},"Slider":{"projects":2,"imports":2,"search":"Slider"},"Skeleton":{"projects":159,"imports":820,"search":"Skeleton"},"SidePanel":{"projects":27,"imports":59,"search":"SidePanel*"},"SelectWithTags":{"projects":17,"imports":26,"search":"SelectWithTags"},"Select":{"projects":206,"imports":631,"search":"Select*"},"SegmentedControl":{"projects":6,"imports":6,"search":"SegmentedControl"},"Scrollbar":{"projects":18,"imports":31,"search":"Scrollbar"},"RadioGroup":{"projects":149,"imports":396,"search":"RadioGroup*"},"Radio":{"projects":102,"imports":220,"search":"Radio"},"PureCell":{"projects":55,"imports":362,"search":"PureCell"},"ProgressBar":{"projects":26,"imports":35,"search":"ProgressBar"},"Portal":{"projects":13,"imports":30,"search":"Portal"},"PopupSheet":{"projects":0,"imports":0,"search":"PopupSheet"},"Popover":{"projects":70,"imports":149,"search":"Popover"},"Plate":{"projects":166,"imports":533,"search":"Plate*"},"PickerButton":{"projects":69,"imports":100,"search":"PickerButton*"},"PhoneInput":{"projects":77,"imports":104,"search":"PhoneInput"},"PatternLock":{"projects":1,"imports":1,"search":"PatternLock"},"PasswordInput":{"projects":17,"imports":28,"search":"PasswordInput"},"PassCode":{"projects":1,"imports":1,"search":"PassCode"},"Pagination":{"projects":25,"imports":54,"search":"Pagination"},"NumberInput":{"projects":8,"imports":17,"search":"NumberInput*"},"NotificationManager":{"projects":62,"imports":64,"search":"NotificationManager"},"Notification":{"projects":114,"imports":160,"search":"Notification"},"Mq":{"projects":24,"imports":47,"search":"Mq"},"Modal":{"projects":292,"imports":1058,"search":"Modal*"},"Markdown":{"projects":0,"imports":0,"search":"Markdown*"},"MaskedInput":{"projects":94,"imports":272,"search":"MaskedInput"},"Loader":{"projects":67,"imports":155,"search":"Loader"},"ListHeader":{"projects":9,"imports":10,"search":"ListHeader"},"List":{"projects":116,"imports":332,"search":"List"},"Link":{"projects":266,"imports":1340,"search":"Link"},"KeyboardFocusable":{"projects":3,"imports":3,"search":"KeyboardFocusable"},"IntlPhoneInput":{"projects":1,"imports":1,"search":"IntlPhoneInput"},"InternationalPhoneInput":{"projects":0,"imports":0,"search":"InternationalPhoneInput*"},"InputAutocomplete":{"projects":128,"imports":274,"search":"InputAutocomplete*"},"Input":{"projects":217,"imports":978,"search":"Input*"},"Indicator":{"projects":3,"imports":3,"search":"Indicator"},"IconView":{"projects":0,"imports":0,"search":"IconView"},"IconButton":{"projects":180,"imports":655,"search":"IconButton"},"HatchingProgressBar":{"projects":0,"imports":0,"search":"HatchingProgressBar"},"Grid":{"projects":141,"imports":1021,"search":"Grid"},"GenericWrapper":{"projects":19,"imports":74,"search":"GenericWrapper"},"Gap":{"projects":90,"imports":600,"search":"Gap"},"Gallery":{"projects":3,"imports":4,"search":"Gallery"},"FormControl":{"projects":5,"imports":8,"search":"FormControl*"},"FilterTag":{"projects":30,"imports":64,"search":"FilterTag*"},"FileUploadItem":{"projects":40,"imports":56,"search":"FileUploadItem"},"Dropzone":{"projects":20,"imports":26,"search":"Dropzone"},"Drawer":{"projects":36,"imports":47,"search":"Drawer"},"Divider":{"projects":93,"imports":316,"search":"Divider"},"DateTimeInput":{"projects":2,"imports":2,"search":"DateTimeInput*"},"DateRangeInput":{"projects":5,"imports":5,"search":"DateRangeInput*"},"DateInput":{"projects":24,"imports":30,"search":"DateInput"},"CustomPickerButton":{"projects":0,"imports":0,"search":"CustomPickerButton*"},"CustomButton":{"projects":8,"imports":13,"search":"CustomButton"},"Confirmation":{"projects":40,"imports":61,"search":"Confirmation*"},"ConfirmationV1":{"projects":4,"imports":4,"search":"ConfirmationV1"},"Comment":{"projects":1,"imports":1,"search":"Comment"},"Collapse":{"projects":117,"imports":246,"search":"Collapse"},"CodeInput":{"projects":5,"imports":5,"search":"CodeInput*"},"CircularProgressBar":{"projects":19,"imports":25,"search":"CircularProgressBar"},"CheckboxGroup":{"projects":49,"imports":85,"search":"CheckboxGroup*"},"Checkbox":{"projects":169,"imports":551,"search":"Checkbox"},"Chart":{"projects":1,"imports":1,"search":"Chart"},"CDNIcon":{"projects":19,"imports":97,"search":"CDNIcon"},"CardImage":{"projects":19,"imports":37,"search":"CardImage"},"CalendarWithSkeleton":{"projects":1,"imports":1,"search":"CalendarWithSkeleton"},"CalendarRange":{"projects":30,"imports":52,"search":"CalendarRange"},"CalendarInput":{"projects":96,"imports":177,"search":"CalendarInput*"},"Calendar":{"projects":16,"imports":31,"search":"Calendar*"},"Button":{"projects":348,"imports":4520,"search":"Button*"},"BottomSheet":{"projects":59,"imports":139,"search":"BottomSheet"},"BankCard":{"projects":2,"imports":2,"search":"BankCard"},"BaseModal":{"projects":9,"imports":13,"search":"BaseModal"},"Badge":{"projects":136,"imports":383,"search":"Badge"},"Backdrop":{"projects":8,"imports":8,"search":"Backdrop"},"AmountInput":{"projects":81,"imports":164,"search":"AmountInput"},"Attach":{"projects":42,"imports":52,"search":"Attach"},"Amount":{"projects":109,"imports":447,"search":"Amount"},"Alert":{"projects":99,"imports":345,"search":"Alert"},"ActionButton":{"projects":10,"imports":19,"search":"ActionButton"}}'),ComponentHeader_module_component="component_qx5zQ",ComponentHeader_module_title="title_vmrmp",ComponentHeader_module_titleMobile="titleMobile_RhdZ4",ComponentHeader_module_text="text_TIocB",ComponentHeader_module_info="info_iGRHP",ComponentHeader_module_commonLink="commonLink_WJRCZ",ComponentHeader_module_links="links_kuMT8",ComponentHeader_module_usageLink="usageLink_ilI5I",ComponentHeader_module_github="github_ks4z8",ComponentHeader_module_design="design_NpKuj",mq_modern=__webpack_require__("./dist/mq/modern/index.js"),ComponentHeader=function ComponentHeader(_ref){var _figmaLinks$name,_usages$name,_usages$name2,_usages$name3,_usages$name4,_usages$name5,_usages$name6,name=_ref.name,children=_ref.children,_useMatchMedia=(0,mq_modern.useMatchMedia)("--tablet-m"),isDesktop=(0,slicedToArray.Z)(_useMatchMedia,1)[0],packageName=name.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase(),githubLink="https://github.com/core-ds/core-components/tree/master/packages/".concat(packageName),designLink=null===(_figmaLinks$name=figma_links_namespaceObject[name])||void 0===_figmaLinks$name?void 0:_figmaLinks$name.figma,Title=isDesktop?typography_modern.Typography.Title:typography_modern.Typography.TitleMobile;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("sb-unstyled",ComponentHeader_module_component),children:[(0,jsx_runtime.jsx)(Title,{tag:"h1",view:"xlarge",className:classnames_default()(ComponentHeader_module_title,(0,defineProperty.Z)({},ComponentHeader_module_titleMobile,!isDesktop)),children:name}),children&&(0,jsx_runtime.jsx)(typography_modern.Typography.Text,{tag:"p",view:"primary-medium",className:ComponentHeader_module_text,children:children}),(0,jsx_runtime.jsxs)("div",{className:ComponentHeader_module_links,children:[designLink&&(0,jsx_runtime.jsx)("a",{className:classnames_default()(ComponentHeader_module_design,(0,defineProperty.Z)({},ComponentHeader_module_commonLink,!designLink)),href:designLink,target:"_blank",children:"Figma"}),(0,jsx_runtime.jsxs)("a",{className:ComponentHeader_module_github,href:githubLink,target:"_blank",children:[(0,jsx_runtime.jsx)(GithubIcon.E,{fill:"var(--color-light-graphic-primary)"}),"Github"]})]}),(0,jsx_runtime.jsx)(space_modern.Space,{direction:"horizontal",align:"center",className:ComponentHeader_module_info,children:(null===(_usages$name=usages_namespaceObject[name])||void 0===_usages$name?void 0:_usages$name.projects)>0&&(0,jsx_runtime.jsxs)(typography_modern.Typography.Text,{view:"primary-small",color:"secondary",children:["Используется в"," ",(0,jsx_runtime.jsxs)(modern.Link,{href:"http://design/design-system-usage/usage-chart?component=".concat(null===(_usages$name2=usages_namespaceObject[name])||void 0===_usages$name2?void 0:_usages$name2.search),target:"_blank",view:"secondary",underline:!1,title:"Необходимо подключение к VPN",className:ComponentHeader_module_usageLink,children:[null===(_usages$name3=usages_namespaceObject[name])||void 0===_usages$name3?void 0:_usages$name3.projects," ",(0,dist_esm._6)(null===(_usages$name4=usages_namespaceObject[name])||void 0===_usages$name4?void 0:_usages$name4.projects,"проекте","проектах","проектах")]})," и ","~",null===(_usages$name5=usages_namespaceObject[name])||void 0===_usages$name5?void 0:_usages$name5.imports," ",(0,dist_esm._6)(null===(_usages$name6=usages_namespaceObject[name])||void 0===_usages$name6?void 0:_usages$name6.imports,"файле","файлах","файлах")]})})]})};try{ComponentHeader.displayName="ComponentHeader",ComponentHeader.__docgenInfo={description:"",displayName:"ComponentHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"]={docgenInfo:ComponentHeader.__docgenInfo,name:"ComponentHeader",path:".storybook/blocks/component-header/ComponentHeader.tsx#ComponentHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./.storybook/blocks/grid/index.ts");var tabs_modern=__webpack_require__("./dist/tabs/modern/index.js"),tabs_index_module_tabs="tabs_BRA6G",TabName=function(TabName){return TabName.DESCRIPTION="DESCRIPTION",TabName.PROPS="PROPS",TabName.CSS_VARS="CSS_VARS",TabName.CHANGELOG="CHANGELOG",TabName.DEVELOPMENT="DEVELOPMENT",TabName}(TabName||{}),TabTitle=(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},TabName.DESCRIPTION,"Описание"),TabName.PROPS,"Свойства"),TabName.CSS_VARS,"CSS-переменные"),TabName.CHANGELOG,"Обновления"),TabName.DEVELOPMENT,"Разработчику"),Tabs=function Tabs(_ref){var description=_ref.description,props=_ref.props,cssVars=_ref.cssVars,changelog=_ref.changelog,_ref$defaultSelected=_ref.defaultSelected,defaultSelected=void 0===_ref$defaultSelected?TabName.DESCRIPTION:_ref$defaultSelected,development=_ref.development,_useState=(0,react.useState)(defaultSelected),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],handleChange=(0,react.useCallback)((function(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)}),[]),tabs=(0,react.useMemo)((function(){return function renderTabs(){return[(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DESCRIPTION],id:TabName.DESCRIPTION,children:description},"description"),props?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.PROPS],id:TabName.PROPS,children:props},"props"):null,cssVars?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CSS_VARS],id:TabName.CSS_VARS,children:cssVars},"css-vars"):null,development?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.DEVELOPMENT],id:TabName.DEVELOPMENT,children:development},"development"):null,changelog?(0,jsx_runtime.jsx)(tabs_modern.Tab,{title:TabTitle[TabName.CHANGELOG],id:TabName.CHANGELOG,children:(0,jsx_runtime.jsx)("div",{style:{marginTop:"32px"},children:(0,jsx_runtime.jsx)(Changelog,{content:changelog})})},"changelog"):null].filter(react.isValidElement)}()}),[description,props,cssVars]);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:"sb-unstyled",selectedId:selected,onChange:handleChange,containerClassName:tabs_index_module_tabs,children:tabs})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"ReactNode"}},cssVars:{defaultValue:null,description:"",name:"cssVars",required:!1,type:{name:"ReactNode"}},changelog:{defaultValue:null,description:"",name:"changelog",required:!1,type:{name:"string"}},defaultSelected:{defaultValue:{value:"TabName.DESCRIPTION"},description:"",name:"defaultSelected",required:!1,type:{name:"enum",value:[{value:'"DESCRIPTION"'},{value:'"PROPS"'},{value:'"CSS_VARS"'},{value:'"CHANGELOG"'},{value:'"DEVELOPMENT"'}]}},development:{defaultValue:null,description:"",name:"development",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/tabs/component.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:".storybook/blocks/tabs/component.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),args_tabs_index_module_tabsTypes="tabsTypes_QEaxU",args_tabs_index_module_error="error_EECcc",ArgsTabs=function ArgsTabs(_ref){var components=_ref.components,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],keys=Object.keys(components);return(0,jsx_runtime.jsx)(tabs_modern.Tabs,{className:classnames_default()(args_tabs_index_module_tabsTypes,"sb-unstyled"),selectedId:selected,onChange:function handleChange(_,_ref2){var selectedId=_ref2.selectedId;setSelected(selectedId)},view:"secondary",size:"xxs",scrollable:!0,children:keys.map((function(key,index){return(0,jsx_runtime.jsx)(tabs_modern.Tab,{id:index,title:key,children:components[key]?(0,jsx_runtime.jsx)(dist.Ed,{of:components[key]}):(0,jsx_runtime.jsx)("div",{className:args_tabs_index_module_error,children:"Что-то пошло не так "})},key)}))})};try{ArgsTabs.displayName="ArgsTabs",ArgsTabs.__docgenInfo={description:"",displayName:"ArgsTabs",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Record<string, ReactNode>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/blocks/args-tabs/component.tsx#ArgsTabs"]={docgenInfo:ArgsTabs.__docgenInfo,name:"ArgsTabs",path:".storybook/blocks/args-tabs/component.tsx#ArgsTabs"})}catch(__react_docgen_typescript_loader_error){}}}]);