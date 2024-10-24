import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = "moon";
    this.source = "hello";
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 200px;
    height: 200px;
    }

    `];
  }

  render() {
    return html`
    <a  class="image" href${this.source}>
      <img src= "${this.source}" style ="width: 240px" alt= "${this.title}">
        <div>${this.title}</div>
    </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);