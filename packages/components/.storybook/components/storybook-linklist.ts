import { css, html, LitElement, } from 'lit'
import { customElement, } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'storybook-linklist' )
export class StorybookLinklist extends LitElement {

  static styles = [
    css`

    :host {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      :host {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }
    `
  ];

  render() {

    return html`
      <slot></slot>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'storybook-linklist': StorybookLinklist,
  }
}
