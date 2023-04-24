import { css, html, LitElement, } from 'lit'
import { customElement, state } from 'lit/decorators.js';

import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import playgroundsSVG from './playgrounds.svg?raw'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement( 'storybook-playgrounds' )
export class StorybookPlaygrounds extends LitElement {

  @state() private _apps = [ 'react', 'vue', 'lit' ];

  private _lit101In = [
    { transform: `scale(1)` },
    { transform: `scale(.95)` },
    { transform: `scale(1)` },
  ];

  private _puzzleIn = [
    { transform: `translate( 100%, -100% ) rotate(-45deg) scale(1.2)` },
    { transform: `translate( 0, 0 ) scale( 1 ) rotate( 0 )`  },
  ];

  private _puzzleOut = [
    {  transform: `translate( 0, 0 ) scale( 1 ) rotate( 0 )` },
    { transform: `translate( 100%, 100% ) rotate(45deg) scale(1.2)` },
  ];

  static styles = [
    css`
    :host {
      display: flex;
      width: 50%;
    }
    #playground-lit101 {
      transform-origin: 25% 50%;
    }
    #playground-lit,
    #playground-vue,
    #playground-react {
      perspective: 400px;
      display: none;
      transform-origin: 25% 50%;
    }

    `
  ];

  firstUpdated() {

    const lit101 = this.shadowRoot?.querySelector( `#playground-lit101` ) as HTMLElement;
    const animateApp = ( index = 0 ) => {

      const app = this.shadowRoot?.querySelector( `#playground-${ this._apps[ index ] }` ) as HTMLElement;
      app.style.display = 'block';

      const animate = app.animate( this._puzzleIn, {
        easing: 'ease-out',
        duration: 2000,
      } );

      lit101.animate( this._lit101In, {
        easing: 'ease-in-out',
        duration: 1000,
        delay: 1200,
      } );

      animate.addEventListener( 'finish', () => {

        const animate = app.animate( this._puzzleOut, {
          easing: 'ease-in',
          duration: 2000,
          delay: 3000,
        } );
        lit101.animate( this._lit101In, {
          easing: 'ease-in-out',
          duration: 1000,
          delay: 2700,
        } );

        setTimeout( () => {
          animateApp( this._apps[ index + 1 ] ? index + 1 : 0 );
        }, 3000 )

        animate.addEventListener( 'finish', () => {
          app.style.display = 'none';

        })

      });

    }
    animateApp( Math.floor(Math.random() * this._apps.length ) );
    // animateApp( 0 );
  }


  render() {

    return html`
    ${ unsafeSVG( playgroundsSVG )}
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'storybook-playgrounds': StorybookPlaygrounds,
  }
}
