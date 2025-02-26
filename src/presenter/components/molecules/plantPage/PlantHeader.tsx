import { useNavigate } from 'react-router';
import Button from '../../atoms/buttons/Button';

export default function PlantHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <Button onclick={() => navigate('/sarkvevi')} label="სარკვევი" />
      <Button
        onclick={() => navigate('/families')}
        variant="tertiary"
        label="ოჯახები"
      />
    </div>
  );
}
