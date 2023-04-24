import { css, html, LitElement, } from 'lit'
import { customElement, property, } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'storybook-linklistitem' )
export class StorybookLinklistitem extends LitElement {

  @property( { type: String } ) public href = '';

  static styles = [
    css`
    :host {
      display: flex;
    }
    ::slotted(img) {
      width: 24px;
      height: 24px;
    }
    .link-item {
      display: grid;
      grid-template: auto auto / auto 1fr;
      grid-template-areas:
        "image header"
        "image description";
      text-decoration: none;
      width: 100%;
      align-items: center;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      font-family: sans-serif;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    ::slotted(strong) {
      grid-area: header;
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    ::slotted(img) {
      grid-area: image;
      height: 48px;
      width: 48px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }
    `
  ];

  render() {

    return html`
    <a class="link-item" href="${ this.href }"><slot></slot></a>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'storybook-linklistitem': StorybookLinklistitem,
  }
}
