import { PropsWithChildren } from 'react'
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '~/colors'
import { AppText } from '~/components/AppText'
import { ComponentContainer } from '~/components/ComponentContainer'
import { Frame } from '~/components/Frame'
import { useReference } from '~/context/reference/useReference'
import { createUserCrawler } from '~/context/userData/fixtures/createUserCrawler'

export default function CrawlerShow() {
  const { crawlerTypes, systems } = useReference()
  const haven = createUserCrawler({
    type: 'exploratory',
    name: '#812 Haven',
    description: 'A small exploratory crawler',
    weaponSystem: 'mechapult',
  })

  const crawlerType = crawlerTypes.find((c) =>
    c.name.toLowerCase().includes(haven.type.toLowerCase())
  )

  const weaponSystem = systems.find(
    (s) => s.name?.toLowerCase() === haven.weaponSystem.toLowerCase()
  )

  if (!crawlerType || !weaponSystem) return <AppText>Not found</AppText>

  return (
    <ScrollView contentContainerStyle={{ padding: 5, gap: 10 }}>
      <View style={{ gap: 10, flexDirection: 'row' }}>
        <RoundFrame style={{ flex: 5 }}>
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
          <LiveFormDisplay
            style={{ flex: 1 }}
            multiline
            label="Description"
            value={haven.description}
          />
        </RoundFrame>
        <RoundFrame
          style={{
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <LiveFormDisplay
            numeric
            style={{ flex: 1 }}
            label="TL"
            value={haven.techLevel.toString()}
          />
          <LiveFormDisplay
            numeric
            style={{ flex: 1 }}
            label="SP"
            max={25}
            value={25}
          />
          <LiveFormDisplay
            numeric
            style={{ flex: 1 }}
            label="Upkeep"
            value={5}
            max="TL1"
          />
          <LiveFormDisplay
            numeric
            style={{ flex: 1 }}
            label="Upgrade"
            value={5}
            max="TL1"
          />
        </RoundFrame>
      </View>

      <RoundFrame>
        {crawlerType &&
          crawlerType.abilities.map(({ name, description }) => (
            <Frame
              style={{ flex: 1, backgroundColor: colors.SUPink }}
              contentContainerStyle={{
                backgroundColor: colors.white,
                borderRadius: 20,
                padding: 10,
              }}
              headerColor={colors.SUPink}
              key={name}
              header={name || ''}
              description={description}
            />
          ))}
      </RoundFrame>
      <RoundFrame>
        <AppText
          variant="heavy"
          adjustsFontSizeToFit
          style={{
            color: colors.white,
            textTransform: 'uppercase',
          }}
        >
          Weapon System
        </AppText>
        <ComponentContainer
          component={weaponSystem}
          headerColor={colors.SUPink}
          style={{ flex: 1 }}
          contentContainerStyle={{
            backgroundColor: colors.white,
            borderRadius: 20,
            padding: 10,
          }}
        />
      </RoundFrame>
    </ScrollView>
  )
}

function LiveFormDisplay({
  label,
  style = {},
  inputStyle = {},
  multiline = false,
  numeric = false,
  value,
  max,
}: {
  label: string
  max?: number | string
  style?: ViewStyle
  inputStyle?: TextStyle
  multiline?: boolean
  numeric?: boolean
  disabled?: boolean
  value: string | number
}) {
  const formattedVal = value.toString()
  const formattedMax = max?.toString()
  return (
    <LiveFormFrame label={label} style={style}>
      <View style={{ alignContent: 'center', justifyContent: 'center' }}>
        <LiveFormCoreTextInput
          placeholder=""
          editable={false}
          selectTextOnFocus={false}
          multiline={multiline}
          keyboardType={numeric ? 'number-pad' : 'default'}
          style={[
            inputStyle,
            [
              !!max && {
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                height: 35,
              },
            ],
          ]}
          value={formattedVal}
        />
        {max && (
          <LiveFormCoreTextInput
            placeholder=""
            editable={false}
            selectTextOnFocus={false}
            multiline={multiline}
            keyboardType={numeric ? 'number-pad' : 'default'}
            style={[
              {
                backgroundColor: colors.black,
                fontWeight: 600,
                color: colors.white,
                height: 25,
                width: 60,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                fontSize: 12,
              },
            ]}
            value={formattedMax}
          />
        )}
      </View>
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
