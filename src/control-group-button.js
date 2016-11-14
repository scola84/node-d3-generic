import { select } from 'd3-selection';
import GroupButton from './group-button';

export default class ControlGroupButton extends GroupButton {
  constructor() {
    super();

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control-button-tab', true)
      .styles({
        'cursor': 'pointer',
        'flex': 1,
        'text-align': 'center'
      });

    this._icon = this._root
      .append('div')
      .classed('scola icon', true)
      .styles({
        'font-size': '2em'
      });

    this._text = this._root
      .append('div')
      .classed('scola text', true)
      .styles({
        'font-size': '0.7em'
      });

    this._bind();
  }

  destroy() {
    this._unbind();

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  icon(value) {
    if (typeof value === 'undefined') {
      return this._icon;
    }

    this._icon.classed(value, true);
    return this;
  }

  text(value) {
    if (typeof value === 'undefined') {
      return this._text;
    }

    this._text.text(value);
    return this;
  }

  _modelSet(event) {
    if (event.name !== this._name) {
      return;
    }

    if (event.value === this._value) {
      this._root.styles({
        'color': '#007AFF'
      });
    } else {
      this._root.styles({
        'color': 'inherit'
      });
    }
  }
}
