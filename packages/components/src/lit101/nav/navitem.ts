import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import navitemStyles from './navitem-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-navitem' )
export class Navitem extends Lit101Element {

  @property( { type: Boolean, reflect: true, } ) active: boolean = false;

  static styles = [
    Lit101Element.styles,
    navitemStyles,
  ];

  render() {

    return html`
      <button
        type="button"
        part="button"
      >
        <slot name="icon"></slot>
        <div
          id="text"
          part="text"
        >
          <slot></slot>
        </div>
      </button>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-navitem': Navitem,
  }
}
