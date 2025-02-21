'use client';
import {ContentContainer, Footer, Header} from "@/components";
import * as React from "react";
import {
  ApplicationHeaderProps,
  BurgerMenuProps,
  PrimaryUtilityButton, SecondaryUtilityButton,
  ShellLayout,
  useBeyondOnlineBreakpoints
} from "@zeiss/beyond-online-react";

export default function Home({ children }: Readonly<{children: React.ReactNode; }>) {
  const breakpoints = useBeyondOnlineBreakpoints();
  const showBurgerMenu = breakpoints.m.screenIsSmallerOrEqualThanThis;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const shellLayout: ShellLayout = 'without-side-nav';

  /*
   * TODO: replace links with actual URLs from your product apps.
   * Refer to Beyond Online documentation on how to setup your App shell links:
   * https://beyond.zeiss.com/d/V6diyrWaeh1V/patterns#/-/ui-shell/variant-without-side-navigation
   *
   * Note: These elements and links will be rendered inside the ApplicationHeader
   * on desktop and will be moved into the BurgerMenu layout on tablet / mobile.
   */
  const responsiveLinks = {
    navigationItems: [
      {
        icon: 'Home',
        title: 'Home',
        href: '/',
      },
      {
        icon: 'Placeholder',
        title: 'Page 1',
        href: '/page-1',
      },
      {
        icon: 'Placeholder',
        title: 'Page 2',
        href: '/page-2',
      },
    ],
    primaryUtilities: [
      {
        title: 'View cart',
        icon: 'ShoppingCart',
        content: <PrimaryUtilityButton icon="ShoppingCart" />,
        href: '/cart',
      },
      {
        title: 'Other Apps',
        icon: 'NavigationApps',
        content: <PrimaryUtilityButton icon="NavigationApps" />,
        href: '/apps',
      },
    ],
    secondaryUtilities: [
      {
        title: 'EUR €',
        href: '/eur',
        onClick: () => console.log('Secondary Utility clicked'),
      },
    ],
  } as const;

  const burgerMenuGroups: BurgerMenuProps['groups'] = [
    responsiveLinks.navigationItems.map((it) => ({
      href: it.href,
      title: it.title,
      icon: it.icon,
    })),
    responsiveLinks.primaryUtilities.map((it) => ({
      href: it.href,
      title: it.title,
      icon: it.icon,
    })),
    responsiveLinks.secondaryUtilities.map((it) => ({
      href: it.href,
      title: it.title,
    })),
  ];

  const navigationItems: ApplicationHeaderProps['navigationItems'] =
    responsiveLinks.navigationItems.map((it) => ({
      href: it.href,
      text: it.title,
      visibleOnMobile: true,
    }));

  const primaryUtilities: ApplicationHeaderProps['primaryUtilities'] = [
    {
      content: <PrimaryUtilityButton icon="Search" />,
      visibleOnMobile: true,
    },
    {
      content: responsiveLinks.primaryUtilities[0].content,
    },
    {
      content: responsiveLinks.primaryUtilities[1].content,
    },
  ];

  if (showBurgerMenu) {
    primaryUtilities.push({
      content: (
        <PrimaryUtilityButton
          icon="BurgerMenu"
          data-testid="BurgerMenuToggle"
          onClick={() => setIsBurgerMenuOpen(true)}
        />
      ),
      visibleOnMobile: true,
    });
  }

  const secondaryUtilities: ApplicationHeaderProps['secondaryUtilities'] =
    responsiveLinks.secondaryUtilities.map((it) => ({
      content: <SecondaryUtilityButton label={it.title} onClick={it.onClick} />,
    }));

  return (
    <>
      <Header />
        <ContentContainer>
          {children}
        </ContentContainer>
      <Footer />
    </>
  );
}
