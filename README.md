# techdocs-addon-drawio

Welcome to the techdocs-addon-drawio plugin!

_This plugin was created through the Backstage CLI_

## Install

import plugin

```js
import { Drawio } from "@fvivas/backstage-plugin-techdocs-addon-drawio";
```

Add plugin in TechDocsAddons

```js
<Route path="/docs/:namespace/:kind/:name/*" element={<TechDocsReaderPage />}>
  <TechDocsAddons>
    ....
    <Drawio />
  </TechDocsAddons>
</Route>
```
