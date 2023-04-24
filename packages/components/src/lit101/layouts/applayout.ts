import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import applayoutStyles from './applayout-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-applayout' )
export class Applayout extends Lit101Element {

  @property({type: Boolean, reflect: true, }) required: boolean = false;

  static styles = [
    Lit101Element.styles,
    applayoutStyles,
  ];

  render() {

    return html`
      <slot name="sidebar"></slot>
      <main>
        <slot></slot>
      </main>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-applayout': Applayout,
  }
}
