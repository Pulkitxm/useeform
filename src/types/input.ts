import { HTMLInputTypeAttribute } from "react";

/**
 * @typedef {Object} InputSchema
 * @property {HTMLInputTypeAttribute} type - Specifies the type of input element.
 * @property {string} [className] - CSS class name(s) for styling the input element.
 * @property {string} [value] - Specifies the initial value of the input element.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Function to handle input changes.
 * @property {boolean} [disabled] - Specifies that an input element should be disabled.
 * @property {boolean} [readOnly] - Specifies that an input field is read-only.
 * @property {string} [placeholder] - Provides a hint to the user of what can be entered in the input element.
 * @property {boolean} [required] - Specifies that an input field must be filled out before submitting the form.
 * @property {string} [pattern] - Specifies a regular expression that the input element's value is checked against.
 * @property {number} [min] - Specifies the minimum value for an input element.
 * @property {number} [max] - Specifies the maximum value for an input element.
 * @property {string} [step] - Specifies the legal number intervals for an input element.
 * @property {boolean} [autoFocus] - Specifies that an input element should automatically get focus when the page loads.
 * @property {boolean} [multiple] - Specifies that a user can enter more than one value in an input element.
 * @property {boolean} [checked] - Specifies that an input element should be pre-selected (checkbox or radio button).
 * @property {string} [maxLength] - Specifies the maximum number of characters that can be entered in a text area.
 * @property {string} [minLength] - Specifies the minimum number of characters that can be entered in a text area.
 */

export type InputSchema = {
  /**
   * Specifies the type of input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type | MDN Documentation}
   */
  type?: HTMLInputTypeAttribute;

  /**
   * CSS class name(s) for styling the input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class | MDN Documentation}
   */
  className?: string;

  /**
   * Specifies the initial value of the input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-value | MDN Documentation}
   */
  value?: string;

  /**
   * Function to handle input changes.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange | MDN Documentation}
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Specifies that an input element should be disabled.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled | MDN Documentation}
   */
  disabled?: boolean;

  /**
   * Specifies that an input field is read-only.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly | MDN Documentation}
   */
  readOnly?: boolean;

  /**
   * Provides a hint to the user of what can be entered in the input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder | MDN Documentation}
   */
  placeholder?: string;

  /**
   * Specifies that an input field must be filled out before submitting the form.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-required | MDN Documentation}
   */
  required?: boolean;

  /**
   * Specifies a regular expression that the input element's value is checked against.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-pattern | MDN Documentation}
   */
  pattern?: string;

  /**
   * Specifies the minimum value for an input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min | MDN Documentation}
   */
  min?: number;

  /**
   * Specifies the maximum value for an input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max | MDN Documentation}
   */
  max?: number;

  /**
   * Specifies the legal number intervals for an input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step | MDN Documentation}
   */
  step?: string;

  /**
   * Specifies that an input element should automatically get focus when the page loads.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus | MDN Documentation}
   */
  autoFocus?: boolean;

  /**
   * Specifies that a user can enter more than one value in an input element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-multiple | MDN Documentation}
   */
  multiple?: boolean;

  /**
   * Specifies that an input element should be pre-selected (checkbox or radio button).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-checked | MDN Documentation}
   */
  checked?: boolean;

  /**
   * Specifies the maximum number of characters that can be entered in a text area.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-maxlength | MDN Documentation}
   */
  maxLength?: string;

  /**
   * Specifies the minimum number of characters that can be entered in a text area.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-minlength | MDN Documentation}
   */
  minLength?: string;
};

// MDN links for the properties in InputSchema
