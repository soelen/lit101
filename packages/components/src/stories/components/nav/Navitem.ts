import { html } from 'lit';
import '../../../main';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  active?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, active }: ButtonProps) => {

  return html`
  <lit101-navitem
  ?active=${ active }
  >
    ${label}
  </lit101-navitem>
  `;
};
