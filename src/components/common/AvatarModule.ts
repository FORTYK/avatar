import { type AvatarModuleMeta } from "./AvatarModuleMeta";

export class AvatarModule {
  label?: string;
  meta?: AvatarModuleMeta;

  constructor(label?: string, meta?: AvatarModuleMeta) {
    this.label = label || undefined;
    this.meta = meta || undefined;
  }
};