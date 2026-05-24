import { supabase } from "./supabase";

export type Pet = {
  id?: string;
  name: string;
  breed?: string;
  photo_url?: string;
  age_group: "puppy" | "adult" | "senior";
  energy_level: "low" | "medium" | "high";
  has_known_health_condition: "yes" | "no";
};

export async function createPet(pet: Pet) {
  const { data, error } = await supabase
    .from("pets")
    .insert([pet])
    .select()
    .single();

  if (error) {
    console.error("Error creating pet:", error);
    throw error;
  }

  return data;
}

export async function getPets() {
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching pets:", error);
    throw error;
  }

  return data;
}

export async function updatePet(id: string, updates: Partial<Pet>) {
  const { data, error } = await supabase
    .from("pets")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating pet:", error);
    throw error;
  }

  return data;
}

export async function deletePet(id: string) {
  const { error } = await supabase.from("pets").delete().eq("id", id);

  if (error) {
    console.error("Error deleting pet:", error);
    throw error;
  }
}