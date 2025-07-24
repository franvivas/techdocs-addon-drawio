import { createDevApp } from '@backstage/dev-utils';
import { techdocsAddonDrawioPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(techdocsAddonDrawioPlugin)
  .render();
