declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  import { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}
