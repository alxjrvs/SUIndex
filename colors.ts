const colors = {
  SUBlue: 'rgb(143,195,216)',
  SUOrange: 'rgb(232,110,79)',
  SULightBlue: 'rgb(199,223,231)',
  SUOneBlue: 'rgb(115,201,230)',
  SUTwoBlue: 'rgb(87,169,200)',
  SUThreeBlue: 'rgb(68,135,162)',
  SUFourBlue: 'rgb(48,107,128)',
  SUFiveBlue: 'rgb(30,83,100)',
  SUSixBlue: 'rgb(6,52,65)',
  black: 'rgb(40,32,25)',
  white: 'rgb(251,248,243)',
}

export function levelToBlue(level: 1 | 2 | 3 | 4 | 5 | 6 | undefined) {
  switch (level) {
    case 1:
      return colors.SUOneBlue
    case 2:
      return colors.SUTwoBlue
    case 3:
      return colors.SUThreeBlue
    case 4:
      return colors.SUFourBlue
    case 5:
      return colors.SUFiveBlue
    case 6:
      return colors.SUSixBlue
    default:
      return colors.SUOrange
  }
}

export default colors
