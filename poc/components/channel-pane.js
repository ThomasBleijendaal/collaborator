class ChannelPane extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
  }

  connectedMoveCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  render() {
    this.innerHTML = "<p>PANE</p>";
  }
}

customElements.define("channel-pane", ChannelPane);
