import { forwardRef, type InputHTMLAttributes } from 'react';
interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

// O forwardRef recebe o tipo do elemento (HTMLInputElement) e o tipo das props
export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ labelText, ...props }, ref) => {
    return (
      <div className='formRow'>
        <label htmlFor={props.id}>{labelText}</label>
        {/* Aqui a mágica acontece: a ref é conectada ao input real */}
        <input {...props} ref={ref} />
      </div>
    );
  }
);