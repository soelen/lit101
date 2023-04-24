import { css, html, LitElement, } from 'lit'
import { customElement, } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'storybook-tip' )
export class StorybookTip extends LitElement {

  static styles = [
    css`
    :host {
      display: flex;
      font-family: sans-serif;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .tip {
      display: inline-block;
      border-radius: 50rem;
      font-weight: 700;
      background: #e7fdd8;
      color: #66bf3c;
      padding: 4px 12px;
      margin-right: 10px;
    }

    ::slotted(code) {
      line-height: 1;
      margin: 0 2px;
      padding: 3px 5px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #ecf4f9;
      color: rgba(46,52,56,0.9);
      background-color: #f7fafc;
    }
    `
  ];

  render() {

    return html`
      <span class="tip">Tip:</span>
      <div class="tip-wrapper"><slot></slot></div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'storybook-tip': StorybookTip,
  }
}
