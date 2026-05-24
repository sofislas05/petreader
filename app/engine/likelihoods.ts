import type { HiddenState } from "./types";

export const likelihoods: Record<HiddenState, Record<string, number>> = {
  normal_comfort: {
    "posture:laying_side": 0.75,
    "posture:laying_belly_up": 0.65,
    "posture:laying_belly_down": 0.55,
    "posture:sitting": 0.45,
    "posture:up": 0.35,
    "posture:curling_in": 0.40,
    "posture:arched_back": 0.05,

    "tail:normal": 0.65,
    "tail:wag": 0.45,
    "tail:down": 0.20,

    "ears:up": 0.40,
    "ears:down": 0.45,

    "tongue:out": 0.30,
    "tongue:in": 0.60,

    "headPosition:normal": 0.90,
    "headPosition:pressed_against_object": 0.02,

    "activityChange:normal": 0.80,
    "activityChange:less_active_than_usual": 0.10,
    "activityChange:more_active_than_usual": 0.15,

    "appetiteChanged:no": 0.85,
    "appetiteChanged:yes": 0.10,
  },

  hungry_or_routine_need: {
    "posture:sitting": 0.55,
    "posture:up": 0.55,
    "posture:laying_belly_down": 0.25,
    "posture:laying_belly_up": 0.10,
    "posture:laying_side": 0.10,
    "posture:curling_in": 0.10,
    "posture:arched_back": 0.08,

    "tail:wag": 0.45,
    "tail:normal": 0.45,
    "tail:down": 0.20,

    "ears:up": 0.50,
    "ears:down": 0.25,

    "tongue:out": 0.25,
    "tongue:in": 0.55,

    "headPosition:normal": 0.85,
    "headPosition:pressed_against_object": 0.03,

    "activityChange:normal": 0.50,
    "activityChange:less_active_than_usual": 0.20,
    "activityChange:more_active_than_usual": 0.30,

    "appetiteChanged:no": 0.40,
    "appetiteChanged:yes": 0.50,
  },

  playful_attention: {
    "posture:up": 0.80,
    "posture:laying_belly_up": 0.55,
    "posture:sitting": 0.45,
    "posture:laying_belly_down": 0.30,
    "posture:laying_side": 0.20,
    "posture:curling_in": 0.05,
    "posture:arched_back": 0.05,

    "tail:wag": 0.90,
    "tail:normal": 0.30,
    "tail:down": 0.05,

    "ears:up": 0.70,
    "ears:down": 0.15,

    "tongue:out": 0.55,
    "tongue:in": 0.30,

    "headPosition:normal": 0.90,
    "headPosition:pressed_against_object": 0.02,

    "activityChange:normal": 0.35,
    "activityChange:more_active_than_usual": 0.65,
    "activityChange:less_active_than_usual": 0.05,

    "appetiteChanged:no": 0.75,
    "appetiteChanged:yes": 0.10,
  },

  possible_stress: {
    "posture:curling_in": 0.65,
    "posture:laying_belly_down": 0.40,
    "posture:sitting": 0.35,
    "posture:up": 0.35,
    "posture:laying_side": 0.15,
    "posture:laying_belly_up": 0.05,
    "posture:arched_back": 0.20,

    "tail:down": 0.70,
    "tail:normal": 0.25,
    "tail:wag": 0.15,

    "ears:down": 0.70,
    "ears:up": 0.25,

    "tongue:out": 0.50,
    "tongue:in": 0.35,

    "headPosition:normal": 0.75,
    "headPosition:pressed_against_object": 0.10,

    "activityChange:normal": 0.30,
    "activityChange:less_active_than_usual": 0.45,
    "activityChange:more_active_than_usual": 0.35,

    "appetiteChanged:no": 0.45,
    "appetiteChanged:yes": 0.35,
  },

  possible_discomfort: {
    "posture:arched_back": 0.80,
    "posture:curling_in": 0.60,
    "posture:laying_belly_down": 0.45,
    "posture:sitting": 0.30,
    "posture:up": 0.20,
    "posture:laying_side": 0.20,
    "posture:laying_belly_up": 0.08,

    "tail:down": 0.65,
    "tail:normal": 0.25,
    "tail:wag": 0.08,

    "ears:down": 0.60,
    "ears:up": 0.20,

    "tongue:out": 0.45,
    "tongue:in": 0.35,

    "headPosition:normal": 0.60,
    "headPosition:pressed_against_object": 0.45,

    "activityChange:less_active_than_usual": 0.75,
    "activityChange:normal": 0.20,
    "activityChange:more_active_than_usual": 0.05,

    "appetiteChanged:yes": 0.55,
    "appetiteChanged:no": 0.30,
  },

  possible_health_concern: {
    "posture:arched_back": 0.65,
    "posture:curling_in": 0.55,
    "posture:laying_belly_down": 0.40,
    "posture:laying_side": 0.35,
    "posture:sitting": 0.25,
    "posture:up": 0.15,
    "posture:laying_belly_up": 0.05,

    "tail:down": 0.70,
    "tail:normal": 0.25,
    "tail:wag": 0.05,

    "ears:down": 0.65,
    "ears:up": 0.15,

    "tongue:out": 0.40,
    "tongue:in": 0.35,

    "headPosition:pressed_against_object": 0.60,
    "headPosition:normal": 0.50,

    "activityChange:less_active_than_usual": 0.85,
    "activityChange:normal": 0.15,
    "activityChange:more_active_than_usual": 0.03,

    "appetiteChanged:yes": 0.75,
    "appetiteChanged:no": 0.20,
  },
};