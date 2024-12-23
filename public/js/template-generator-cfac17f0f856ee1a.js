(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[674],{

/***/ 757:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/template-generator",
      function () {
        return __webpack_require__(6332);
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

/***/ 6332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TemplateGenerator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2676);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(5271);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(6883);
// EXTERNAL MODULE: ./src/lib/utils.ts + 2 modules
var utils = __webpack_require__(1814);
;// CONCATENATED MODULE: ./src/components/ui/textarea.tsx



const Textarea = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
        className: (0,utils.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


// EXTERNAL MODULE: ./src/components/ui/card.tsx
var card = __webpack_require__(1232);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js
var next_link = __webpack_require__(6373);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/router.js
var next_router = __webpack_require__(3461);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(9380);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
var layout_dashboard = __webpack_require__(6448);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/log-out.js
var log_out = __webpack_require__(5063);
// EXTERNAL MODULE: ./src/components/Logo.tsx
var Logo = __webpack_require__(7208);
;// CONCATENATED MODULE: ./src/components/Sidebar.tsx








function Sidebar() {
    const [expanded, setExpanded] = (0,react.useState)(false);
    const router = (0,next_router.useRouter)();
    const menuItems = [
        {
            href: "/template-generator",
            icon: mail/* default */.Z,
            label: "Email Templates"
        },
        {
            href: "/dashboard",
            icon: layout_dashboard/* default */.Z,
            label: "Dashboard"
        },
        {
            href: "/settings",
            icon: settings/* default */.Z,
            label: "Settings"
        }
    ];
    const handleLogout = ()=>{
        router.push("../public/login.html");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("h-screen fixed left-0 top-0 z-40 flex flex-col border-r bg-background transition-all duration-300", expanded ? "w-64" : "w-16"),
        onMouseEnter: ()=>setExpanded(true),
        onMouseLeave: ()=>setExpanded(false),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "p-4 border-b",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {
                    expanded: expanded
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 py-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                    className: "space-y-2 px-2",
                    children: menuItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: item.href,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                variant: "ghost",
                                className: (0,utils.cn)("w-full justify-start", !expanded && "justify-center"),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                        className: "h-5 w-5"
                                    }),
                                    expanded && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "ml-2",
                                        children: item.label
                                    })
                                ]
                            })
                        }, item.href))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                    variant: "ghost",
                    className: (0,utils.cn)("w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100/10", !expanded && "justify-center"),
                    onClick: handleLogout,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(log_out/* default */.Z, {
                            className: "h-5 w-5"
                        }),
                        expanded && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "ml-2",
                            children: "Logout"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(5943);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/sun.js
