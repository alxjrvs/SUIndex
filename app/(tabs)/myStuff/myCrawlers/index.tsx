import { ComponentProps, PropsWithChildren } from 'react'
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import colors from '~/colors'
import { AppText } from '~/components/AppText'
import {
  useForm,
  Controller,
  Control,
  ControllerRenderProps,
} from 'react-hook-form'

import { createUserCrawler } from '~/context/userData/fixtures/createUserCrawler'
import { UserCrawlerData } from '~/context/userData/types'
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler'

export default function MyCrawlers() {
  const haven = createUserCrawler({
    type: 'exploratory',
    name: '#812 Haven',
    description: 'A small exploratory crawler',
    weaponSystem: 'mechapult',
  })
  const {
    control,
    // handleSubmit,
    // formState: { errors },
  } = useForm({ defaultValues: haven })

  return (
    <View style={{ padding: 5, gap: 10 }}>
      {/* <AppText style={{ transform: [{ rotate: '-90deg' }] }}>Crawler</AppText> */}
      <RoundFrame>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <LiveFormInput
            style={{ flex: 1 }}
            control={control}
            label="Name"
            name="name"
          />
          <LiveFormInput
            style={{ flex: 1 }}
            control={control}
            label="Type"
            name="type"
          />
        </View>
        <LiveFormInput
          control={control}
          multiline
          label="Description"
          name="description"
          forceValue="Foo"
        />
      </RoundFrame>
    </View>
  )
}

function LiveFormInput({
  label,
  control,
  name,
  style = {},
  inputStyle = {},
  multiline = false,
  numeric = false,
  disabled = false,
  forceValue,
}: {
  label: string
  control: Control<UserCrawlerData, unknown>
  name: ControllerRenderProps<UserCrawlerData>['name']
  style?: ViewStyle
  inputStyle?: TextStyle
  multiline?: boolean
  numeric?: boolean
  disabled?: boolean
  forceValue?: string
}) {
  return (
    <LiveFormFrame label={label} style={style}>
      {forceValue ? (
        <Controller
          control={control}
          disabled={disabled}
          render={({ field }) => {
            return (
              <LiveFormCoreTextInput
                {...(field as ControllerRenderProps<
                  UserCrawlerData,
                  'type' | 'name' | 'description' | 'weaponSystem'
                >)}
                placeholder=""
                editable={!disabled}
                selectTextOnFocus={!disabled}
                multiline={multiline}
                keyboardType={numeric ? 'number-pad' : 'default'}
                style={inputStyle}
              />
            )
          }}
          name={name}
        />
      ) : (
        <LiveFormCoreTextInput
          placeholder=""
          editable
          selectTextOnFocus
          multiline={multiline}
          keyboardType={numeric ? 'number-pad' : 'default'}
          style={inputStyle}
          value={forceValue}
        />
      )}
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
