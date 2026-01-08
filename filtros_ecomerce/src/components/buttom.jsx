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
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh' 
    }}>
      <button 
        onClick={showToast}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Mostrar Notificação
      </button>
    </div>
  )
}

export default ToastNotification