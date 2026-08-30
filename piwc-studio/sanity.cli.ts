import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '493tg5cp',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    appId: 'ivgiiqut6ma8ox829j1sv7w7',
    autoUpdates: true,
  },
})
