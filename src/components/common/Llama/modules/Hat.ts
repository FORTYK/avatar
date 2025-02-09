import { type AvatarModuleMeta } from '../../AvatarModuleMeta'
import hair from '/src/assets/llama/hair.svg';
import goofy from '/src/assets/llama/goofy.svg';
import village from '/src/assets/llama/village.svg';

const module: AvatarModuleMeta[] = 
[
  {
    title: "well kept",
    src: hair,
    y: 99,
    width: 92,
    height: 156
  },
  {
    title: "goofy",
    src: goofy,
    y: 95,
    width: 114,
    height: 161
  },
  {
    title: "village idiot",
    src: village,
    y: 90,
    width: 114,
    height: 165
  },
  {
    title: 'baldie',
    src: '',
    y: 99,
    width: 92,
    height: 156
  }
];

export default module;