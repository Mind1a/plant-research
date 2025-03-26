import { useNavigate } from 'react-router';
import Button from '../../atoms/buttons/Button';

export default function PlantHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-6">
      <Button
        clasname="max-650:h-10 max-400:w-full"
        onclick={() => navigate('/sarkvevi')}
        label="სარკვევი"
      />
      <Button
        clasname="max-650:h-10 max-400:w-full"
        onclick={() => navigate('/families')}
        variant="tertiary"
        label="ოჯახები"
      />
    </div>
  );
}
