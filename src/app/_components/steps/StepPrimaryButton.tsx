"use client";

export type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function StepPrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}{" "}
    </button>
  );
}
