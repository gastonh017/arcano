import React from 'react';
import Button from 'react-bootstrap/Button';

const BotonDescarga = ({ fileName }) => {
  const handleDownload = () => {
    const filePath = `/images/svg/lienzos/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload}>Descargar</Button>
  );
};

export default BotonDescarga;