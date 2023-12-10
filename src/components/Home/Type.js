import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t('typeStrings.0'),
          t('typeStrings.1'),
          t('typeStrings.2'),
          t('typeStrings.3'),
          t('typeStrings.4'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
