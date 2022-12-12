import { ILowCodePluginContext, project } from '@alilc/lowcode-engine';
import { SettingsPrimaryPane } from '@alilc/lowcode-editor-skeleton';
const SettingsPanelPlugin = (ctx: ILowCodePluginContext) => {
  return {
    async init() {
      const { skeleton } = ctx;
      // 注册组件面板
      const componentsPane = skeleton.add({
        area: 'rightArea',
        name: 'settingsPane',
        type: 'Panel',
        content: SettingsPrimaryPane,
        props: {
          ignoreRoot: false,
        },
      });
    },
  };
}
SettingsPanelPlugin.pluginName = 'SettingsPanelPlugin';
export default SettingsPanelPlugin;