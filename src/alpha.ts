import {
  AddonBlueprint,
  TechDocsAddonOptions,
} from '@backstage/plugin-techdocs-react/alpha';
import { DrawioAddon } from './Drawio';
import { createFrontendModule } from '@backstage/frontend-plugin-api';

const drawioAddonParams: TechDocsAddonOptions = {
  name: 'Drawio',
  location: 'Content',
  component: DrawioAddon,
};

export const techDocsDrawioAddon = AddonBlueprint.make({
  name: 'drawio',
  params: drawioAddonParams,
});

export const techDocsDrawioAddonModule = createFrontendModule({
  pluginId: 'techdocs',
  extensions: [techDocsDrawioAddon],
});
