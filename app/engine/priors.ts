import type { Pet } from "../lib/pets";
import type { Posterior } from "./types";
import { hiddenStates } from "./types";

function normalize(distribution: Posterior): Posterior {
  const total = hiddenStates.reduce(
    (sum, state) => sum + distribution[state],
    0
  );

  const normalized = {} as Posterior;

  for (const state of hiddenStates) {
    normalized[state] = distribution[state] / total;
  }

  return normalized;
}

export function getPriors(pet: Pet): Posterior {
  const priors: Posterior = {
    normal_comfort: 0.30,
    hungry_or_routine_need: 0.18,
    playful_attention: 0.18,
    possible_stress: 0.12,
    possible_discomfort: 0.10,
    possible_health_concern: 0.12,
  };

  if (pet.age_group === "puppy") {
    priors.playful_attention *= 1.5;
    priors.hungry_or_routine_need *= 1.2;
    priors.possible_health_concern *= 0.8;
  }

  if (pet.age_group === "senior") {
    priors.playful_attention *= 0.6;
    priors.possible_discomfort *= 1.4;
    priors.possible_health_concern *= 1.5;
  }

  if (pet.energy_level === "high") {
    priors.playful_attention *= 1.3;
  }

  if (pet.energy_level === "low") {
    priors.normal_comfort *= 1.2;
    priors.playful_attention *= 0.7;
  }

  if (pet.has_known_health_condition === "yes") {
    priors.possible_discomfort *= 1.5;
    priors.possible_health_concern *= 1.7;
  }

  return normalize(priors);
}