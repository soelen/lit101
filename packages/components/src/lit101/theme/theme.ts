import { html, nothing, unsafeCSS, } from 'lit'
import { Lit101Element } from '../../elements/lit101-element';
import { customElement, property } from 'lit/decorators.js'
import darkTheme from '../../themes/dark-theme';
import lightTheme from '../../themes/light-theme';
import themeStyles from './theme-styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

type Themename = 'light' | 'dark';

@customElement( 'lit101-theme' )
export class Theme extends Lit101Element {

  @property({type: String, reflect: true, }) name: Themename = 'light';

  static styles = [
    Lit101Element.styles,
    themeStyles,
  ];

  render() {

    return html`
      ${ this.name === 'dark' ? html`<style>${ unsafeCSS( darkTheme ) }</style>` : html`<style>${ unsafeCSS( lightTheme ) }</style>` }
      <slot></slot>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'lit101-theme': Theme,
  }
}
