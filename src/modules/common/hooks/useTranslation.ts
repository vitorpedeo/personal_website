import { useCallback } from 'react';
import { useIntl } from 'react-intl';

const useTranslation = () => {
  const { formatMessage } = useIntl();

  const translate = useCallback(
    (id: string) => formatMessage({ id }),
    [formatMessage],
  );

  return translate;
};

export default useTranslation;
