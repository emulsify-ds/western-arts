import React from 'react';
import { useEffect } from '@storybook/client-api';
// Global Data
import globalDataImages from 'western-up-twig/_global-data/images.yml';
import image from 'western-up-twig/01-atoms/images/image/responsive-image.twig';
import figure from 'western-up-twig/01-atoms/images/image/figure.twig';
import iconTwig from 'western-up-twig/01-atoms/images/icons/icons.twig';
import bgImageTwig from 'western-up-twig/01-atoms/images/background-image/background-image.twig';
import imageData from 'western-up-twig/01-atoms/images/image/image.yml';
import figureData from 'western-up-twig/01-atoms/images/image/figure.yml';
import iconData from 'western-up-twig/01-atoms/images/icons/icons.yml';
import bgImageContent from 'western-up-twig/01-atoms/images/background-image/background-image--with-content.yml';
import studioArtsLogoSVG from './studio-arts.twig';
import 'western-up-twig/01-atoms/images/background-image/background-image';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => (
  <div dangerouslySetInnerHTML={{ __html: image(imageData) }} />
);
export const figures = () => (
  <div dangerouslySetInnerHTML={{ __html: figure(figureData) }} />
);
export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
export const studioArtsLogo = () => (
  <div dangerouslySetInnerHTML={{ __html: studioArtsLogoSVG() }} />
);
export const backgroundImage = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{ __html: bgImageTwig(globalDataImages) }}
    />
  );
};

export const backgroundImageWithContent = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{
        __html: bgImageTwig({ ...globalDataImages, ...bgImageContent }),
      }}
    />
  );
};
