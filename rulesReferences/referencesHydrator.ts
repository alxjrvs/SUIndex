import axios from 'axios'

export class ReferencesHydrator {
  static async getRules(path: string) {
    const url = `https://raw.githubusercontent.com/alxjrvs/salvageunion-data/refs/heads/main/data/${path}.json`
    const { data } = await axios.get(url)
    console.log()
  }
}
