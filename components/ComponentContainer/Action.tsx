import { StyleSheet, View } from 'react-native'
import { ComponentAction } from '~/rulesReferences/componentAction'
import { AppText } from '../AppText'
import { DataList } from '../DataList'
import colors from '~/colors'

type Props = {
  action: ComponentAction
}
export function Action({ action }: Props) {
  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        {action.activationCost && (
          <AppText
            highlight={colors.black}
            variant="bold"
            style={styles.headerText}
          >
            {action.activationCost}
          </AppText>
        )}
        <AppText variant="bold" style={styles.headerText}>
          {action.name}
        </AppText>
      </View>
      <DataList values={action.details} />
      <AppText>{action.description}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 17,
  },
})
