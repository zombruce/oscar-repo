/*
 * @Author: chang
 * @Date: 2025-07-31 16:13:48
 * @Description: 
 * @LastEditTime: 2025-07-31 16:22:08
 * @LastEditors: chang
 */
import type {App, Plugin} from 'vue';
import { each} from 'lodash-es';

type SFCWithInstall<T> = T & Plugin;

export function markInstaller(components: Plugin[]) {
  const installer = (app: App) => { each(components, (c) =>  app.use(c)); };

  return installer as Plugin;
}

export const withInstall = <T>(component:T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  }
  return component as SFCWithInstall<T>;
}
