import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'

import {
  Elevation
} from '@lit101/styles'

import cardStyles from './card-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-card' )
export class Card extends Lit101Element {

  @property({type: String, reflect: true, }) elevation: Elevation = '10';

  static styles = [
    Lit101Element.styles,
    cardStyles,
  ];

  render() {

    return html`
      <slot></slot>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-card': Card,
  }
}
