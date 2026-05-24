import type { Pet } from "../lib/pets";
import type { Evidence, HiddenState, Posterior } from "./types";
import { hiddenStates } from "./types";
import { getPriors } from "./priors";
import { likelihoods } from "./likelihoods";

function normalize(scores: Posterior): Posterior {
  const total = hiddenStates.reduce((sum, state) => sum + scores[state], 0);

  const normalized = {} as Posterior;

  for (const state of hiddenStates) {
    normalized[state] = scores[state] / total;
  }

  return normalized;
}

function evidenceToKeys(evidence: Evidence): string[] {
  const keys: string[] = [];

  if (evidence.posture) keys.push(`posture:${evidence.posture}`);
  if (evidence.tail) keys.push(`tail:${evidence.tail}`);
  if (evidence.ears) keys.push(`ears:${evidence.ears}`);
  if (evidence.tongue) keys.push(`tongue:${evidence.tongue}`);
  if (evidence.headPosition) keys.push(`headPosition:${evidence.headPosition}`);
  if (evidence.activityChange) keys.push(`activityChange:${evidence.activityChange}`);
  if (evidence.appetiteChanged) keys.push(`appetiteChanged:${evidence.appetiteChanged}`);

  return keys;
}

export function inferPetState(pet: Pet, evidence: Evidence): Posterior {
  const priors = getPriors(pet);
  const evidenceKeys = evidenceToKeys(evidence);

  const scores = {} as Posterior;

  for (const state of hiddenStates) {
    let score = priors[state];

    for (const key of evidenceKeys) {
      score *= likelihoods[state][key] ?? 0.15;
    }

    scores[state] = score;
  }

  return normalize(scores);
}

export function getTopState(posterior: Posterior): HiddenState {
  return hiddenStates.reduce((best, current) =>
    posterior[current] > posterior[best] ? current : best
  );
}