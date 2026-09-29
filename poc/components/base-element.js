class BaseElement extends HTMLElement {
  static attributeHtml(name, ...values) {
    const nonNullValues = values.filter(v => v);
    return nonNullValues.length == 0 
        ? "" 
        : `${name}=${nonNullValues.join(" ")}`;
  }
}
