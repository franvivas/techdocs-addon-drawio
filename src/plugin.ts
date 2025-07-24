import { createPlugin } from '@backstage/core-plugin-api';
import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react';
import { DrawioAddon, DrawioProps } from './Drawio';

/**
 * The TechDocs addons draw.io plugin
 *
 * @public
 */
export const techdocsAddonDrawioPlugin = createPlugin({
  id: 'techdocs-addon-drawio',
});

/**
 * TechDocs addon that lets you render draw.io diagrams
 *
 * @public
 */
export const Drawio = techdocsAddonDrawioPlugin.provide(
  createTechDocsAddonExtension<DrawioProps>({
    name: 'DrawioDiagram',
    location: TechDocsAddonLocations.Content,
    component: DrawioAddon,
  }),
);
