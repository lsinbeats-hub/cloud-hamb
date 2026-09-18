import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import initialCustomImages from '../config/customImages.json';

const STORAGE_KEY = 'cloud_custom_images';

export interface ImageTarget {
  id: string;
  title: string;
  defaultSrc: string;
  isTransparent?: boolean;
}

interface ImageContextType {
  getImage: (id: string, defaultSrc: string) => string;
  setImage: (id: string, newSrc: string) => void;
  resetImage: (id: string) => void;
  resetAllImages: () => void;
  openChangeModal: (target: ImageTarget) => void;
  closeChangeModal: () => void;
  modalTarget: ImageTarget | null;
  isModalOpen: boolean;
  toastMessage: string | null;
  getAllImagesConfig: () => Record<string, string>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    return { ...(initialCustomImages as Record<string, string>) };
  });
  const [modalTarget, setModalTarget] = useState<ImageTarget | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Carregar imagens customizadas do localStorage na montagem (mesclando com defaults do arquivo)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setImages((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn('Erro ao carregar imagens do localStorage:', e);
    }
  }, []);

  // Exibir toast temporário
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Obter imagem atual (seja customizada ou padrão)
  const getImage = useCallback(
    (id: string, defaultSrc: string): string => {
      return images[id] || defaultSrc;
    },
    [images]
  );

  // Atualizar imagem com persistência
  const setImage = useCallback(
    (id: string, newSrc: string) => {
      setImages((prev) => {
        const updated = { ...prev, [id]: newSrc };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.warn('Erro ao salvar no localStorage (limite de cota atingido?):', e);
        }
        return updated;
      });
      showToast('Foto atualizada com sucesso!');
    },
    [showToast]
  );

  // Restaurar imagem individual para o padrão original
  const resetImage = useCallback(
    (id: string) => {
      setImages((prev) => {
        const updated = { ...prev };
        delete updated[id];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.warn('Erro ao atualizar localStorage:', e);
        }
        return updated;
      });
      showToast('Foto restaurada para a original!');
    },
    [showToast]
  );

  // Restaurar todas as imagens
  const resetAllImages = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
    setImages({ ...(initialCustomImages as Record<string, string>) });
    showToast('Todas as fotos foram restauradas para as originais!');
  }, [showToast]);

  const openChangeModal = useCallback((target: ImageTarget) => {
    setModalTarget(target);
    setIsModalOpen(true);
  }, []);

  const closeChangeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const getAllImagesConfig = useCallback((): Record<string, string> => {
    return images;
  }, [images]);

  return (
    <ImageContext.Provider
      value={{
        getImage,
        setImage,
        resetImage,
        resetAllImages,
        openChangeModal,
        closeChangeModal,
        modalTarget,
        isModalOpen,
        toastMessage,
        getAllImagesConfig,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export function useImages() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages deve ser utilizado dentro de um ImageProvider');
  }
  return context;
}
