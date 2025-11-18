"use client";

export type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
  className,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}{" "}
    </button>
  );
}
