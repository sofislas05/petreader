export type HiddenState =
  | "normal_comfort"
  | "hungry_or_routine_need"
  | "playful_attention"
  | "possible_stress"
  | "possible_discomfort"
  | "possible_health_concern";

export type Posterior = Record<HiddenState, number>;

export type Posture =
  | "laying_belly_down"
  | "laying_belly_up"
  | "sitting"
  | "up"
  | "laying_side"
  | "curling_in"
  | "arched_back";

export type Tail = "wag" | "down" | "normal";

export type Ears = "up" | "down";

export type Tongue = "out" | "in";

export type ActivityChange =
  | "normal"
  | "less_active_than_usual"
  | "more_active_than_usual";

export type HeadPosition =
  | "normal"
  | "pressed_against_object";

export type YesNo = "yes" | "no";

export interface Evidence {
  posture?: Posture;
  tail?: Tail;
  ears?: Ears;
  tongue?: Tongue;
  activityChange?: ActivityChange;
  headPosition?: HeadPosition;
  appetiteChanged?: YesNo;
}

export const hiddenStates: HiddenState[] = [
  "normal_comfort",
  "hungry_or_routine_need",
  "playful_attention",
  "possible_stress",
  "possible_discomfort",
  "possible_health_concern",
];