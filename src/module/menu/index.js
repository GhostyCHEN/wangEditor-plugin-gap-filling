import GapFillingMenu from './createGapFilling'

export const GapFillingMenuConf = {
  key: 'createGapFilling',
  factory() {
    return new GapFillingMenu()
  },
}
