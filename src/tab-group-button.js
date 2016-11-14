import { select } from 'd3-selection';
import GroupButton from './group-button';

export default class TabGroupButton extends GroupButton {
  constructor() {
    super();

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola tab-button', true)
      .styles({
        'align-items': 'center',
        'border-color': 'inherit',
        'color': 'inherit',
        'cursor': 'pointer',
        'display': 'flex',
        'flex': 1
      });

    this._border = this._root
      .append('div')
      .classed('scola border', true)
      .styles({
        'border-left-width': '1px',
        'border-left-style': 'solid',
        'border-left-color': 'inherit',
        'height': '2em',
        'order': 1,
        'width': '0px'
      });

    this._icon = null;
    this._text = null;

    this.first(false);
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

  icon(value, size = '2em') {
    if (typeof value === 'undefined') {
      return this._icon;
    }

    if (!this._icon) {
      this._insertIcon();
    }

    this._icon
      .classed(value, true)
      .style('font-size', size);

    return this;
  }

  text(value) {
    if (typeof value === 'undefined') {
      return this._text;
    }

    if (!this._text) {
      this._insertText();
    }

    this._text.text(value);
    return this;
  }

  first(value) {
    this._border.style('display', value === true ? 'none' : 'inline');
    return this;
  }

  _insertIcon() {
    this._icon = this._root
      .append('div')
      .classed('scola icon', true)
      .styles({
        'flex': 1,
        'order': 3,
        'padding': '0 0.5em',
        'text-align': 'center'
      });
  }

  _insertText() {
    this._text = this._root
      .append('div')
      .classed('scola text', true)
      .styles({
        'flex': 1,
        'font-size': '0.9em',
        'order': 2,
        'padding': '0 0.5em',
        'text-align': 'center'
      });
  }

  _modelSet(event) {
    if (event.name !== this._name) {
      return;
    }

    if (event.value === this._value) {
      this._root
        .classed('selected', true)
        .styles({
          'background-color': '#007AFF',
          'color': '#FFF'
        });
    } else {
      this._root
        .classed('selected', false)
        .styles({
          'background-color': 'inherit',
          'color': 'inherit'
        });
    }
  }
}
