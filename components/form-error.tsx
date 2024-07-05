import { FaExclamationTriangle } from "react-icons/fa";

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive-500">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
