import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, } from 'lit/decorators.js'
import containerStyles from './container-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-container' )
export class Container extends Lit101Element {

  static styles = [
    Lit101Element.styles,
    containerStyles,
  ];

  render() {

    return html`
      <slot></slot>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-container': Container,
  }
}
