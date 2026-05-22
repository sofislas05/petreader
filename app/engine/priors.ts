import { PetProfile, ProbabilityDistribution } from "./types";

function normalize(dist: ProbabilityDistribution): ProbabilityDistribution {
  const total = Object.values(dist).reduce((sum, value) => sum + value, 0);

  return Object.fromEntries(
    Object.entries(dist).map(([key, value]) => [key, value / total])
  ) as ProbabilityDistribution;
}

export function getPriors(profile: PetProfile): ProbabilityDistribution {
  let priors: ProbabilityDistribution = {
    normal_comfort: 0.30,
    hungry_or_routine_need: 0.18,
    playful_attention: 0.18,
    possible_stress: 0.12,
    possible_discomfort: 0.10,
    possible_health_concern: 0.12,
  };

  if (profile.ageGroup === "puppy") {
    priors.playful_attention *= 1.5;
    priors.possible_health_concern *= 0.8;
  }

  if (profile.ageGroup === "senior") {
    priors.playful_attention *= 0.6;
    priors.possible_discomfort *= 1.4;
    priors.possible_health_concern *= 1.5;
  }

  if (profile.energyLevel === "high") {
    priors.playful_attention *= 1.4;
  }

  if (profile.energyLevel === "low") {
    priors.normal_comfort *= 1.2;
    priors.playful_attention *= 0.7;
  }

  if (profile.hasKnownHealthCondition === "yes") {
    priors.possible_discomfort *= 1.5;
    priors.possible_health_concern *= 1.7;
  }

  return normalize(priors);
}