var sun = __webpack_require__(3383);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/moon.js
var moon = __webpack_require__(8632);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var rotate_ccw = __webpack_require__(555);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/minimize-2.js
var minimize_2 = __webpack_require__(7128);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/maximize-2.js
var maximize_2 = __webpack_require__(8022);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.451.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/send.js
var send = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/lib/emailTemplate.ts
const generateUniversityTemplate = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { isDarkMode = false, subject = "Project Structure Details", content = "I hope this email finds you well.\n\nI wanted to share an overview of the project structure we are working on and seek your feedback or suggestions. Here's a brief outline:\n\n- **`src` Directory**: Contains all code files related to the project.\n- **`public` Directory**: Includes `components`, `Resources`, and `template_designer.js`.\n   - **Resources/templates**: Houses the `AmpTemplate.html` file, which is central to the email template functionality.\n   - **Components**: All reusable React components are organized here.\n- **`template_designer.js`**: Script that drives the email template customization functionality.\n\nThis structure is designed to ensure clarity and maintainability, especially as we expand functionality. If you have any suggestions or improvements in mind, I'd be happy to discuss and incorporate them.\n\nLooking forward to your inputs!", senderName = "Dhanush S R Kenkiri", senderTitle = "Student", department = "School of Computer and Information Sciences" } = options;
    const backgroundColor = isDarkMode ? "#1a1a1a" : "#ffffff";
    const textColor = isDarkMode ? "#ffffff" : "#000000";
    const accentColor = isDarkMode ? "#4a5568" : "#e2e8f0";
    const borderColor = isDarkMode ? "#2d3748" : "#cbd5e0";
    const logoUrl = "https://assets.co.dev/778632a8-4ae4-4fae-8c3c-ef3494ff8f34/university_of_hyderabad_logo-bb5cfbd.png";
    return '\n    <mjml>\n      <mj-head>\n        <mj-attributes>\n          <mj-all font-family="Arial, sans-serif" />\n          <mj-text font-size="14px" color="'.concat(textColor, '" />\n        </mj-attributes>\n        <mj-style>\n          .content-wrapper {\n            background-image: url(').concat(logoUrl, ');\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: 50%;\n            background-blend-mode: overlay;\n            opacity: 0.1;\n          }\n        </mj-style>\n      </mj-head>\n      <mj-body background-color="').concat(backgroundColor, '">\n        <!-- Header -->\n        <mj-section padding="20px" border-bottom="2px solid ').concat(borderColor, '">\n          <mj-column width="30%">\n            <mj-image src="').concat(logoUrl, '" width="100px" align="left" />\n          </mj-column>\n          <mj-column width="70%">\n            <mj-text font-size="20px" font-weight="bold" align="right" color="').concat(textColor, '">\n              University of Hyderabad\n            </mj-text>\n            <mj-text font-size="12px" align="right" color="').concat(isDarkMode ? "#a0aec0" : "#718096", '">\n              Excellence in Higher Education\n            </mj-text>\n          </mj-column>\n        </mj-section>\n\n        <!-- Main Content with Watermark -->\n        <mj-wrapper css-class="content-wrapper" padding="0">\n          <mj-section background-color="').concat(isDarkMode ? "#2d3748" : "#f7fafc", '" padding="30px" border-radius="8px">\n            <mj-column>\n              <mj-text font-size="24px" font-weight="bold" align="center" padding-bottom="20px">\n                ').concat(subject, '\n              </mj-text>\n              <mj-divider border-color="').concat(borderColor, '" />\n              <mj-text padding="20px 0" line-height="1.6">\n                ').concat(content, '\n              </mj-text>\n            </mj-column>\n          </mj-section>\n        </mj-wrapper>\n\n        <!-- Signature -->\n        <mj-section padding-top="20px">\n          <mj-column>\n            <mj-text font-weight="bold" color="').concat(textColor, '">\n              Best regards,\n            </mj-text>\n            <mj-text font-weight="bold" color="').concat(textColor, '">\n              ').concat(senderName, '\n            </mj-text>\n            <mj-text font-style="italic" font-size="12px" color="').concat(textColor, '">\n              ').concat(senderTitle, '\n            </mj-text>\n            <mj-text font-size="12px" color="').concat(textColor, '">\n              ').concat(department, '\n            </mj-text>\n          </mj-column>\n        </mj-section>\n\n        <!-- Footer -->\n        <mj-section padding-top="20px" border-top="1px solid ').concat(borderColor, '">\n          <mj-column>\n            <mj-text align="center" font-size="12px" color="').concat(isDarkMode ? "#a0aec0" : "#718096", '">\n              University of Hyderabad<br/>\n              Prof. C.R. Rao Road, Gachibowli, Hyderabad - 500046<br/>\n              Tel: +91-40-23130000 | www.uohyd.ac.in<br/>\n              \xa9 ').concat(new Date().getFullYear(), " All Rights Reserved\n            </mj-text>\n          </mj-column>\n        </mj-section>\n      </mj-body>\n    </mjml>\n  ");
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-switch@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.mjs + 2 modules
var dist = __webpack_require__(2166);
;// CONCATENATED MODULE: ./src/components/ui/switch.tsx




const Switch = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Root */.fC, {
        className: (0,utils.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Thumb */.bU, {
            className: (0,utils.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
        })
    });
});
Switch.displayName = dist/* Root */.fC.displayName;


;// CONCATENATED MODULE: ./src/pages/template-generator.tsx










