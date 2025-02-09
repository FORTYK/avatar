import { type AvatarModuleMeta } from '../../AvatarModuleMeta'
import regular from '/src/assets/llama/regular.svg';
import sweet from '/src/assets/llama/sweet.svg';
import matted from '/src/assets/llama/matted.svg';

const module: AvatarModuleMeta[] = 
[ 
  {
    title: "regular",
    src: regular,
    y: 90,
    width: 100,
    height: 176
  },
  {
    title: "sweet",
    src: sweet,
    y: 90,
    width: 100,
    height: 176
  },
  {
    title: "matted",
    src: matted,
    y: 100,
    width: 110,
    height: 156
  }
];

export default module;