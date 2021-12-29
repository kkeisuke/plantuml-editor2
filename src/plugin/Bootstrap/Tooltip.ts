import Tooltip from 'bootstrap/js/dist/tooltip'

export const setupTooltip = (elm: HTMLElement, options?: Partial<Tooltip.Options>) => {
  new Tooltip(elm, options)
}