function TemplateGenerator() {
    const [prompt, setPrompt] = (0,react.useState)("");
    const [previousPrompt, setPreviousPrompt] = (0,react.useState)("");
    const [generatedTemplate, setGeneratedTemplate] = (0,react.useState)("");
    const [isGenerated, setIsGenerated] = (0,react.useState)(false);
    const [chatMessages, setChatMessages] = (0,react.useState)([]);
    const [isChatExpanded, setIsChatExpanded] = (0,react.useState)(false);
    const [currentMessage, setCurrentMessage] = (0,react.useState)("");
    const [isDarkMode, setIsDarkMode] = (0,react.useState)(false);
    const handleGenerate = async ()=>{
        if (!prompt.trim()) return;
        setPreviousPrompt(prompt);
        setIsGenerated(true);
        // Add user message to chat
        setChatMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: prompt
                }
            ]);
        // Generate email template using MJML
        const template = generateUniversityTemplate({
            isDarkMode,
            subject: "University Announcement",
            content: prompt,
            senderName: "Dr. John Doe",
            senderTitle: "Department Head",
            department: "Computer Science"
        });
        setGeneratedTemplate(template);
        // Add AI response to chat
        setChatMessages((prev)=>[
                ...prev,
                {
                    role: "assistant",
                    content: "I've generated an email template based on your request. Would you like to make any adjustments?"
                }
            ]);
        setPrompt("");
    };
    const handleRevert = ()=>{
        setPrompt(previousPrompt);
        setIsGenerated(false);
        setGeneratedTemplate("");
        setChatMessages([]);
    };
    const toggleChatExpansion = ()=>{
        setIsChatExpanded(!isChatExpanded);
    };
    const handleSendMessage = ()=>{
        if (!currentMessage.trim()) return;
        setChatMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: currentMessage
                }
            ]);
        // Simulate AI response
        setTimeout(()=>{
            setChatMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "I understand your request. I'll help you adjust the template. What specific changes would you like to make?"
                    }
                ]);
        }, 1000);
        setCurrentMessage("");
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    const toggleTheme = ()=>{
        setIsDarkMode(!isDarkMode);
        if (generatedTemplate) {
            const template = generateUniversityTemplate({
                isDarkMode: !isDarkMode,
                subject: "University Announcement",
                content: previousPrompt,
                senderName: "Dr. John Doe",
                senderTitle: "Department Head",
                department: "Computer Science"
            });
            setGeneratedTemplate(template);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex min-h-screen bg-black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 ml-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto p-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-12 mt-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                    href: "../public/documentation.html",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative inline-block cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-xl opacity-50"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                variant: "outline",
                                                className: "relative px-4 py-2 rounded-full border border-neutral-800 bg-black text-sm text-neutral-400 hover:text-white transition-colors",
                                                children: [
                                                    "Turn Text Into Email Templates in Minutes",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_right/* default */.Z, {
                                                        className: "ml-2 h-4 w-4 inline"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "mt-8 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400",
                                    children: "Email Template in Minutes."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "mt-4 text-lg text-neutral-400",
                                    children: "Project-Aδ helps your email ideas come to life, and generates them using AI."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-center mt-2 space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex -space-x-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white",
                                                children: "AI"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-sm text-neutral-600",
                                            children: "Powered by Claude"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "".concat(isChatExpanded ? "w-1/2" : "flex-1", " transition-all duration-300"),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "max-w-[800px] mx-auto",
                                        children: [
                                            !isGenerated && /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* Card */.Zb, {
                                                className: "p-4 bg-neutral-900/50 border border-neutral-800",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Textarea, {
                                                                placeholder: "Enter your email content here...",
                                                                value: prompt,
                                                                onChange: (e)=>setPrompt(e.target.value),
                                                                className: "min-h-[80px] max-h-[120px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 resize-none"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                            onClick: handleGenerate,
                                                            className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium",
                                                            disabled: !prompt.trim(),
                                                            children: "Generate Template"
                                                        })
                                                    ]
                                                })
                                            }),
                                            generatedTemplate && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: isGenerated ? "mt-0" : "mt-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                                    className: "p-6 bg-neutral-900/50 border border-neutral-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between items-center mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                    className: "text-xl font-bold text-white",
                                                                    children: "Email Preview"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center space-x-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(sun/* default */.Z, {
                                                                                    className: "h-4 w-4 text-neutral-400"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch, {
                                                                                    checked: isDarkMode,
                                                                                    onCheckedChange: toggleTheme
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(moon/* default */.Z, {
                                                                                    className: "h-4 w-4 text-neutral-400"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            className: "text-neutral-400 hover:text-white",
                                                                            onClick: handleRevert,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(rotate_ccw/* default */.Z, {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }),
                                                                                "Start Over"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "bg-neutral-900 p-4 rounded-lg border border-neutral-800",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                                                                srcDoc: generatedTemplate,
                                                                className: "w-full min-h-[500px] bg-white rounded-lg",
                                                                title: "Email Preview"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                isGenerated && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "".concat(isChatExpanded ? "w-1/2" : "w-[400px]", " transition-all duration-300"),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                        className: "flex flex-col h-[calc(100vh-200px)] bg-neutral-900/50 border border-neutral-800 sticky top-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between items-center px-6 py-4 border-b border-neutral-800",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Chat"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: toggleChatExpansion,
                                                        className: "text-neutral-400 hover:text-white",
                                                        children: isChatExpanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(minimize_2/* default */.Z, {
                                                            className: "h-4 w-4"
                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(maximize_2/* default */.Z, {
                                                            className: "h-4 w-4"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex-1 px-6 py-4 overflow-y-auto space-y-4",
                                                children: chatMessages.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-col space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-xs font-medium text-neutral-500 ml-1",
                                                                children: message.role === "assistant" ? "AI Assistant" : "You"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "max-w-[90%] px-4 py-3 rounded-lg ".concat(message.role === "assistant" ? "bg-neutral-800/80 text-neutral-100 border border-neutral-700" : "bg-blue-600/20 text-blue-100 border border-blue-800"),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm leading-relaxed",
                                                                    children: message.content
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "px-6 py-4 border-t border-neutral-800 bg-neutral-900/50",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Textarea, {
                                                            placeholder: "Type your message...",
                                                            value: currentMessage,
                                                            onChange: (e)=>setCurrentMessage(e.target.value),
                                                            onKeyDown: handleKeyPress,
                                                            className: "min-h-[44px] max-h-[120px] pr-12 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 resize-none rounded-xl"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                            size: "icon",
                                                            className: "absolute right-2 top-2 h-10 w-10 bg-blue-600 hover:bg-blue-700 rounded-xl",
                                                            onClick: handleSendMessage,
                                                            disabled: !currentMessage.trim(),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(send/* default */.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [59,888,774,179], function() { return __webpack_exec__(757); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);