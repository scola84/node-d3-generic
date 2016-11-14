import ControlBar from './src/control-bar';
import ControlButton from './src/control-button';
import ControlGroupButton from './src/control-group-button';
import TabBar from './src/tab-bar';
import TabGroupButton from './src/tab-group-button';

export function controlBar() {
  return new ControlBar();
}

export function controlButton() {
  return new ControlButton();
}

export function controlGroupButton() {
  return new ControlGroupButton();
}

export function tabBar() {
  return new TabBar();
}

export function tabGroupButton() {
  return new TabGroupButton();
}
