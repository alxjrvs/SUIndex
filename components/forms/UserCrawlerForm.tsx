import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Text, TextInput, Button, ScrollView } from 'react-native' // Or appropriate React Native components
import RNPickerSelect from 'react-native-picker-select'

import { UserCrawlerData } from '~/context/userData/types'

interface Props {
  initialValues: UserCrawlerData
  onSubmit: (data: UserCrawlerData) => void
}

function UserCrawlerForm({ initialValues, onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCrawlerData>({
    defaultValues: initialValues,
  })

  return (
    <ScrollView>
      <Text>Name</Text>
      <Controller
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="name"
      />
      {errors.name && <Text>{errors.name.message}</Text>}

      <Text>Description</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
          />
        )}
      />

      <Text>Type</Text>
      <Controller
        control={control}
        name="type"
        rules={{ required: 'Type is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      {errors.type && <Text>{errors.type.message}</Text>}

      <Text>Tech Level</Text>
      <Controller
        control={control}
        name="techLevel"
        rules={{ required: 'Tech Level is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            items={[
              { label: '1', value: '1' },
              { label: '1', value: '1' },
              { label: '1', value: '1' },
              { label: '1', value: '1' },
            ]}
          />
        )}
      />
      {errors.techLevel && <Text>{errors.techLevel.message}</Text>}

      <Text>SP Damage</Text>
      <Controller
        control={control}
        name="spDamage"
        rules={{
          required: 'SP Damage is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ? value.toString() : ''}
            keyboardType="numeric"
          />
        )}
      />
      {errors.spDamage && <Text>{errors.spDamage.message}</Text>}

      <Text>Weapon System</Text>
      <Controller
        control={control}
        name="weaponSystem"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />

      {/* Example for one of the bays - adapt for others */}
      <Text>Storage Bay Storage Capacity</Text>
      <Controller
        control={control}
        name="bays.storage.storage"
        rules={{
          required: 'Storage Capacity is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value ? value.toString() : ''}
            keyboardType="numeric"
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  )
}

export default UserCrawlerForm
