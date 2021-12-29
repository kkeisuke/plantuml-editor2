export const copyInnerText = (event: MouseEvent) => {
  navigator.clipboard.writeText((event.target as HTMLElement).innerText)
}
