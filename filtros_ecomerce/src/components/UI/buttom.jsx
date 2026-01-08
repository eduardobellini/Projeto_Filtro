import React from 'react'
import { toast } from 'react-hot-toast';

function ToastNotification() {

  const showToast = () => {
    toast('Mensagem personalizada!', {
      duration: 4000,
      icon: '👏',
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button 
        onClick={showToast}
        className="px-6 py-3 text-base bg-green-500 text-white border-none rounded-lg cursor-pointer font-bold hover:bg-green-600 transition-colors"
      >
        Mostrar Notificação
      </button>
    </div>
  )
}

export default ToastNotification