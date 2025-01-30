import { View } from 'react-native'
import colors from '~/colors'
import { ComponentLike } from '~/rulesReferences/types'
import { AppText } from '../AppText'
import { BaseComponentLike } from '~/rulesReferences/baseComponentLike'

type Props = {
  backgroundColor: (typeof colors)[keyof typeof colors]
  component: BaseComponentLike<ComponentLike>
}
export function VerticalBar({
  component: { techLevel, salvageValue, slotsRequired },
  backgroundColor,
}: Props) {
  if (!techLevel) return null

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
        gap: 5,
        maxWidth: 35,
        minWidth: 35,
      }}
    >
      <AppText
        variant="bold"
        style={{
          color: colors.white,
          backgroundColor: colors.black,
          width: 25,
          height: 25,
          textAlign: 'center',
          paddingTop: 4,
          borderRadius: 5,
        }}
      >
        T{techLevel}
      </AppText>
      {slotsRequired && (
        <View
          style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderLeftWidth: 15,
            borderRightWidth: 15,
            borderBottomWidth: 25,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: colors.black,
            position: 'relative',
          }}
        >
          <AppText
            variant="bold"
            style={{
              position: 'absolute',
              left: -4,
              top: 7.5,
              color: colors.white,
              textAlign: 'center',
            }}
          >
            {slotsRequired}
          </AppText>
        </View>
      )}
      {salvageValue && (
        <AppText
          variant="bold"
          style={{
            color: colors.white,
            backgroundColor: colors.black,
            width: 25,
            height: 25,
            textAlign: 'center',
            paddingTop: 4,
            borderRadius: 30,
          }}
        >
          {salvageValue}
        </AppText>
      )}
    </View>
  )
}
