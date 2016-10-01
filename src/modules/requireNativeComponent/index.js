import UIManager from '../../Libraries/UIManager'

export function registerNativeComponent(name, component) {
  UIManager[name] = component
}

// TODO Verify props
export default function requireNativeComponent(name) {
  return UIManager[name]
}
