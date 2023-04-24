import { html, PropertyValueMap, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { closeMenuSVG } from '@lit101/icons'
import navStyles from './nav-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-nav' )
export class Nav extends Lit101Element {

  static styles = [
    Lit101Element.styles,
    navStyles,
  ];

  render() {

    return html`
      <dialog>

      <div id="header">
        <button
          id="logo"
          type="button"
          @click="${ () => this.dispatchEvent(
            new CustomEvent( 'logo' )
          )}"
        >
          <slot name="logo">
          </slot>
        </button>
        <lit101-iconbutton size="large">
          ${ unsafeSVG( closeMenuSVG ) }
        </lit101-iconbutton>
      </div>
      <div id="items">
        <slot></slot>
      </div>
      </dialog>
    `
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    // const shadowRoot = this.shadowRoot as ShadowRoot;
      // const dialog = shadowRoot.querySelector( 'dialog' ) as HTMLDialogElement;
      // dialog.showModal();

  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-nav': Nav,
  }
}
