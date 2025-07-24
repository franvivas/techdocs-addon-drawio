import { useEffect } from 'react';

import { useShadowRootElements } from '@backstage/plugin-techdocs-react';
import { useRemoteFile } from './hooks';

const readOnly = 0;
export const DrawioDiagram = (props: { img: HTMLImageElement }) => {
  const img = props.img;
  const { inputXml, urlToBase64 } = useRemoteFile();

  useEffect(() => {
    if (img.src.endsWith('.drawio')) {
      const drawioUrl = img.src;
      const encodedDrawioUrl = encodeURIComponent(drawioUrl);
      urlToBase64(encodedDrawioUrl, { isVisio: true });
    }
  }, [img, urlToBase64]);

  useEffect(() => {
    if (!!inputXml) {
      const [metadata, dataBase64] = inputXml.split(',');
      // This inputTxt is a Html response with
      const inputTxt = atob(dataBase64);

      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '600';
      iframe.src = `https://embed.diagrams.net/?embed=1&proto=json&lightbox=${readOnly}`;

      iframe.addEventListener('load', () => {
        iframe.contentWindow?.postMessage(
          JSON.stringify({
            action: 'load',
            xml: inputXml,
          }),
          '*',
        );
      });

      img.replaceWith(iframe);
    }
  }, [img, inputXml]);

  return null;
};

export const DrawioAddon = () => {
  const images = useShadowRootElements<HTMLImageElement>(['img']);

  return images.map(
    img =>
      img.src.endsWith('.drawio') && <DrawioDiagram key={img.src} img={img} />,
  );
};
