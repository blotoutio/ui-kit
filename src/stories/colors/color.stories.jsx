import {
  Layer,
  HLine,
  ChartBox,
  ColorBox,
  ChartWrapper,
  ColorContainer,
  HeadingValue,
  ChartHeading,
} from './style'

import * as colors from '../../common/colors.js'
import { chartColors } from '../../common/constants.js'

export default {
  title: 'Color',
}

function rgbatohex(color) {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',')

  const hex = `#${(
    (1 << 24) +
    (parseInt(rgba[0]) << 16) +
    (parseInt(rgba[1]) << 8) +
    parseInt(rgba[2])
  )
    .toString(16)
    .slice(1)}`
  return hex
}

function getContrastYIQ(hexcolor) {
  if (hexcolor === '#FFF' || hexcolor === '#fff') {
    hexcolor = '#ffffff'
  } else if (hexcolor === '#000') {
    hexcolor = '#000000'
  }
  hexcolor = hexcolor.replace('#', '')
  const r = parseInt(hexcolor.substr(0, 2), 16)
  const g = parseInt(hexcolor.substr(2, 2), 16)
  const b = parseInt(hexcolor.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? 'black' : 'white'
}

const DataLayer = ({ colourName, colourCode }) => {
  let HexCode = colourCode
  if (colourCode.length > 7) {
    HexCode = rgbatohex(colourCode)
  }
  const colour = getContrastYIQ(HexCode)
  return (
    <Layer bgColor={colourCode} color={colour}>
      <div>{colourName}</div>
      <div>{colourCode}</div>
    </Layer>
  )
}

const SubHeadingLayer = () => {
  return (
    <Layer color={'rgba(17, 17, 17, 0.32)'}>
      <div>name</div>
      <div>hex</div>
    </Layer>
  )
}

export const List = () => {
  return (
    <>
      <h1>Colors</h1>
      <HLine />
      <ColorContainer>
        <HeadingValue>Black</HeadingValue>
        <SubHeadingLayer />
        <DataLayer colourName='black' colourCode='#000000' />
        {blackData.map((data) => {
          return (
            <DataLayer
              key={data.name}
              colourName={data.name}
              colourCode={data.code}
            />
          )
        })}
      </ColorContainer>
      <ColorContainer>
        <HeadingValue>White</HeadingValue>
        <SubHeadingLayer />
        <DataLayer colourName='white' colourCode='#FFF' />
      </ColorContainer>
      <ColorContainer>
        <HeadingValue>Other</HeadingValue>
        <SubHeadingLayer />
        {otherData.map((data) => {
          return (
            <DataLayer
              key={data.name}
              colourName={data.name}
              colourCode={data.code}
            />
          )
        })}
      </ColorContainer>
      <ColorContainer>
        <HeadingValue>Orange</HeadingValue>
        <SubHeadingLayer />
        {orangeData.map((data) => {
          return (
            <DataLayer
              key={data.name}
              colourName={data.name}
              colourCode={data.code}
            />
          )
        })}
      </ColorContainer>
      <ColorContainer>
        <HeadingValue>Neutrals</HeadingValue>
        <SubHeadingLayer />
        {neutralData.map((data) => {
          return (
            <DataLayer
              key={data.name}
              colourName={data.name}
              colourCode={data.code}
            />
          )
        })}
      </ColorContainer>
      <ColorContainer>
        <HeadingValue>Blue</HeadingValue>
        <SubHeadingLayer />
        {blueData.map((data) => {
          return (
            <DataLayer
              key={data.name}
              colourName={data.name}
              colourCode={data.code}
            />
          )
        })}
      </ColorContainer>
      <ChartBox>
        <ChartHeading>Chart Colors</ChartHeading>
        <ChartWrapper>
          {chartColors.map((color, index) => {
            return (
              <div key={chartNames[index]}>
                <ColorBox bgColor={color} />
                <h3>{chartNames[index]}</h3>
                <p>{color}</p>
              </div>
            )
          })}
        </ChartWrapper>
      </ChartBox>
    </>
  )
}

const chartNames = [
  'Blue',
  'Orange',
  'Submarine Yellow',
  'Eggplant',
  'Pine Green',
  'Red',
  'Red (Salsa)',
  'Sky Blue',
  'Green',
  'Saffron',
  'Periwinkle',
  'Lavender',
  'Maximum Yellow',
  'Sheen',
  'Patriarch',
]

const orangeData = [
  {
    name: 'orange10',
    code: colors.orange10,
  },
  {
    name: 'orange20',
    code: colors.orange20,
  },
  {
    name: 'orange30',
    code: colors.orange30,
  },
  {
    name: 'orange40',
    code: colors.orange40,
  },
  {
    name: 'orange50',
    code: colors.orange50,
  },
  {
    name: 'orange60',
    code: colors.orange60,
  },
  {
    name: 'orange70',
    code: colors.orange70,
  },
  {
    name: 'orange80',
    code: colors.orange80,
  },
  {
    name: 'orange90',
    code: colors.orange90,
  },
  {
    name: 'orange100',
    code: colors.orange100,
  },
]

const neutralData = [
  {
    name: 'neutrals10',
    code: colors.neutrals10,
  },
  {
    name: 'neutrals20',
    code: colors.neutrals20,
  },
  {
    name: 'neutrals30',
    code: colors.neutrals30,
  },
  {
    name: 'neutrals40',
    code: colors.neutrals40,
  },
  {
    name: 'neutrals50',
    code: colors.neutrals50,
  },
  {
    name: 'neutrals60',
    code: colors.neutrals60,
  },
  {
    name: 'neutrals70',
    code: colors.neutrals70,
  },
  {
    name: 'neutrals80',
    code: colors.neutrals80,
  },
  {
    name: 'neutrals90',
    code: colors.neutrals90,
  },
  {
    name: 'neutrals100',
    code: colors.neutrals100,
  },
]

const blueData = [
  {
    name: 'blue10',
    code: colors.blue10,
  },
  {
    name: 'blue20',
    code: colors.blue20,
  },
  {
    name: 'blue30',
    code: colors.blue30,
  },
  {
    name: 'blue40',
    code: colors.blue40,
  },
  {
    name: 'blue50',
    code: colors.blue50,
  },
  {
    name: 'blue60',
    code: colors.blue60,
  },
  {
    name: 'blue70',
    code: colors.blue70,
  },
  {
    name: 'blue80',
    code: colors.blue80,
  },
  {
    name: 'blue90',
    code: colors.blue90,
  },
  {
    name: 'blue100',
    code: colors.blue100,
  },
]

const blackData = [
  {
    name: 'black80',
    code: colors.black80,
  },
  {
    name: 'black64',
    code: colors.black64,
  },
  {
    name: 'black48',
    code: colors.black48,
  },
  {
    name: 'black32',
    code: colors.black32,
  },
  {
    name: 'black24',
    code: colors.black24,
  },
  {
    name: 'black16',
    code: colors.black16,
  },
]

const otherData = [
  {
    name: 'error easy',
    code: colors.errorEasy,
  },
  {
    name: 'error juice',
    code: colors.errorJuice,
  },
  {
    name: 'attention easy',
    code: colors.attentionEasy,
  },
  {
    name: 'attention juice',
    code: colors.attentionJuice,
  },
  {
    name: 'success easy',
    code: colors.successEasy,
  },
  {
    name: 'success juice',
    code: colors.successJuice,
  },
  {
    name: 'link',
    code: colors.link,
  },
  {
    name: 'link hover',
    code: colors.linkHover,
  },
  {
    name: 'submarine easy',
    code: colors.submarineEasy,
  },
  {
    name: 'submarine juice',
    code: colors.submarineJuice,
  },
]
