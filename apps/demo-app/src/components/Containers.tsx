'use client';
import { styled } from '@zeiss/beyond-online-react';

export const StyledAppLayoutContainer = styled.div`
  width: 100%;
  overflow: auto;
  padding: var(--spacing-xs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
`;

export const StyledContentContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentContainer = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StyledContentContainer>
      {children}
    </StyledContentContainer>
  )
}