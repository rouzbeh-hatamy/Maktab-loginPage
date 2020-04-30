const FueJs = {};
FueJs.createTextNode = function(string) {
  return document.createTextNode(string);
};

FueJs.createElement = function(type, props, children) {
  const element = document.createElement(type);
  props = props || {};
  for (let index = 0; index < Object.keys(props).length; index++) {
    const propKey = Object.keys(props)[index];
    if (propKey === 'style') {
      Object.assign(element.style, props.style);
    } else if (propKey === 'className') {
      element.className = props.className;
    } else if (typeof props[propKey] === 'function') {
      element[propKey] = props[propKey];
    } else {
      element.setAttribute(propKey, props[propKey]);
    }
  }
  if (children) {
    if (Array.isArray(children)) {
      for (let index = children.length - 1; index >= 0; index--) {
        const child = children[index];
        element.prepend(
          typeof child === 'string' ? this.createTextNode(child) : child
        );
      }
    } else {
      element.append(
        typeof children === 'string' ? this.createTextNode(children) : children
      );
    }
  }
  return element;
};
