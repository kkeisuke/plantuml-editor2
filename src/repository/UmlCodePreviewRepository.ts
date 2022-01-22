const IMG_SIZE = 'IMG_SIZE'

export const umlCodePreviewRepository = {
  fetchImgSize() {
    return Number(window.localStorage.getItem(IMG_SIZE))
  },
  saveImgSize(size: number) {
    window.localStorage.setItem(IMG_SIZE, String(size))
  }
}
