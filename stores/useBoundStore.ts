/**
 * This is a store that combines multiple stores.
 */

import { create } from "zustand";
import { createBearSlice } from "./bearSlice";
import { createFishSlice } from "./fishSlice";

import type { BearSlice } from "./bearSlice";
import type { FishSlice } from "./fishSlice";

export const useBoundStore = create<BearSlice & FishSlice>((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));
