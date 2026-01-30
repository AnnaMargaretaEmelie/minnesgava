


export const PURPOSE_OPTIONS = [
{ value: "default", label: "Den bästa hjärnforskningen med störst behov"}, 
{ value: "adhd", label: "ADHD" },
{ value: "aphasia", label: "Afasi" },
{ value: "als", label: "ALS" },
{ value: "alzheimers", label: "Alzheimers sjukdom" },
{ value: "autism", label: "Autism" },
{ value: "child-brain", label: "Barnhjärnan" },
{ value: "addiction", label: "Beroende" },
{ value: "bipolar-disorder", label: "Bipolär sjukdom" },
{ value: "cerebral-palsy", label: "Cerebral Pares" },
{ value: "dementia", label: "Demens" },
{ value: "depression", label: "Depression" },
{ value: "dyslexia", label: "Dyslexi" },
{ value: "epilepsy", label: "Epilepsi" },
{ value: "brain-injury", label: "Hjärnskada" },
{ value: "brain-tumor", label: "Hjärntumör" },
{ value: "huntingtons", label: "Huntingtons sjukdom" },
{ value: "migraine", label: "Migrän" },
{ value: "ms", label: "MS" },
{ value: "narcolepsy", label: "Narkolepsi" },
{ value: "parkinsons", label: "Parkinsons sjukdom" },
{ value: "spinal-cord-injury", label: "Ryggmärgsskada" },
{ value: "schizophrenia", label: "Schizofreni" },
{ value: "language-disorder", label: "Språkstörning" },
{ value: "stress-related-illness", label: "Stressrelaterad ohälsa" },
{ value: "stroke", label: "Stroke" },
{ value: "tourette", label: "Tourettes syndrom" },
{ value: "restless-legs", label: "Willis Ekboms sjukdom" },
{ value: "anxiety", label: "Ångest" },
{ value: "eating-disorders", label: "Ätstörningar" },

] as const;

export type PurposeValueType = typeof PURPOSE_OPTIONS[number]["value"];

export type PurposeOption = {
  value: PurposeValueType;
  label: string;
};

export const DEFAULT_PURPOSE: PurposeValueType = "default";