import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

// Types
interface FormData {
  name: string;
  email: string;
  documents: {
    cv: File | null;
    id: File | null;
    motivationLetter: File | null;
  };
}

interface FormErrors {
  name?: string;
  email?: string;
  documents?: {
    cv?: string;
    id?: string;
    motivationLetter?: string;
  };
}

const ApplicationForm = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    documents: {
      cv: null,
      id: null,
      motivationLetter: null,
    },
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.documents.cv) {
      newErrors.documents = { ...newErrors.documents, cv: 'CV é obrigatório' };
    }

    if (!formData.documents.id) {
      newErrors.documents = { ...newErrors.documents, id: 'Documento de identidade é obrigatório' };
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FileUpload: React.FC<{
    label: string;
    onChange: (file: File | null) => void;
    error?: string;
  }> = ({ label, onChange, error }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        accept=".pdf,.doc,.docx"
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );

  if (submitSuccess) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <CardTitle>Candidatura Enviada com Sucesso!</CardTitle>
            <p className="text-gray-600">
              Agradecemos seu interesse. Entraremos em contato em breve.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Formulário de Candidatura</CardTitle>
      </CardHeader>
      <CardContent>
        {submitError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full p-2 border rounded-md ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full p-2 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="space-y-4">
            <FileUpload
              label="Carregar CV (PDF, DOC, DOCX)"
              onChange={(file) => setFormData(prev => ({
                ...prev,
                documents: { ...prev.documents, cv: file }
              }))}
              error={errors.documents?.cv}
            />

            <FileUpload
              label="Documento de Identidade (PDF, DOC, DOCX)"
              onChange={(file) => setFormData(prev => ({
                ...prev,
                documents: { ...prev.documents, id: file }
              }))}
              error={errors.documents?.id}
            />

            <FileUpload
              label="Carta de Motivação (Opcional)"
              onChange={(file) => setFormData(prev => ({
                ...prev,
                documents: { ...prev.documents, motivationLetter: file }
              }))}
              error={errors.documents?.motivationLetter}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Enviando...
              </>
            ) : (
              'Enviar Candidatura'
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;