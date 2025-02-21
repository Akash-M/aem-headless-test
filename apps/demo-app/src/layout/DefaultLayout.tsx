'use client';
import * as React from "react";
import {
  ApplicationHeader,
  ApplicationHeaderProps, BurgerMenu,
  BurgerMenuProps,
  PrimaryUtilityButton, SecondaryUtilityButton,
  ShellLayout, UiShellFrame,
  useBeyondOnlineBreakpoints,
  Footer,
} from "@zeiss/beyond-online-react";
import {ContentContainer} from "@/components";

export function DefaultLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
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
        title: 'Products',
        href: '/',
      },
      {
        icon: 'Placeholder',
        title: 'News and Events',
        href: '/page-1',
      },
      {
        icon: 'Placeholder',
        title: 'About Us',
        href: '/page-2',
      },
    ],
    primaryUtilities: [
      {
        title: 'MyZEISS',
        content: <div>MyZEISS</div>,
        href: '/cart',
      },
      {
        title: 'Contact',
        content: <div>Contact</div>,
        href: '/apps',
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
        title: 'Germany',
        icon: 'Language',
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
      content: responsiveLinks.primaryUtilities[0].content,
    },
    {
      content: responsiveLinks.primaryUtilities[1].content,
    },
    {
      content: <PrimaryUtilityButton icon="Search" />,
      visibleOnMobile: true,
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
      content: <SecondaryUtilityButton label={it.title} onClick={it.onClick} icon={it.icon}/>,
    }));

  return (
    <UiShellFrame
      sideNavigationState="none"
      controls={
        <>
          <ApplicationHeader
            sticky={true}
            applicationTitle="Medical Technology for healthcare professionals"
            logo={{
              size: 'm',
              variant: 'default',
            }}
            shellLayout={shellLayout}
            navigationItems={navigationItems}
            primaryUtilities={primaryUtilities}
            secondaryUtilities={secondaryUtilities}
          />
          <BurgerMenu
            groups={burgerMenuGroups}
            open={isBurgerMenuOpen}
            title="BurgerMenu"
            onClose={() => setIsBurgerMenuOpen(false)}
          />
        </>
      }
      footer={<Footer
        primaryContent={{
          actions: [
            {
              label: 'Contact',
              onClick: () => {},
            },
            {
              label: 'Publisher',
              onClick: () => {},
            },
            {
              label: 'Legal Notice',
              onClick: () => {},
            },
            {
              label: 'Data Protection',
              onClick: () => {},
            },
            {
              label: 'Tracking Preferences',
              onClick: () => {},
            },
            {
              href: 'http://zeiss.com',
              label: 'Link 1',
            },
            {
              href: 'http://zeiss.com',
              label: 'Link 2',
            },
          ],
          headline: 'Legal',
        }}
        productName="Example App v1.0"
        title={{
          label: 'ZEISS International',
          onClick: () => {},
        }}
      />}
    >
      <ContentContainer>
        {children}
      </ContentContainer>
    </UiShellFrame>
  )
}
