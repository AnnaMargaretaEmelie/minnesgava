//grid med fyra bilder

type Step1Image = {
  id: string;
  src: string;
  alt: string;
};

type Step1ImagePickerProps = {
  images: Step1Image[];
  selectedImageId: string | null;
  onSelectImage: (id: string) => void;
};

export default function Step1ImagePicker({
  images,
  selectedImageId,
  onSelectImage,
}: Step1ImagePickerProps) {
  return (
    <div>
      <p>Välj motiv</p>
      <div>
        {images.map((image) => {
          const isSelected = image.id === selectedImageId;

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => onSelectImage(image.id)}
              style={{
                border: isSelected ? "2px solid black" : "1px solid #ccc",
                padding: "4px",
                marginRight: "8px",
                cursor: "pointer",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ display: "block", width: "80px", height: "auto" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
