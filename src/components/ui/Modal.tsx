import { ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

type TModal = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

type TModalContext = {
  onClose: () => void;
};

type TChildren = { children: ReactNode };

const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({
  isOpen,
  children,
  onClose,
}: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={(e) => handleOutsideClose(e)}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: { children?: ReactNode }) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <button onClick={onClose} className="ml-auto">
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-6 h-6 bg-red-500 rounded-md p-0.5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: TChildren) => {
  return (
    <div className="flex justify-center items-center w-full mb-3">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
