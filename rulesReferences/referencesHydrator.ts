import axios from 'axios'

export class ReferencesHydrator {
  static async getRules(path: string): Promise<Record<string, unknown>[]> {
    const url = `https://raw.githubusercontent.com/alxjrvs/salvageunion-data/refs/heads/main/data/${path}.json`
    try {
      const { data } = await axios.get(url)
      return data
    } catch {
      return []
    }
  }
}
