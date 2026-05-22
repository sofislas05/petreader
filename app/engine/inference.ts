import {
  Evidence,
  HiddenState,
  PetProfile,
  ProbabilityDistribution,
} from "./types";
import { getPriors } from "./priors";
import { likelihoods } from "./likelihoods";

const states: HiddenState[] = [
  "normal_comfort",
  "hungry_or_routine_need",
  "playful_attention",
  "possible_stress",
  "possible_discomfort",
  "possible_health_concern",
];

function evidenceToKeys(evidence: Evidence): string[] {
  const keys: string[] = [];

  if (evidence.posture) keys.push(`posture:${evidence.posture}`);
  if (evidence.tail) keys.push(`tail:${evidence.tail}`);
  if (evidence.ears) keys.push(`ears:${evidence.ears}`);
  if (evidence.tongue) keys.push(`tongue:${evidence.tongue}`);
  if (evidence.activityChange)
    keys.push(`activityChange:${evidence.activityChange}`);
  if (evidence.headPosition)
    keys.push(`headPosition:${evidence.headPosition}`);
  if (evidence.appetiteChanged)
    keys.push(`appetiteChanged:${evidence.appetiteChanged}`);

  return keys;
}

export function inferPetState(
  profile: PetProfile,
  evidence: Evidence
): ProbabilityDistribution {
  const priors = getPriors(profile);
  const evidenceKeys = evidenceToKeys(evidence);

  const scores = {} as ProbabilityDistribution;

  for (const state of states) {
    let score = priors[state];

    for (const key of evidenceKeys) {
      score *= likelihoods[state][key] ?? 0.05;
    }

    scores[state] = score;
  }

  const total = states.reduce((sum, state) => sum + scores[state], 0);

  const posterior = {} as ProbabilityDistribution;

  for (const state of states) {
    posterior[state] = scores[state] / total;
  }

  return posterior;
}

export function getTopState(distribution: ProbabilityDistribution): HiddenState {
  return states.reduce((best, current) =>
    distribution[current] > distribution[best] ? current : best
  );
}