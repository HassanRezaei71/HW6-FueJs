const FueJS = {};

FueJS.createTextNode = function (string) {
    return document.createTextNode(string);
}

FueJS.createElement = function (type, props, children) {
    const element = document.createElement(type);
    props = props || {};
    for (let i = 0; i < Object.keys(props).length; i++) {
        const propKey = Object.keys(props)[i];
        if (propKey === "style") {
            Object.assign(element.style, propKey.style);
        } else if (propKey === "className") {
            element.className = propKey.element;
        } else if (typeof props[propKey] === "function") {
            element[propKey] = props[propKey];
        } else {
            element.setAttrebute(propKey, props[propKey]);
        }
    }
    if (children) {
        if (Array.isArray(children)) {
            for (let i = children.length - 1; i > 0; i--) {
                const child = children[i];
                element.prepend(
                    typeof child === "string" ? this.createTextNode(child) : child
                );
            }
        }
    }else{
        element.appendChild(
            typeof children === "string" ? this.createTextNode(children) : children
        );
    }
    return element;
};

FueJS.getFormDate = function(form){
    const obj = {};
    for(const value of new FormData(form).entries()){
        obj[value[0]] = value[1];
    }
    return obj;
}

FueJS.makeStyle = function(style){
    document.head.appendChild(
        FueJS.createElement(
            "style",
            {
                type: "text/css",
                id: "my-style"
            },
            style
        )
    );
};