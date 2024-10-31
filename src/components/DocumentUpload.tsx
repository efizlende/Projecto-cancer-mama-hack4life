import React, { useCallback, useState } from 'react';
import { Upload, X, FileIcon, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

interface DocumentUploadProps {
  label: string;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  error?: string;
  value?: File | null;
  isRequired?: boolean;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  label,
  onChange,
  accept = '.pdf,.doc,.docx',
  maxSize = 5, // 5MB default
  error,
  value,
  isRequired = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string>('');

  const validateFile = (file: File): boolean => {
    setValidationError('');

    // Check file type
    const fileType = file.name.toLowerCase().split('.').pop();
    const acceptedTypes = accept.split(',').map(type => 
      type.trim().replace('.', '').toLowerCase()
    );
    
    if (!acceptedTypes.includes(fileType || '')) {
      setValidationError(`Tipo de arquivo não permitido. Use: ${accept}`);
      return false;
    }

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setValidationError(`Arquivo muito grande. Tamanho máximo: ${maxSize}MB`);
      return false;
    }

    return true;
  };

  const handleFile = async (file: File) => {
    if (!validateFile(file)) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate file processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      onChange(file);
    } catch (err) {
      setValidationError('Erro ao processar arquivo');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const renderFilePreview = () => {
    if (!value) return null;

    return (
      <div className="mt-2 p-3 bg-gray-50 rounded-md flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileIcon className="h-5 w-5 text-blue-500" />
          <span className="text-sm text-gray-600">{value.name}</span>
          <span className="text-xs text-gray-400">
            ({(value.size / (1024 * 1024)).toFixed(2)}MB)
          </span>
        </div>
        <button
          type="button"
          onClick={() => onChange(null)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {isRequired && (
          <span className="text-red-500">*</span>
        )}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative group border-2 border-dashed rounded-lg p-6
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${error || validationError ? 'border-red-300' : ''}
          ${value ? 'bg-gray-50' : 'hover:bg-gray-50'}
          transition-all duration-150 ease-in-out
        `}
      >
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleFile(file);
            }
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isLoading}
        />

        <div className="flex flex-col items-center justify-center text-sm">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-2">
              <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
              <span className="text-gray-500">Processando arquivo...</span>
            </div>
          ) : value ? (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
              <span>Arquivo carregado</span>
            </div>
          ) : (
            <>
              <Upload className="h-8 w-8 text-gray-400 group-hover:text-blue-500 mb-2" />
              <span className="text-gray-600 group-hover:text-gray-700">
                Arraste um arquivo ou clique para selecionar
              </span>
              <span className="text-gray-400 text-xs mt-1">
                Formatos aceitos: {accept} (Max: {maxSize}MB)
              </span>
            </>
          )}
        </div>
      </div>

      {renderFilePreview()}

      {(error || validationError) && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error || validationError}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DocumentUpload;