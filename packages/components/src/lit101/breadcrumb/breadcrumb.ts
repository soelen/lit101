import { html, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import breadcrumbStyles from './breadcrumb-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'lit101-breadcrumb' )
export class Breadcrumb extends Lit101Element {

  @property({type: Boolean, reflect: true, }) required: boolean = false;

  static styles = [
    Lit101Element.styles,
    breadcrumbStyles,
  ];

  render() {

    return html`
      <slot></slot>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-breadcrumb': Breadcrumb,
  }
}
