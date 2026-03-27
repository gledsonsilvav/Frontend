import React from 'react';

type DefaultInputProps = {
  id: string;
  labelText: string; // Nova prop obrigatória
} & React.ComponentProps<'input'>;

export function DefaultInput({ 
  id, 
  type, 
  labelText, 
  ...rest // 1. Captura todo o resto (placeholder, disabled, etc)
}: DefaultInputProps) {
  return (
    <>
      {/* Agora o texto da label vem da prop labelText */}
      <label htmlFor={id}>{labelText}</label>
      
      {/* 2. O {...rest} despeja automaticamente todas as outras props aqui */}
      <input id={id} type={type} {...rest} />
    </>
  );
}