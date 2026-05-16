import { useEffect } from 'react'

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return [h, s, l] as const
}

function hslToRgb(h: number, s: number, l: number) {
  let r: number, g: number, b: number
  if (s === 0) { r = g = b = l }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export default function usePaletteFromImage(imgUrl?: string) {
  useEffect(() => {
    if (!imgUrl) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imgUrl
    const onLoad = () => {
      try {
        const canvas = document.createElement('canvas')
        const w = 40, canvasH = 40
        canvas.width = w; canvas.height = canvasH
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.drawImage(img, 0, 0, w, canvasH)
        const data = ctx.getImageData(0, 0, w, h).data
        let r = 0, g = 0, b = 0, count = 0
        // sample pixels (stride for performance)
        const stride = 4 * 3
        for (let i = 0; i < data.length; i += stride) {
          r += data[i]
          g += data[i + 1]
          b += data[i + 2]
          count++
        }
        if (count === 0) return
        r = Math.round(r / count)
        g = Math.round(g / count)
        b = Math.round(b / count)
        const primary = `rgb(${r}, ${g}, ${b})`
        // compute a 'gold' accent by moving hue toward gold (45deg)
        const [h, s, l] = rgbToHsl(r, g, b)
        const goldHue = 45 / 360
        const newH = (h * 0.5 + goldHue * 0.5)
        const newS = Math.min(0.95, Math.max(0.3, s * 0.6 + 0.35))
        const newL = Math.min(0.85, Math.max(0.35, l * 0.6 + 0.25))
        const [gr, gg, gb] = hslToRgb(newH, newS, newL)
        const gold = `rgb(${gr}, ${gg}, ${gb})`

        document.documentElement.style.setProperty('--color-primary', primary)
        document.documentElement.style.setProperty('--color-gold', gold)
      } catch (e) {
        // fail silently
      }
    }
    img.addEventListener('load', onLoad)
    return () => img.removeEventListener('load', onLoad)
  }, [imgUrl])
}
