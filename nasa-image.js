import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

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
      background-color: pink;
      display: inline-block;
    }

    .image:hover {
    
    background-color:lightblue;
    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    width: 240px;
    }
    a{
      padding: 4px;
      border: 2px solid black;
      display: inline-block;
    }
    a:hover{
      max-width: 240px;
      background-color: lightblue;
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