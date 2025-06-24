import Image from "next/image";

interface ModalProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Modal({ images, index, onClose, onNext, onPrev }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-40">

      <div className="relative w-full max-w-6xl flex justify-center items-center">

        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-50 text-white text-4xl font-bold hover:text-red-500 transition"
        >
          &times;
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-0 top-1/2 z-50 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition"
          >
            &#8592;
          </button>
        )}

        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          width={1000}
          height={600}
          className="object-contain rounded-lg max-h-[80vh] w-auto"
        />

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-0 top-1/2 z-50 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition"
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}
