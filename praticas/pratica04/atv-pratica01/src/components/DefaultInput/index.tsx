import React from 'react';

// Criamos o tipo combinando nosso ID obrigatório com as props nativas do input
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

// Desestruturamos o id e o type. 
// O restante das props (placeholder, value, etc) ficam guardadas no objeto 'props'
export function DefaultInput({ id, type, ...props }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Tarefa</label>
      <input id={id} type={type} {...props} />
    </>
  );
}