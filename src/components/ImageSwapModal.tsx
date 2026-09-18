import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Upload,
  Link as LinkIcon,
  Sparkles,
  RotateCcw,
  Check,
  AlertCircle,
  Image as ImageIcon,
  Copy,
  CheckCheck,
  Share2,
} from 'lucide-react';
import { useImages } from '../context/ImageContext';
import { BURGER_IMAGE_PRESETS, ImagePreset } from '../data/imagePresets';

export const ImageSwapModal: React.FC = () => {
  const {
    isModalOpen,
    closeChangeModal,
    modalTarget,
    getImage,
    setImage,
    resetImage,
    getAllImagesConfig,
  } = useImages();

  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets' | 'export'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Inicializar preview com a imagem atual
  useEffect(() => {
    if (modalTarget) {
      const current = getImage(modalTarget.id, modalTarget.defaultSrc);
      setSelectedPreview(current);
      setUrlInput(current.startsWith('data:') ? '' : current);
      setErrorMsg(null);
      setActiveTab('upload');
      setCopied(false);
    }
  }, [modalTarget, getImage]);

  if (!isModalOpen || !modalTarget) return null;

  const currentActiveImage = getImage(modalTarget.id, modalTarget.defaultSrc);

  // Helper para redimensionar e comprimir arquivo no navegador
  const processImageFile = (file: File) => {
    setErrorMsg(null);
    setIsProcessing(true);

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Por favor, selecione um arquivo de imagem válido (PNG, JPG, WEBP).');
      setIsProcessing(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (!result) {
        setErrorMsg('Erro ao ler arquivo.');
        setIsProcessing(false);
        return;
      }

      // Se for PNG transparente, tenta manter transparência
      const img = new Image();
      img.onload = () => {
        try {
          const maxDim = 1400;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const isPng = file.type === 'image/png';
            const compressedData = canvas.toDataURL(isPng ? 'image/png' : 'image/jpeg', isPng ? undefined : 0.88);
            setSelectedPreview(compressedData);
          } else {
            setSelectedPreview(result);
          }
        } catch {
          setSelectedPreview(result);
        }
        setIsProcessing(false);
      };
      img.onerror = () => {
        setErrorMsg('Não foi possível carregar a imagem selecionada.');
        setIsProcessing(false);
      };
      img.src = result;
    };
    reader.onerror = () => {
      setErrorMsg('Falha na leitura do arquivo local.');
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleApplyUrl = () => {
    setErrorMsg(null);
    if (!urlInput.trim()) {
      setErrorMsg('Insira uma URL de imagem válida.');
      return;
    }
    setSelectedPreview(urlInput.trim());
  };

  const handleSelectPreset = (preset: ImagePreset) => {
    setSelectedPreview(preset.url);
    setUrlInput(preset.url);
    setErrorMsg(null);
  };

  const handleSave = () => {
    if (selectedPreview) {
      setImage(modalTarget.id, selectedPreview);
      closeChangeModal();
    }
  };

  const handleResetToDefault = () => {
    resetImage(modalTarget.id);
    setSelectedPreview(modalTarget.defaultSrc);
    setUrlInput(modalTarget.defaultSrc);
    closeChangeModal();
  };

  return (
    <AnimatePresence>
      <div
        id="image-swap-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={closeChangeModal}
      >
        <motion.div
          id="image-swap-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#120709] border border-[#3e141a] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#280d12] bg-[#17090c]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#260c10] border border-[#48181f] flex items-center justify-center text-[#ef4444]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide leading-tight">
                  Trocar Imagem
                </h3>
                <p className="text-xs text-[#a39588] leading-none mt-0.5">
                  Foto: <strong className="text-white">{modalTarget.title}</strong>
                </p>
              </div>
            </div>

            <button
              id="btn-close-modal"
              onClick={closeChangeModal}
              className="w-8 h-8 rounded-full bg-[#200a0d] hover:bg-[#330f14] border border-[#3e151a] flex items-center justify-center text-[#b8a99c] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Context Tip if transparent */}
            {modalTarget.isTransparent && (
              <div className="bg-[#1e0a0d] border border-[#521921] rounded-2xl p-3.5 flex items-start gap-3 text-xs text-[#d8c7b8]">
                <Sparkles className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>
                  <strong>Dica para o Destaque Principal:</strong> Imagens em formato PNG com <strong>fundo transparente</strong> mantêm a iluminação e a levitação tridimensional sem bordas brancas.
                </span>
              </div>
            )}

            {/* Live Preview Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0a0405] border border-[#230b0f] p-3.5 rounded-2xl">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8e7e72] tracking-wider block mb-1.5">
                  Foto Atual
                </span>
                <div className="aspect-video sm:aspect-square rounded-xl bg-[#14080a] border border-[#2d1115] overflow-hidden flex items-center justify-center relative">
                  <img
                    src={currentActiveImage}
                    alt="Atual"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[#ef4444] tracking-wider block mb-1.5 flex items-center justify-between">
                  <span>Nova Foto (Pré-visualização)</span>
                  {selectedPreview !== currentActiveImage && (
                    <span className="text-[#22c55e] font-bold">● Alterada</span>
                  )}
                </span>
                <div className="aspect-video sm:aspect-square rounded-xl bg-[#14080a] border border-[#3e151a] overflow-hidden flex items-center justify-center relative">
                  {selectedPreview ? (
                    <img
                      src={selectedPreview}
                      alt="Preview"
                      className="max-h-full max-w-full object-contain"
                      onError={() => setErrorMsg('Não foi possível carregar a imagem deste link/arquivo.')}
                    />
                  ) : (
                    <span className="text-xs text-[#71655b]">Nenhuma imagem selecionada</span>
                  )}
                </div>
              </div>
            </div>

            {/* Error banner */}
            {errorMsg && (
              <div className="bg-red-950/50 border border-red-800/80 rounded-xl p-3 flex items-center gap-2.5 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex rounded-xl bg-[#090304] p-1 border border-[#280e12]">
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'upload'
                    ? 'bg-[#b91c1c] text-white shadow-md'
                    : 'text-[#9c8e82] hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Arquivo</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'url'
                    ? 'bg-[#b91c1c] text-white shadow-md'
                    : 'text-[#9c8e82] hover:text-white'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Link URL</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('presets')}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'presets'
                    ? 'bg-[#b91c1c] text-white shadow-md'
                    : 'text-[#9c8e82] hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prontas</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('export')}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'export'
                    ? 'bg-[#b91c1c] text-white shadow-md'
                    : 'text-[#9c8e82] hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Publicar Vercel</span>
              </button>
            </div>

            {/* Tab 1: File Upload / Drag & Drop */}
            {activeTab === 'upload' && (
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-file-input"
                />

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#3d161b] hover:border-[#b91c1c] rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-colors bg-[#17080a] hover:bg-[#1e0a0d] group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2b0e12] border border-[#501a21] flex items-center justify-center text-[#ef4444] mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-white text-sm">
                    {isProcessing ? 'Processando imagem...' : 'Clique para escolher do seu computador ou celular'}
                  </p>
                  <p className="text-xs text-[#8e7e72] mt-1">
                    Ou arraste e solte o arquivo aqui (PNG, JPG, WEBP)
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: URL Input */}
            {activeTab === 'url' && (
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#b8a99c]">
                  Insira o link direto da imagem na internet:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    id="image-url-input"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://exemplo.com/foto-do-burger.jpg"
                    className="flex-1 bg-[#17090c] border border-[#3b151a] focus:border-[#ef4444] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none placeholder:text-[#5a4c48]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    className="bg-[#2a0e13] hover:bg-[#b91c1c] text-white border border-[#48181f] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 uppercase tracking-wider"
                  >
                    Visualizar
                  </button>
                </div>
                <p className="text-[11px] text-[#7d6e64]">
                  Exemplos: Links do Unsplash, Google Fotos compartilhado, Cloudinary, Imgur, ou do seu próprio servidor.
                </p>
              </div>
            )}

            {/* Tab 3: Presets */}
            {activeTab === 'presets' && (
              <div className="space-y-3">
                <p className="text-xs text-[#a8998d]">
                  Selecione uma imagem artesanal de alta qualidade já otimizada:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {BURGER_IMAGE_PRESETS.map((preset) => {
                    const isSelected = selectedPreview === preset.url;
                    return (
                      <button
                        type="button"
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset)}
                        className={`text-left p-2 rounded-xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#290d11] border-[#ef4444] ring-1 ring-[#ef4444]'
                            : 'bg-[#15070a] border-[#2f1115] hover:border-[#521921]'
                        }`}
                      >
                        <div className="aspect-square rounded-lg overflow-hidden bg-black/50 mb-1.5 flex items-center justify-center">
                          <img
                            src={preset.url}
                            alt={preset.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-bold text-white line-clamp-1">
                          {preset.name}
                        </span>
                        <span className="text-[9px] text-[#8c7e73] line-clamp-1">
                          {preset.category === 'transparent'
                            ? 'Transparente'
                            : preset.category === 'instagram'
                            ? 'Instagram'
                            : 'Gourmet'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 4: Export to Vercel & GitHub / Permanent Save */}
            {activeTab === 'export' && (
              <div className="space-y-4">
                <div className="bg-[#18090c] border border-[#48181f] rounded-2xl p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Share2 className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                        Como sincronizar suas fotos com o GitHub / Vercel
                      </h4>
                      <p className="text-xs text-[#b0a195] mt-1 leading-relaxed">
                        As fotos que você selecionou no computador ficam salvas no navegador (localStorage). Para que o repositório no <strong>GitHub</strong> e o deploy no <strong>Vercel</strong> recebam essas fotos permanentemente, clique no botão abaixo para copiar a configuração e cole aqui no chat:
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0b0405] border border-[#2b0e12] rounded-xl p-3 font-mono text-[11px] text-[#f4efe8] max-h-36 overflow-y-auto select-all">
                    {JSON.stringify(getAllImagesConfig(), null, 2)}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        const json = JSON.stringify(getAllImagesConfig(), null, 2);
                        navigator.clipboard.writeText(json);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 3000);
                      }}
                      className="inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#dc2626] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <CheckCheck className="w-4 h-4 text-emerald-300" />
                          <span>Copiado com Sucesso!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar Configuração das Fotos</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-[#8e7e72]">
                      (Depois de copiar, envie aqui no chat: &quot;aplique essas fotos no repositório&quot;)
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-[#280d12] bg-[#16080b] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              id="btn-reset-default-image"
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1.5 text-xs text-[#b8a89b] hover:text-[#ef4444] transition-colors py-2 px-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Original</span>
            </button>

            <div className="flex items-center gap-2.5 ml-auto">
              <button
                type="button"
                id="btn-cancel-modal"
                onClick={closeChangeModal}
                className="px-4 py-2.5 rounded-xl border border-[#3b151a] hover:bg-[#200a0d] text-xs font-bold text-[#b8a99c] hover:text-white transition-all uppercase tracking-wider"
              >
                Cancelar
              </button>

              <button
                type="button"
                id="btn-save-image"
                onClick={handleSave}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#b91c1c] hover:from-[#dc2626] hover:to-[#ef4444] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-red-950/80 transition-all border border-red-500/40 active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Salvar Foto</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
