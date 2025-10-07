import { useState, useCallback } from "react";

export const useImperativeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const openModal = useCallback((content: React.ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        // Optional: clear content after animation
        setTimeout(() => setModalContent(null), 300);
    }, []);

    const ModalComponent = useCallback(
        ({
            backdropClass = "fixed inset-0 bg-black bg-opacity-50",
            modalClass = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl",
        } = {}) => {
            if (!isOpen) return null;

            return (
                <div className={backdropClass} onClick={closeModal}>
                    <div
                        className={modalClass}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {modalContent}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>
                </div>
            );
        },
        [isOpen, modalContent, closeModal]
    );

    return {
        isOpen,
        openModal,
        closeModal,
        ModalComponent,
    };
};
