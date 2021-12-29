export const copyInnerText = (event: Event) => {
  navigator.clipboard.writeText((event.target as HTMLElement).innerText)
}
