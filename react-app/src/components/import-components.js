import { MapTo } from '@adobe/aem-react-editable-components';
import { Text, TextEditConfig } from './AEMText';
import Image, { ImageEditConfig } from './AEMImage';

MapTo('editorxpdevelopment/components/text')(Text, TextEditConfig);
MapTo('editorxpdevelopment/components/image')(Image, ImageEditConfig);
