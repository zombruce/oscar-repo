/*
 * @Author: chang
 * @Date: 2025-07-31 16:35:55
 * @Description: 
 * @LastEditTime: 2025-07-31 17:41:31
 * @LastEditors: chang
 */
import { markInstaller } from '@oscar-repo/utils';
import components from './components';
import "@oscar-repo/theme/index.css";

const installer = markInstaller(components);

export * from '@oscar-repo/components';

export default installer;