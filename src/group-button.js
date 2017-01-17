export default class GroupButton {
  constructor() {
    this._name = null;
    this._value = null;
    this._model = null;

    this._handleModelSet = (e) => this._modelSet(e);
  }

  destroy() {
    this._unbindModel();
  }

  name(value = null) {
    if (value === null) {
      return this._name;
    }

    this._name = value;
    return this;
  }

  value(buttonValue = null) {
    if (buttonValue === null) {
      return this._value;
    }

    this._value = buttonValue;
    return this;
  }

  model(value = null) {
    if (value === null) {
      return this._model;
    }

    this._model = value;
    this._bindModel();

    this._modelSet({
      action: 'model',
      name: this._name,
      value: value.get(this._name)
    });

    return this;
  }

  _bind() {
    this._root.on('click.scola-group-button', () => this._handleClick());
  }

  _unbind() {
    this._root.on('click.scola-group-button', null);
  }

  _handleClick() {
    this._model.set(this._name, this._value);
  }

  _bindModel() {
    if (this._model) {
      this._model.setMaxListeners(this._model.getMaxListeners() + 1);
      this._model.addListener('set', this._handleModelSet);
    }
  }

  _unbindModel() {
    if (this._model) {
      this._model.setMaxListeners(this._model.getMaxListeners() - 1);
      this._model.removeListener('set', this._handleModelSet);
    }
  }

  _modelSet() {
    throw new Error('Not implemented');
  }
}
