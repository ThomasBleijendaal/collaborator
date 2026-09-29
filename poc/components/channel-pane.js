class ChannelPane extends BaseElement {
  constructor() {
    super();
    this.subjects = [];
  }

  connectedCallback() {
    this.render();
  }

  setSubjects(subjects) {
    this.subjects = subjects ?? [];
    this.render();
  }

  render() {
    this.innerHTML = ChannelPane.sectionHtml(this.subjects);
  }

  static sectionHtml(subjects) {
    return `
      <section id="channelPane">
        <ul>
            ${subjects.map(ChannelPane.subjectHtml).join('')}
        </ul>
      </section>`;
  }

  static subjectHtml(subject) {
    let direct = subject.channels.sum(v => v.direct ?? 0);
    let indirect = subject.channels.sum(v => v.indirect ?? 0);
    
    return `
      <li 
        ${BaseElement.attributeHtml('data-direct-count', direct) || 
          BaseElement.attributeHtml('data-indirect-count', indirect)}>
          <span>${subject.name}</span>
          <ul>
              ${subject.channels.map(ChannelPane.channelHtml).join('')}
          </ul>
      </li>`;
  }

  static channelHtml(channel) {
    return `
      <li 
        ${BaseElement.attributeHtml('data-direct-count', channel.direct) ||
          BaseElement.attributeHtml('data-indirect-count', channel.indirect)}>
          <i></i>
          <span 
            ${BaseElement.attributeHtml('class', channel.active ? 'active' : '')}>
              ${channel.name}
          </span>
      </li>`;
  }
}

customElements.define("channel-pane", ChannelPane);
