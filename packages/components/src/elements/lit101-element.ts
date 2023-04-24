import { html, css, LitElement, CSSResultGroup, } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Lit101Element extends LitElement {

  static styles: CSSResultGroup = [
    css`
    :host, :host * {
      box-sizing: border-box;
    }
    :host::selection {
      color: var( --lit101-selection-color, inherit );
      background-color: var( --lit101-selection-background-color, inherit );
    }
    `
  ];

  render() {
    return html`<slot></slot>`
  }

}
