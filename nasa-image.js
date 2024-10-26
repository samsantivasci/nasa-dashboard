import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NasaImage extends DDDSuper(LitElement) {

  constructor() {
    super();
    this.title = "moon";
    this.source = "hello";
    this.owner = "";
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        owner: {type: String},
    };
  }

  static get styles() {
    return [css`
    
    :host:hover{
      background-color: var(--ddd-theme-default-original87Pink);
      display: inline-block;
    }

    .image:hover {
    
    background-color:var(--ddd-theme-default-pughBlue);
    }

    .image div {
    max-width: 200px;
    font-size: var(--ddd-font-size-4xs);
    font-weight: bold;
    }

    .image img {
    width: 240px;
    height: 200px;
    
    }
    a{
      padding: 4px;
      border:4px solid var(--ddd-theme-default-potentialMidnight);
      display: inline-block;
    }
    a:hover{
      max-width: 240px;
      background-color: var(--ddd-theme-default-pughBlue);
    }

    `];
  }

  render() {
    return html`
    <a  class="image" href=${this.source} target="_blank">
      <img src= "${this.source}" alt= "${this.title}">
        <div>${this.title}</div>
        <div>${this.owner}</div>
    </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);