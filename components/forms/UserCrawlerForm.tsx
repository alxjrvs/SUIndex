import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Text, TextInput, Button, ScrollView, View } from 'react-native' // Or appropriate React Native components
import RNPickerSelect from 'react-native-picker-select'

import { UserCrawlerData } from '~/context/userData/types'
import { AppText } from '../AppText'
import { useReference } from '~/context/reference/useReference'

interface Props {
  initialValues: UserCrawlerData
  onSubmit: (data: UserCrawlerData) => void
}

function UserCrawlerForm({ initialValues, onSubmit }: Props) {
  const { crawlerTypes } = useReference()
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
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            items={crawlerTypes.map((type) => ({
              label: type.name,
              value: type.name,
            }))}
          />
        )}
      />
      {errors.type && <Text>{errors.type.message}</Text>}

      <Text>NPC</Text>
      <Text>NPC Name</Text>
      <Controller
        control={control}
        name="npc.name"
        rules={{ required: 'NPC name is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
      {errors.npc?.name && <Text>{errors.npc.name?.message}</Text>}

      <Text>NPC description</Text>
      <Controller
        control={control}
        name="npc.description"
        rules={{ required: 'NPC description is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
          />
        )}
      />
      {errors.npc?.description && <Text>{errors.npc.name?.message}</Text>}

      <Text>Tech Level</Text>
      <Controller
        control={control}
        name="techLevel"
        rules={{ required: 'Tech Level is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            items={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
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

      <View>
        <AppText>Storage Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.storage.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Storage Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.storage.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.storage.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Command Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.commandBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Command Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.commandBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.commandBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Mech Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.mechBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Command Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.mechBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.mechBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Mech Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.mechBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Command Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.mechBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.mechBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Armament Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.armamentBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Armament Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.armamentBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.armamentBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Crafting Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.craftingBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Crafting Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.craftingBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.craftingBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Trading Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.tradingBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Trading Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.tradingBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.tradingBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Med Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.medBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Med Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.medBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.medBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Pilot Bay</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.pilotBay.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Pilot Bay"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.pilotBay.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.pilotBay.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Armoury</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.armoury.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="armoury"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.armoury.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.armoury.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <View>
        <AppText>Cantina</AppText>
        <View>
          <AppText>Name</AppText>
          <Controller
            control={control}
            name="bays.cantina.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                placeholder="Cantina"
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Name</AppText>
          <Controller
            control={control}
            name="bays.cantina.npc.name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View>
          <AppText>NPC Description</AppText>
          <Controller
            control={control}
            name="bays.cantina.npc.description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ''}
                multiline
              />
            )}
          />
        </View>
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  )
}

export default UserCrawlerForm
