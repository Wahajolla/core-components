"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2759],{"./packages/gallery/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},gallery:function(){return gallery}});var _gallery$parameters,_gallery$parameters2,_gallery$parameters2$,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_gallery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/gallery/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Gallery",component:_alfalab_core_components_gallery__WEBPACK_IMPORTED_MODULE_3__.Gallery,id:"Gallery"},gallery={name:"Gallery",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),openMultiple=_React$useState2[0],setOpenMultiple=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState3,2),open=_React$useState4[0],setOpen=_React$useState4[1],previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles"));return Object.keys(previewStyles).length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:previewStyles,children:[{src:"./images/gallery_1.jpg"},{src:"./images/gallery_2.jpg"},{src:"./images/gallery_3.jpg"}].map((function(image,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{width:"190px",height:"190px",backgroundSize:"cover",backgroundImage:"url(".concat(image.src,")"),marginRight:2!==index&&"8px",borderRadius:"12px"}},image.src)}))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{width:"100%",height:"calc(100vh - 50px)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{margin:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{view:"primary",onClick:function onClick(){setOpenMultiple(!0)},id:"open-gallery-button",children:"Открыть галерею"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{margin:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{view:"primary",onClick:function onClick(){setOpen(!0)},id:"open-single-gallery-button",children:"Открыть галерею с одним изображением"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_gallery__WEBPACK_IMPORTED_MODULE_3__.Gallery,{open:openMultiple,onClose:function onClose(){setOpenMultiple(!1)},images:[{name:"Горизонтальное изображение.jpg",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo="},{name:"Вертикальное изображение.jpg",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCA1MDAgMTAwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo="},{name:"Маленькое изображение.jpg",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo="},{name:"Битое изображение.jpg",src:"data:image/svg+xml;base64,"}],loop:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("loop",!0)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_gallery__WEBPACK_IMPORTED_MODULE_3__.Gallery,{open:open,onClose:function onClose(){setOpen(!1)},images:[{name:"Горизонтальное изображение.jpg",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo="}],loop:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("loop",!0)})]})}};__webpack_exports__.default=meta,gallery.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},gallery.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_gallery$parameters=gallery.parameters)||void 0===_gallery$parameters?void 0:_gallery$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'Gallery',\n  render: () => {\n    const [openMultiple, setOpenMultiple] = React.useState(false);\n    const [open, setOpen] = React.useState(false);\n    const images = [{\n      src: './images/gallery_1.jpg'\n    }, {\n      src: './images/gallery_2.jpg'\n    }, {\n      src: './images/gallery_3.jpg'\n    }];\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return isPreview ? <div style={previewStyles}>\n                {images.map((image, index) => <div key={image.src} style={{\n        width: '190px',\n        height: '190px',\n        backgroundSize: 'cover',\n        backgroundImage: `url(${image.src})`,\n        marginRight: index !== 2 && '8px',\n        borderRadius: '12px'\n      }} />)}\n            </div> : <div style={{\n      width: '100%',\n      height: 'calc(100vh - 50px)'\n    }}>\n                <div style={{\n        margin: '24px'\n      }}>\n                    <Button view='primary' onClick={() => {\n          setOpenMultiple(true);\n        }} id='open-gallery-button'>\n                        Открыть галерею\n                    </Button>\n                </div>\n                <div style={{\n        margin: '24px'\n      }}>\n                    <Button view='primary' onClick={() => {\n          setOpen(true);\n        }} id='open-single-gallery-button'>\n                        Открыть галерею с одним изображением\n                    </Button>\n                </div>\n                <Gallery open={openMultiple} onClose={() => {\n        setOpenMultiple(false);\n      }} images={[{\n        name: 'Горизонтальное изображение.jpg',\n        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo='\n      }, {\n        name: 'Вертикальное изображение.jpg',\n        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCA1MDAgMTAwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo='\n      }, {\n        name: 'Маленькое изображение.jpg',\n        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo='\n      }, {\n        name: 'Битое изображение.jpg',\n        src: 'data:image/svg+xml;base64,'\n      }]} loop={boolean('loop', true)} />\n                <Gallery open={open} onClose={() => {\n        setOpen(false);\n      }} images={[{\n        name: 'Горизонтальное изображение.jpg',\n        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNDU0Nzc4Ii8+Cjwvc3ZnPgo='\n      }]} loop={boolean('loop', true)} />\n            </div>;\n  }\n}"},null===(_gallery$parameters2=gallery.parameters)||void 0===_gallery$parameters2||null===(_gallery$parameters2$=_gallery$parameters2.docs)||void 0===_gallery$parameters2$?void 0:_gallery$parameters2$.source)})});var __namedExportsOrder=["gallery"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function getQueryParam(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function parseKnobs(){return Object.entries(queryParams).reduce((function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc}),{})};function parseValue(value){if(value){if(function isBoolean(){return["true","false"].includes(value)}())return"true"===value;if(function isNumeric(){return!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value))}())return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map((function(v){return v.trim()})),obj={};return properties.forEach((function(property){var _property$split$map=property.split(":").map((function(v){return v.trim()})),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val})),obj}function isJsonObj(str){try{return"object"==typeof JSON.parse(str)}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);