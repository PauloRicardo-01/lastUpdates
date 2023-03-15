import { LoadingContainer } from './styles';

type Props = {
  color?: string;
};

export function Loading({ color }: Props) {
  return <LoadingContainer color={color}></LoadingContainer>;
}
