"use strict";(self.webpackChunkjustice40_tool=self.webpackChunkjustice40_tool||[]).push([[548],{75990:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ public_engagement; }\n});\n\n// EXTERNAL MODULE: ./node_modules/gatsby-plugin-intl/index.js\nvar gatsby_plugin_intl = __webpack_require__(23218);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(96540);\n// EXTERNAL MODULE: ./src/components/J40MainGridContainer.tsx\nvar J40MainGridContainer = __webpack_require__(21481);\n// EXTERNAL MODULE: ./src/components/layout.tsx + 18 modules\nvar layout = __webpack_require__(5420);\n// EXTERNAL MODULE: ./src/data/constants.tsx\nvar constants = __webpack_require__(4328);\n// EXTERNAL MODULE: ./src/data/copy/common.tsx + 3 modules\nvar common = __webpack_require__(5635);\n;// ./src/data/copy/publicEngage.tsx\n/* eslint-disable max-len */const PAGE_TITLE=(0,gatsby_plugin_intl.defineMessages)({REDIRECT_TITLE:{id:'public.eng.page.redirect.title',defaultMessage:'Public engagement',description:'Navigate to the public engagement page. This is the redirect title.'}});const REDIRECT_TEXT=/*#__PURE__*/react.createElement(gatsby_plugin_intl.FormattedMessage,{id:'public.eng.page.redirect.text',defaultMessage:'The public engagement content has moved to the <link1>Previous Version</link1> page. <link1>Click here</link1> if you are not redirected after 5 seconds.',description:`Navigate to the public engagement page. This is the redirect message.`,values:{link1:(0,common/* linkFn */.rF)(constants/* PAGES_ENDPOINTS */.ken.PREVIOUS_VERSIONS,true,false)}});\n;// ./src/pages/public-engagement.tsx\nconst PublicEngagementPage=_ref=>{let{location}=_ref;const intl=(0,gatsby_plugin_intl.useIntl)();// Gatsby does not support redirection for AWS S3, so we do it here.\n(0,react.useEffect)(()=>{// Gatsby does not support window during the build, so we check first before we use it.\nconst isInBrowser=()=>typeof window!==undefined;if(isInBrowser()){const targetUrl=window.location.pathname.replace(constants/* PAGES_ENDPOINTS */.ken.PUBLIC_ENG,constants/* PAGES_ENDPOINTS */.ken.PREVIOUS_VERSIONS);setTimeout(()=>{window.location.replace(targetUrl);},5000);}},[]);return/*#__PURE__*/react.createElement(layout/* default */.A,{location:location,title:intl.formatMessage(PAGE_TITLE.REDIRECT_TITLE)},/*#__PURE__*/react.createElement(J40MainGridContainer/* default */.A,null,/*#__PURE__*/react.createElement(\"div\",null,REDIRECT_TEXT)));};/* harmony default export */ var public_engagement = (PublicEngagementPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzU5OTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBTU8sS0FBTSxDQUFBSyxVQUFVLENBQUdILHFDQUFjLENBQUMsQ0FDdkNJLGNBQWMsQ0FBRSxDQUNkQyxFQUFFLENBQUUsZ0NBQWdDLENBQ3BDQyxjQUFjLENBQUUsbUJBQW1CLENBQ25DQyxXQUFXLENBQUUscUVBQ2YsQ0FDRixDQUFDLENBQUMsQ0FFSyxLQUFNLENBQUFDLGFBQWEsY0FDMUJWLG1CQUFBLENBQUNDLG1DQUFnQixFQUNmTSxFQUFFLENBQUUsK0JBQWdDLENBQ3BDQyxjQUFjLENBQUUsMkpBQTRKLENBQzVLQyxXQUFXLENBQUUsdUVBQXdFLENBQ3JGRyxNQUFNLENBQUUsQ0FDTkMsS0FBSyxDQUFFVCx5QkFBTSxDQUFDRCxrQ0FBZSxDQUFDVyxpQkFBaUIsQ0FBRSxJQUFJLENBQUUsS0FBSyxDQUM5RCxDQUFFLENBQ0gsQ0FBQyxDOztBQ1ZGLEtBQU0sQ0FBQU0sb0JBQW9CLENBQUdDLElBQUEsRUFBNEMsSUFBM0MsQ0FBQ0MsUUFBb0MsQ0FBQyxDQUFBRCxJQUFBLENBQ2xFLEtBQU0sQ0FBQUUsSUFBSSxDQUFHUiw4QkFBTyxDQUFDLENBQUMsQ0FFdEI7QUFDQUMsbUJBQVMsQ0FBQyxJQUFNLENBQ2Q7QUFDQSxLQUFNLENBQUFRLFdBQVcsQ0FBR0EsQ0FBQSxHQUFNLE1BQU8sQ0FBQUMsTUFBTSxHQUFLQyxTQUFTLENBQ3JELEdBQUlGLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FDakIsS0FBTSxDQUFBRyxTQUFTLENBQUdGLE1BQU0sQ0FBQ0gsUUFBUSxDQUFDTSxRQUFRLENBQUNDLE9BQU8sQ0FBQzFCLGtDQUFlLENBQUMyQixVQUFVLENBQUUzQixrQ0FBZSxDQUFDVyxpQkFBaUIsQ0FBQyxDQUNqSGlCLFVBQVUsQ0FBQyxJQUFNLENBQ2ZOLE1BQU0sQ0FBQ0gsUUFBUSxDQUFDTyxPQUFPLENBQUNGLFNBQVMsQ0FBQyxDQUNwQyxDQUFDLENBQUUsSUFBSSxDQUFDLENBQ1YsQ0FDRixDQUFDLENBQUUsRUFBRSxDQUFDLENBRU4sbUJBQ0UzQixtQkFBQSxDQUFDa0IscUJBQU0sRUFBQ0ksUUFBUSxDQUFFQSxRQUFTLENBQUNVLEtBQUssQ0FBRVQsSUFBSSxDQUFDVSxhQUFhLENBQUNkLFVBQTBCLENBQUNiLGNBQWMsQ0FBRSxlQUMvRk4sbUJBQUEsQ0FBQ2lCLG1DQUFvQixtQkFDbkJqQixtQkFBQSxZQUNHbUIsYUFDRSxDQUNlLENBQ2hCLENBQUMsQ0FFYixDQUFDLENBRUQsc0RBQWVDLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3RpY2U0MC10b29sLy4vc3JjL2RhdGEvY29weS9wdWJsaWNFbmdhZ2UudHN4PzllYjYiLCJ3ZWJwYWNrOi8vanVzdGljZTQwLXRvb2wvLi9zcmMvcGFnZXMvcHVibGljLWVuZ2FnZW1lbnQudHN4Pzk0MTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgZGVmaW5lTWVzc2FnZXN9IGZyb20gJ2dhdHNieS1wbHVnaW4taW50bCc7XG5pbXBvcnQge1BBR0VTX0VORFBPSU5UU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7bGlua0ZufSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBQQUdFX1RJVExFID0gZGVmaW5lTWVzc2FnZXMoe1xuICBSRURJUkVDVF9USVRMRToge1xuICAgIGlkOiAncHVibGljLmVuZy5wYWdlLnJlZGlyZWN0LnRpdGxlJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1B1YmxpYyBlbmdhZ2VtZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ05hdmlnYXRlIHRvIHRoZSBwdWJsaWMgZW5nYWdlbWVudCBwYWdlLiBUaGlzIGlzIHRoZSByZWRpcmVjdCB0aXRsZS4nLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBSRURJUkVDVF9URVhUID1cbjxGb3JtYXR0ZWRNZXNzYWdlXG4gIGlkPXsncHVibGljLmVuZy5wYWdlLnJlZGlyZWN0LnRleHQnfVxuICBkZWZhdWx0TWVzc2FnZT17J1RoZSBwdWJsaWMgZW5nYWdlbWVudCBjb250ZW50IGhhcyBtb3ZlZCB0byB0aGUgPGxpbmsxPlByZXZpb3VzIFZlcnNpb248L2xpbmsxPiBwYWdlLiA8bGluazE+Q2xpY2sgaGVyZTwvbGluazE+IGlmIHlvdSBhcmUgbm90IHJlZGlyZWN0ZWQgYWZ0ZXIgNSBzZWNvbmRzLid9XG4gIGRlc2NyaXB0aW9uPXtgTmF2aWdhdGUgdG8gdGhlIHB1YmxpYyBlbmdhZ2VtZW50IHBhZ2UuIFRoaXMgaXMgdGhlIHJlZGlyZWN0IG1lc3NhZ2UuYH1cbiAgdmFsdWVzPXt7XG4gICAgbGluazE6IGxpbmtGbihQQUdFU19FTkRQT0lOVFMuUFJFVklPVVNfVkVSU0lPTlMsIHRydWUsIGZhbHNlKSxcbiAgfX1cbi8+O1xuIiwiaW1wb3J0IHt1c2VJbnRsfSBmcm9tICdnYXRzYnktcGx1Z2luLWludGwnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBKNDBNYWluR3JpZENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0o0ME1haW5HcmlkQ29udGFpbmVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHtQQUdFU19FTkRQT0lOVFN9IGZyb20gJy4uL2RhdGEvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFBVQkxJQ19FTkdfQ09QWSBmcm9tICcuLi9kYXRhL2NvcHkvcHVibGljRW5nYWdlJztcblxuaW50ZXJmYWNlIElQdWJsaWNFbmdhZ2VtZW50UGFnZVByb3BzIHtcbiAgbG9jYXRpb246IExvY2F0aW9uO1xufVxuXG5jb25zdCBQdWJsaWNFbmdhZ2VtZW50UGFnZSA9ICh7bG9jYXRpb259OiBJUHVibGljRW5nYWdlbWVudFBhZ2VQcm9wcykgPT4ge1xuICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuXG4gIC8vIEdhdHNieSBkb2VzIG5vdCBzdXBwb3J0IHJlZGlyZWN0aW9uIGZvciBBV1MgUzMsIHNvIHdlIGRvIGl0IGhlcmUuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gR2F0c2J5IGRvZXMgbm90IHN1cHBvcnQgd2luZG93IGR1cmluZyB0aGUgYnVpbGQsIHNvIHdlIGNoZWNrIGZpcnN0IGJlZm9yZSB3ZSB1c2UgaXQuXG4gICAgY29uc3QgaXNJbkJyb3dzZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzSW5Ccm93c2VyKCkpIHtcbiAgICAgIGNvbnN0IHRhcmdldFVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFBBR0VTX0VORFBPSU5UUy5QVUJMSUNfRU5HLCBQQUdFU19FTkRQT0lOVFMuUFJFVklPVVNfVkVSU0lPTlMpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHRhcmdldFVybCk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbG9jYXRpb249e2xvY2F0aW9ufSB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKFBVQkxJQ19FTkdfQ09QWS5QQUdFX1RJVExFLlJFRElSRUNUX1RJVExFKX0+XG4gICAgICA8SjQwTWFpbkdyaWRDb250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1BVQkxJQ19FTkdfQ09QWS5SRURJUkVDVF9URVhUfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSjQwTWFpbkdyaWRDb250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNFbmdhZ2VtZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1hdHRlZE1lc3NhZ2UiLCJkZWZpbmVNZXNzYWdlcyIsIlBBR0VTX0VORFBPSU5UUyIsImxpbmtGbiIsIlBBR0VfVElUTEUiLCJSRURJUkVDVF9USVRMRSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIlJFRElSRUNUX1RFWFQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWVzIiwibGluazEiLCJQUkVWSU9VU19WRVJTSU9OUyIsInVzZUludGwiLCJ1c2VFZmZlY3QiLCJKNDBNYWluR3JpZENvbnRhaW5lciIsIkxheW91dCIsIlBVQkxJQ19FTkdfQ09QWSIsIlB1YmxpY0VuZ2FnZW1lbnRQYWdlIiwiX3JlZiIsImxvY2F0aW9uIiwiaW50bCIsImlzSW5Ccm93c2VyIiwid2luZG93IiwidW5kZWZpbmVkIiwidGFyZ2V0VXJsIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiUFVCTElDX0VORyIsInNldFRpbWVvdXQiLCJ0aXRsZSIsImZvcm1hdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///75990\n")}}]);