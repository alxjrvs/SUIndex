import { StyleSheet, View } from 'react-native'
import { ComponentAction } from '~/context/reference/models/ComponentAction'
import { AppText } from '../AppText'
import { DataList } from '../DataList'
import { ActivationCost } from './ActivationCost'
import MiniRollTableDisplay from '../MiniRollTableDisplay'
import { RollTable } from '~/context/reference/models/RollTable'
import colors from '~/colors'

type Props = {
  action: ComponentAction
}
export function Action({ action }: Props) {
  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        {action.activationCost && (
          <ActivationCost label={action.activationCost} />
        )}
        <AppText variant="bold" style={styles.headerText}>
          {action.name}
        </AppText>
      </View>
      <DataList textColor={colors.black} values={action.details} />
      <AppText>{action.description}</AppText>
      {action.rollTable && (
        <MiniRollTableDisplay
          rollTable={RollTable.digestedRollTable(action.rollTable)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 17,
  },
})
