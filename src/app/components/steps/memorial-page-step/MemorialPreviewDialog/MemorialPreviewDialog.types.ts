export type MemorialPreviewDialogProps = {
    imageSrc: string;
    imageAlt: string;
    fullName: string;
    greeting: string; 
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: ()=> void;
}