(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[459],{

/***/ 9803:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/login",
      function () {
        return __webpack_require__(1965);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7208:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5271);


const Logo = (param)=>{
    let { expanded = true } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ".concat(expanded ? "text-3xl" : "text-2xl"),
        children: expanded ? "Project-Aδ" : "Aδ"
    });
};
/* harmony default export */ __webpack_exports__.Z = (Logo);


/***/ }),

/***/ 6883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ Button; }
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5271);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1557);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1814);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "text-foreground border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 1232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: function() { return /* binding */ CardHeader; },
/* harmony export */   SZ: function() { return /* binding */ CardDescription; },
/* harmony export */   Zb: function() { return /* binding */ Card; },
/* harmony export */   aY: function() { return /* binding */ CardContent; },
/* harmony export */   ll: function() { return /* binding */ CardTitle; }
/* harmony export */ });
/* unused harmony export CardFooter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5271);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1814);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-[calc(var(--radius))] border-border border bg-card text-card-foreground shadow", className),
        ...props
    });
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    });
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-semibold leading-none tracking-tight", className),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    });
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    });
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    });
});
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 8927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SP: function() { return /* binding */ TabsTrigger; },
/* harmony export */   dr: function() { return /* binding */ TabsList; },
/* harmony export */   mQ: function() { return /* binding */ Tabs; },
/* harmony export */   nU: function() { return /* binding */ TabsContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5271);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1321);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1814);




const Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
        ...props
    });
});
TabsList.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV.displayName;
const TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
        ...props
    });
});
TabsTrigger.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    });
});
TabsContent.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



/***/ }),

/***/ 1965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AuthPage; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2676);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(5271);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/router.js
var next_router = __webpack_require__(3461);
// EXTERNAL MODULE: ./node_modules/.pnpm/firebase@10.14.1/node_modules/firebase/auth/dist/esm/index.esm.js + 1 modules
var index_esm = __webpack_require__(6416);
// EXTERNAL MODULE: ./node_modules/.pnpm/firebase@10.14.1/node_modules/firebase/app/dist/esm/index.esm.js
var esm_index_esm = __webpack_require__(1839);
;// CONCATENATED MODULE: ./src/lib/firebase.ts


const firebaseConfig = {
    apiKey: "AIzaSyCjJOQrqR3Z9FOQKwFryzzrRtwHOdLdTkg",
    authDomain: "AIzaSyCjJOQrqR3Z9FOQKwFryzzrRtwHOdLdTkg",
    databaseURL: "https://project-adelta-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-adelta",
    storageBucket: "project-adelta.firebasestorage.app",
    messagingSenderId: "182333153282",
    appId: "1:182333153282:web:a3bdbc8eec0844b21d071b"
};
// Initialize Firebase
const app = (0,esm_index_esm/* initializeApp */.ZF)(firebaseConfig);
const auth = (0,index_esm/* getAuth */.v0)(app);
/* harmony default export */ var firebase = ((/* unused pure expression or super */ null && (app)));

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/lib/utils.ts + 2 modules
var utils = __webpack_require__(1814);
;// CONCATENATED MODULE: ./src/components/ui/input.tsx



const Input = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
        type: type,
        className: (0,utils.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(1232);
// EXTERNAL MODULE: ./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs + 1 modules
var dist = __webpack_require__(2808);
;// CONCATENATED MODULE: ./src/components/ui/alert.tsx




const alertVariants = (0,dist/* cva */.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        role: "alert",
        className: (0,utils.cn)(alertVariants({
            variant
        }), className),
        ...props
    });
});
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h5", {
        ref: ref,
        className: (0,utils.cn)("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    });
});
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("text-sm [&_p]:leading-relaxed", className),
        ...props
    });
});
AlertDescription.displayName = "AlertDescription";


// EXTERNAL MODULE: ./src/components/ui/tabs.tsx
var tabs = __webpack_require__(8927);
// EXTERNAL MODULE: ./src/components/Logo.tsx
var Logo = __webpack_require__(7208);
;// CONCATENATED MODULE: ./src/pages/login.tsx











function AuthPage() {
    const [email, setEmail] = (0,react.useState)("");
    const [password, setPassword] = (0,react.useState)("");
    const [error, setError] = (0,react.useState)("");
    const [loading, setLoading] = (0,react.useState)(false);
    const router = (0,next_router.useRouter)();
    const handleEmailAuth = async (e, isLogin)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            if (isLogin) {
                await (0,index_esm/* signInWithEmailAndPassword */.e5)(auth, email, password);
            } else {
                await (0,index_esm/* createUserWithEmailAndPassword */.Xb)(auth, email, password);
            }
            router.push("/dashboard");
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    };
    const handleGoogleLogin = async ()=>{
        setLoading(true);
        setError("");
        try {
            const provider = new index_esm/* GoogleAuthProvider */.hJ();
            await (0,index_esm/* signInWithPopup */.rh)(auth, provider);
            router.push("/dashboard");
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    };
    const AuthForm = (param)=>{
        let { isLogin } = param;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            onSubmit: (e)=>handleEmailAuth(e, isLogin),
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "space-y-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                        type: "email",
                        placeholder: "Email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        disabled: loading,
                        required: true,
                        className: "bg-zinc-900/50 border-zinc-800 focus:border-purple-500"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "space-y-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                        type: "password",
                        placeholder: "Password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        disabled: loading,
                        required: true,
                        className: "bg-zinc-900/50 border-zinc-800 focus:border-purple-500"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                    type: "submit",
                    className: "w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white",
                    disabled: loading,
                    children: loading ? "Processing..." : isLogin ? "Sign in" : "Sign up"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "min-h-screen flex items-center justify-center bg-black bg-[radial-gradient(circle_at_center,_rgba(67,26,107,0.15)_0%,_rgba(0,0,0,0.15)_100%)] p-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
            className: "w-full max-w-md bg-black/40 backdrop-blur-sm supports-[backdrop-filter]:bg-black/40 border-zinc-800",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {
                                expanded: false
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                            className: "text-2xl font-bold text-center",
                            children: "Aδ"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                            className: "text-center",
                            children: "Your AI-powered email template assistant"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                    children: [
                        error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert, {
                            variant: "destructive",
                            className: "mb-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertDescription, {
                                children: error
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                            defaultValue: "login",
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                                    className: "grid w-full grid-cols-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                            value: "login",
                                            children: "Login"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                            value: "signup",
                                            children: "Sign up"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                                    value: "login",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthForm, {
                                        isLogin: true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                                    value: "signup",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthForm, {
                                        isLogin: false
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative my-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-full border-t border-gray-600"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "relative flex justify-center text-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "px-2 bg-card text-muted-foreground",
                                        children: "Or continue with"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                            type: "button",
                            variant: "outline",
                            className: "w-full",
                            onClick: handleGoogleLogin,
                            disabled: loading,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    className: "w-5 h-5 mr-2",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        })
                                    ]
                                }),
                                "Continue with Google"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [566,221,888,774,179], function() { return __webpack_exec__(9803); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);