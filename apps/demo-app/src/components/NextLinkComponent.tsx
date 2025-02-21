import Link from 'next/link';
import { LinkComponent } from '@zeiss/beyond-online-react';

export const NextLinkComponent: LinkComponent = ({
  href = '',
  ...props
}) => {
  return <Link href={href} {...props} />;
};
