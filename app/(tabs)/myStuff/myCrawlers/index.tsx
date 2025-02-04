import { PropsWithChildren } from 'react'
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import colors from '~/colors'
import { AppText } from '~/components/AppText'
import { ComponentFrame } from '~/components/ComponentContainer/ComponentFrame'

import { createUserCrawler } from '~/context/userData/fixtures/createUserCrawler'

export default function MyCrawlers() {
  const haven = createUserCrawler({
    type: 'exploratory',
    name: '#812 Haven',
    description: 'A small exploratory crawler',
    weaponSystem: 'mechapult',
  })
  return (
    <View style={{ padding: 5, gap: 10 }}>
      {/* <AppText style={{ transform: [{ rotate: '-90deg' }] }}>Crawler</AppText> */}
      <RoundFrame>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <LiveFormDisplay
            style={{ flex: 1 }}
            label="Name"
            value={haven.name}
          />
          <LiveFormDisplay
            style={{ flex: 1 }}
            label="Type"
            value={haven.type}
          />
        </View>
        <LiveFormDisplay
          multiline
          label="Description"
          value={haven.description}
        />
      </RoundFrame>
      <RoundFrame>
        <ComponentFrame component={haven}>
          <AppText>Systems</AppText>
        </ComponentFrame>
      </RoundFrame>
    </View>
  )
}

function LiveFormDisplay({
  label,
  style = {},
  inputStyle = {},
  multiline = false,
  numeric = false,
  value,
}: {
  label: string
  style?: ViewStyle
  inputStyle?: TextStyle
  multiline?: boolean
  numeric?: boolean
  disabled?: boolean
  value: string
}) {
  return (
    <LiveFormFrame label={label} style={style}>
      <LiveFormCoreTextInput
        placeholder=""
        editable
        selectTextOnFocus
        multiline={multiline}
        keyboardType={numeric ? 'number-pad' : 'default'}
        style={inputStyle}
        value={value}
      />
    </LiveFormFrame>
  )
}

function LiveFormCoreTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[
        {
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 20,
          fontSize: 18,
        },
        props.multiline && { minHeight: 100 },
        props.keyboardType === 'number-pad' && {
          textAlign: 'center',
          fontSize: 20,
          height: 60,
          width: 60,
        },
        props.style,
      ]}
    />
  )
}

function LiveFormFrame({
  label,
  style = {},
  children,
}: PropsWithChildren<{
  label: string
  style?: ViewStyle
}>) {
  return (
    <View style={[{ flexDirection: 'column', gap: 5 }, style]}>
      <AppText
        variant="heavy"
        adjustsFontSizeToFit
        style={{
          color: colors.white,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </AppText>
      {children}
    </View>
  )
}

function RoundFrame({
  children,
  style,
}: PropsWithChildren<{ style?: ViewStyle }>) {
  return (
    <View
      style={[
        {
          width: '100%',
          borderWidth: 4,
          borderRadius: 20,
          padding: 10,
          backgroundColor: colors.SUPink,
          borderColor: colors.SUPink,
          gap: 10,
          flexDirection: 'column',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}
