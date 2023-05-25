export const generateImagePath = (path: string) => {
  return `${ process.env.ASSET_PREFIX}${ path }`
}