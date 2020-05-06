document.getElementById('root').append(
    FueJS.createElement(
        "main",
        {},
        [
            FueJS.createElement(
                "div",
                {
                    className: "right-side",
                },
                [
                    FueJS.createElement(
                        "div",
                        {
                            className: "user-pass-form",
                        },
                        [
                            FueJS.createElement(
                                "p",
                                {
                                    className: "user-pass-title"
                                },
                                FueJS.createTextNode("ورود")
                            ),
                            FueJS.createElement(
                                "h1",
                                {
                                    className: "form-header",
                                },
                                FueJS.createTextNode("ورود به حساب کاربری")
                            ),
                            FueJS.createElement(
                                "h3",
                                {
                                    className: "form-subheader",
                                },
                                FueJS.createTextNode("جهت ورود به برنامه نام کاربری و رمز عبور خود را وارد نمایید")
                            ),
                            FueJS.createElement(
                                "form",
                                {
                                    action: "#",
                                    method: "post",
                                },
                                FueJS.createElement(
                                    "div",
                                    {
                                        className: "email",
                                    },
                                    [
                                        FueJS.createElement(
                                            "input",
                                            {
                                                type: "email",
                                                name: "email-input",
                                                id: "email-input",
                                                placeholder: "نام کاربری"
                                            }
                                        ),
                                        FueJS.createElement(
                                            "i",
                                            {
                                                className: "fas fa-user icons",
                                            }
                                        )
                                    ]
                                )
                            ),
                            FueJS.createElement(
                                "div",
                                {
                                    className: "pass",
                                },
                                [
                                    FueJS.createElement(
                                        "input",
                                        {
                                            type: "password",
                                            name: "pass-input",
                                            id: "pass-input",
                                            placeholder: "رمز عبور"
                                        }
                                        ),
                                        FueJS.createElement(
                                            "i",
                                            {
                                                className: "fas fa-th icons",
                                            }
                                        )
                                ]
                            ),
                            FueJS.createElement(
                                "div",
                                {
                                    className: "security-code-wrapper",
                                },
                                [
                                    FueJS.createElement(
                                        "div",
                                        {
                                            className: "security-code"
                                        },
                                        [
                                            FueJS.createElement(
                                                "input",
                                                {
                                                    type: "text",
                                                    name: "security-code-input",
                                                    id: "security-code-input",
                                                    placeholder: "کد امنیتی"
                                                }
                                            )
                                        ]
                                    ),
                                    FueJS.createElement(
                                        "captcha",
                                        {
                                            className: "captcha",
                                        },
                                        [
                                            FueJS.createElement(
                                                "img",
                                                {
                                                    src: "Assets/PNG/captcha.gif",
                                                    alt: "captcha"
                                                }
                                            ),
                                            FueJS.createElement(
                                                "div",
                                                {},
                                                [
                                                    FueJS.createElement(
                                                        "a",
                                                        {
                                                            href: "#",
                                                        },
                                                        [
                                                            FueJS.createElement(
                                                                "i",
                                                                {
                                                                    className: "far fa-sync-alt icons",
                                                                }
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            FueJS.createElement(
                                "div",
                                {
                                    className: "submit",
                                },
                                [
                                    FueJS.createElement(
                                        "button",
                                        {
                                            type: "submit", 
                                            class: "submit-button",
                                        },
                                        FueJS.createTextNode("ورود")
                                    )
                                ]
                            ),
                            FueJS.createElement(
                                "div",
                                {
                                    className: "remember",
                                },
                                [
                                    FueJS.createElement(
                                        "label",
                                        {},
                                        [
                                            FueJS.createElement(
                                                "input",
                                                {
                                                    type: "checkbox",
                                                    class: "remember-check",
                                                },
                                            ),
                                            FueJS.createElement(
                                                "i",
                                                {
                                                    className: "fal fa-square"
                                                }
                                            ),
                                            FueJS.createElement(
                                                "i",
                                                {
                                                    className: "fas fa-check-square"
                                                }
                                            ),
                                            FueJS.createElement(
                                                "span",
                                                {
                                                    className: "remember-text",
                                                },
                                                FueJS.createTextNode("مرا به خاطر بسپار")
                                            )
                                        ]
                                    )
                                ]
                            )
                        ])
                ]),
                FueJS.createElement(
                    "div",
                    {
                        className: "left-side",
                    },
                    [
                        FueJS.createElement(
                            "div",
                            {
                                className: "radar",
                            },
                            [
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring1",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring2",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring3",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring4",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring5",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring6",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring7",
                                    }
                                ),
                                FueJS.createElement(
                                    'div',
                                    {
                                        className: "ring ring8",
                                    }
                                )
                            ]
                        ),
                        FueJS.createElement(
                            'img',
                            {
                                src: "Assets/PNG/radar-angle.png",
                                alt: "radar",
                                class: "radar-image"
                            }
                        ),
                        FueJS.createElement(
                            'img',
                            {
                                src: "Assets/PNG/Logo.png",
                                alt: "Logo",
                                class: "logo"
                            }
                        ),
                        FueJS.createElement(
                            'p',
                            {},
                            FueJS.createTextNode("Multi Anti-Virus & Cybersecurity")
                        )
                    ]
                )
        ]
    ),
)