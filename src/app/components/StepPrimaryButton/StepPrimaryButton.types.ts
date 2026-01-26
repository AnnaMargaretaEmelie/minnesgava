export type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"
};